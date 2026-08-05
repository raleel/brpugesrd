// .github/scripts/translate.mjs
//
// Reads the list of changed rules/en/*.md files (newline-separated) from the
// CHANGED_FILES environment variable, translates each one into every target
// language with the Gemini Batch API (all languages for a file submitted as
// one batch job), and writes the result to the matching rules/<lang>/
// folder. Falls back to sequential per-language requests if the batch job
// itself fails, or for any individual language whose batch result failed.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { GoogleGenAI } from "@google/genai";

const TARGET_LANGUAGES = [
  "es", "fr", "it", "el", "zh-CN", "ar", "fa", "ur", "he", "ps", "ku", "dv",
  "hi", "ja", "ko", "tr", "vi", "ru", "uk", "hr", "sr", "bs", "sq", "mk", "sl",
  "tl", "bg", "bn", "te", "mr", "ta", "sw", "ha", "ms", "th", "my", "pt",
  "lt", "lv", "et", "fi", "sv", "no", "da", "is",
];

// gemini-2.5-flash-lite returned a hard 404 ("no longer available to new
// users") against this project's API key. Now trying gemini-3.1-flash-lite.
// Both the Batch API (ai.batches.create) and the sequential fallback path
// (ai.models.generateContent) read this same constant. Override via env var
// if this needs to change again.
const MODEL = process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";

// Max attempts (including the first try) per language before giving up and
// logging a final failure. Used by the sequential fallback path.
const MAX_ATTEMPTS = 4;

// How often to poll an in-flight batch job for completion.
const BATCH_POLL_INTERVAL_MS = 15000;

const BATCH_TERMINAL_STATES = new Set([
  "JOB_STATE_SUCCEEDED",
  "JOB_STATE_FAILED",
  "JOB_STATE_CANCELLED",
  "JOB_STATE_EXPIRED",
]);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Pulls an HTTP-ish status code out of a Gemini API error, regardless of
 * whether the SDK surfaced it as a numeric `.status`/`.code` property or
 * only as a JSON blob embedded in `error.message` (which is what
 * @google/genai currently does, e.g. `{"error":{"code":503,...}}`).
 */
function getErrorStatusCode(error) {
  if (typeof error?.status === "number") return error.status;
  if (typeof error?.code === "number") return error.code;

  const message = String(error?.message || "");
  const match = message.match(/"code"\s*:\s*(\d{3})/);
  if (match) return Number(match[1]);

  if (/RESOURCE_EXHAUSTED/i.test(message)) return 429;
  if (/UNAVAILABLE/i.test(message)) return 503;

  return null;
}

const SYSTEM_INSTRUCTION =
  "You are an expert TTRPG translator specializing in complex tabletop rules. " +
  "Translate the following markdown text into the target language code provided. " +
  "Retain all original Markdown formatting, headers, bolding, table structures, " +
  "and relative file links exactly as they are written. Do not add conversational " +
  "commentary or meta-text.";

/**
 * Replaces fenced code blocks and inline code spans with stable placeholder
 * tokens before sending text to the model, so the translator can't rephrase
 * or "helpfully" edit dice notation, stat blocks, or code samples. The
 * placeholders are plain, ASCII, punctuation-light tokens that survive
 * translation into any target language and are unlikely to collide with
 * real markdown content.
 */
function protectCodeBlocks(markdown) {
  const placeholders = [];
  let counter = 0;

  const withProtectedFences = markdown.replace(/```[\s\S]*?```/g, (match) => {
    const token = `[[CODEBLOCK${counter}]]`;
    placeholders.push({ token, value: match });
    counter += 1;
    return token;
  });

  const withProtectedInline = withProtectedFences.replace(/`[^`\n]+`/g, (match) => {
    const token = `[[INLINECODE${counter}]]`;
    placeholders.push({ token, value: match });
    counter += 1;
    return token;
  });

  return { protectedText: withProtectedInline, placeholders };
}

/** Swaps the placeholder tokens back out for the original, untranslated code. */
function restoreCodeBlocks(translatedText, placeholders) {
  let restored = translatedText;
  for (const { token, value } of placeholders) {
    restored = restored.split(token).join(value);
  }
  return restored;
}

// Structural "site frame" files that Docsify needs to render navigation and
// the landing page in every language. These are prioritized ahead of
// regular numbered content files (see sortByTranslationPriority) so that if
// a run is interrupted partway through (rate limits, cancellation, quota),
// every language that got ANY translation at all still has a working
// sidebar/navbar/home page rather than a half-translated site with a blank
// frame.
const STRUCTURAL_FILENAMES = ["README.md", "_sidebar.md", "_navbar.md"];

function structuralPriority(filePath) {
  const index = STRUCTURAL_FILENAMES.indexOf(path.basename(filePath));
  return index === -1 ? STRUCTURAL_FILENAMES.length : index;
}

/**
 * Sorts changed files so README.md, _sidebar.md, and _navbar.md always
 * translate first (in that order), before the numbered content files.
 * Non-structural files keep their existing relative order.
 */
function sortByTranslationPriority(files) {
  return [...files].sort((a, b) => structuralPriority(a) - structuralPriority(b));
}

function targetPathFor(englishPath, lang) {
  return englishPath.replace("rules/en/", `rules/${lang}/`);
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" });
}

/**
 * Lists every rules/en/*.md file, independent of what changed recently.
 * Used to bypass the git-diff-based CHANGED_FILES filter when a full
 * backfill is needed (see needsFullBackfill below). Prefers `git
 * ls-files` (fast, respects the repo's actual tracked file list even if
 * something is untracked/ignored), falling back to a plain directory
 * scan if git isn't available for some reason.
 */
function getAllEnglishFiles() {
  try {
    return git(["ls-files", "rules/en/*.md"])
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  } catch (error) {
    console.error(`git ls-files failed, falling back to a filesystem scan: ${error.message}`);
    return fs
      .readdirSync("rules/en")
      .filter((name) => name.endsWith(".md"))
      .map((name) => `rules/en/${name}`);
  }
}

/**
 * True if a target language's rules/<lang>/ directory doesn't exist yet,
 * or exists but has no markdown files in it (e.g. only a placeholder file
 * used to reserve the folder). Either way, that language has never
 * actually been translated, so a normal git-diff-scoped run (which only
 * covers whatever English files happened to change most recently) would
 * leave most of its content missing indefinitely.
 */
function languageNeedsFullBackfill(lang) {
  const dir = path.join("rules", lang);
  if (!fs.existsSync(dir)) return true;
  return !fs.readdirSync(dir).some((name) => name.endsWith(".md"));
}

/**
 * True when this run was triggered manually via workflow_dispatch AND the
 * user selected (or defaulted to) the "all" mode. A manual dispatch of
 * "changed-only" should behave exactly like a push -- only touch whatever
 * git-diff says changed -- not silently balloon into a full 13-file x
 * N-language backfill.
 */
function isManualAllModeRun() {
  if (process.env.GITHUB_EVENT_NAME !== "workflow_dispatch") return false;
  const mode = process.env.DISPATCH_MODE || "all";
  return mode === "all";
}

function configureGitIdentity() {
  try {
    git(["config", "user.name", "github-actions[bot]"]);
    git(["config", "user.email", "github-actions[bot]@users.noreply.github.com"]);
  } catch (error) {
    console.error(`Failed to configure git identity: ${error.message}`);
  }
}

/**
 * Commits and pushes whatever has been translated so far for one English
 * file, immediately after that file's language loop finishes. This is the
 * key fix for preserving progress: a single file/language failure (or the
 * job later timing out, being cancelled, or hitting a rate limit on a
 * *different* file) no longer wipes out everything translated up to that
 * point, since each file's results are safely on origin before we move on
 * to the next one.
 */
function commitAndPushProgress(englishPath) {
  try {
    git(["add", "rules/"]);
  } catch (error) {
    console.error(`git add failed for ${englishPath}: ${error.message}`);
    return;
  }

  let staged;
  try {
    staged = git(["diff", "--cached", "--name-only"]).trim();
  } catch (error) {
    console.error(`git diff failed for ${englishPath}: ${error.message}`);
    return;
  }

  if (!staged) {
    console.log(`No translation changes to commit for ${englishPath}.`);
    return;
  }

  try {
    git(["commit", "-m", `chore: auto-translate ${englishPath}`]);
  } catch (error) {
    console.error(`git commit failed for ${englishPath}: ${error.message}`);
    return;
  }

  const branch = process.env.GITHUB_REF_NAME;
  if (!branch) {
    console.error(
      `GITHUB_REF_NAME is not set; the commit for ${englishPath} is saved ` +
      "locally but was not pushed."
    );
    return;
  }

  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      git(["push", "origin", `HEAD:${branch}`]);
      console.log(`Committed and pushed translations for ${englishPath}.`);
      return;
    } catch (error) {
      console.error(`git push failed for ${englishPath} (attempt ${attempt + 1}/2): ${error.message}`);

      // The branch may have moved (e.g. another commit landed on it while
      // this long-running job was translating). Rebase once and retry.
      if (attempt === 0) {
        try {
          git(["pull", "--rebase", "origin", branch]);
        } catch (pullError) {
          console.error(`git pull --rebase failed for ${englishPath}: ${pullError.message}`);
          break;
        }
      }
    }
  }

  console.error(
    `Giving up pushing translations for ${englishPath} after retrying; ` +
    "progress is committed locally but not pushed to origin."
  );
}

async function translateOne(ai, protectedText, lang) {
  const prompt = `Target language code: ${lang}\n\n${protectedText}`;

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  const text = extractTextFromResponse(response);
  if (!text || !text.trim()) {
    throw new Error("Empty response from Gemini API");
  }

  return text;
}

/**
 * Calls translateOne with bounded exponential backoff + jitter, so
 * transient Google server overloads (503 UNAVAILABLE) or brief 429 rate
 * spikes self-heal instead of failing the whole language immediately.
 * Non-retryable errors (anything other than 429/503) fail fast.
 */
async function translateWithRetry(ai, protectedText, lang) {
  let lastError;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    try {
      return await translateOne(ai, protectedText, lang);
    } catch (error) {
      lastError = error;
      const statusCode = getErrorStatusCode(error);
      const isRetryable = statusCode === 503 || statusCode === 429;
      const isLastAttempt = attempt === MAX_ATTEMPTS - 1;

      if (!isRetryable || isLastAttempt) {
        throw error;
      }

      const backoffMs = 2 ** attempt * 1000;
      const jitterMs = 100 + Math.random() * 400; // 100-500ms
      const delayMs = backoffMs + jitterMs;

      console.warn(
        `Retryable error (status ${statusCode}) translating into "${lang}" ` +
        `(attempt ${attempt + 1}/${MAX_ATTEMPTS}). Retrying in ${Math.round(delayMs)}ms...`
      );
      await sleep(delayMs);
    }
  }

  // Unreachable, but keeps TypeScript/linters happy about a return path.
  throw lastError;
}

function buildGenerateContentRequest(protectedText, lang) {
  return {
    contents: [
      {
        role: "user",
        parts: [{ text: `Target language code: ${lang}\n\n${protectedText}` }],
      },
    ],
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  };
}

/** Polls a batch job every BATCH_POLL_INTERVAL_MS until it reaches a terminal state. */
async function pollBatchJob(ai, jobName) {
  let job = await ai.batches.get({ name: jobName });

  while (!BATCH_TERMINAL_STATES.has(job.state)) {
    await sleep(BATCH_POLL_INTERVAL_MS);
    job = await ai.batches.get({ name: jobName });
  }

  return job;
}

function formatBatchError(error) {
  if (!error) return "unknown error";
  return typeof error === "string" ? error : error.message || JSON.stringify(error);
}

/**
 * Extracts translated text from a batch job's inline response.
 *
 * `response.text` is a convenience getter that only exists on the SDK's
 * live GenerateContentResponse *class instance* returned by
 * `ai.models.generateContent()`. Batch inline responses (from
 * `ai.batches.get()`) are plain deserialized JSON objects, not instances of
 * that class, so `.text` is always `undefined` on them even though the
 * actual generated text is present -- it just needs to be pulled out of
 * `candidates[0].content.parts[].text` manually. We still try `.text` first
 * in case a future SDK version normalizes this, then fall back to walking
 * the raw candidate/parts structure.
 */
function extractTextFromResponse(response) {
  if (!response) return "";
  if (typeof response.text === "string" && response.text.trim()) {
    return response.text;
  }

  const candidates = response.candidates;
  if (Array.isArray(candidates)) {
    for (const candidate of candidates) {
      const parts = candidate?.content?.parts;
      if (Array.isArray(parts)) {
        const text = parts.map((part) => part?.text || "").join("");
        if (text.trim()) return text;
      }
    }
  }

  return "";
}

/**
 * Submits every language still needed for one English file as a single
 * Gemini Batch API job (one inline request per language), polls it to
 * completion, and returns a Map<lang, {ok, text} | {ok:false, error}>.
 *
 * Each request gets a unique customId (file-${index}-${filename}) purely
 * for our own bookkeeping/logging -- the SDK's inline batch responses come
 * back in the same order the requests were submitted in, so results are
 * mapped back to their language via that same index, not by relying on the
 * API to echo the customId back.
 *
 * Throws if the job itself fails to submit, times out in a non-terminal
 * failure state, or comes back with a mismatched response count -- callers
 * should catch this and fall back to sequential per-language requests.
 */
async function translateFileWithBatchApi(ai, englishPath, languagesToTranslate, protectedText) {
  const fileName = path.basename(englishPath);
  const customIds = languagesToTranslate.map((lang, index) => `file-${index}-${fileName}-${lang}`);
  const inlinedRequests = languagesToTranslate.map((lang) => buildGenerateContentRequest(protectedText, lang));

  console.log(
    `Submitting batch translation job for ${englishPath} covering ${languagesToTranslate.length} ` +
    `language(s): ${languagesToTranslate.join(", ")}`
  );

  const batchJob = await ai.batches.create({
    model: MODEL,
    src: inlinedRequests,
    config: { displayName: `translate-${fileName}` },
  });

  console.log(`Batch job ${batchJob.name} created for ${englishPath}; polling every ${BATCH_POLL_INTERVAL_MS / 1000}s...`);

  const finishedJob = await pollBatchJob(ai, batchJob.name);

  if (finishedJob.state !== "JOB_STATE_SUCCEEDED") {
    throw new Error(`Batch job ${batchJob.name} ended in state ${finishedJob.state}: ${formatBatchError(finishedJob.error)}`);
  }

  const inlinedResponses = finishedJob.dest?.inlinedResponses;
  if (!inlinedResponses || inlinedResponses.length !== languagesToTranslate.length) {
    throw new Error(
      `Batch job ${batchJob.name} returned ${inlinedResponses ? inlinedResponses.length : 0} response(s), ` +
      `expected ${languagesToTranslate.length}`
    );
  }

  const results = new Map();
  let loggedRawSample = false;

  inlinedResponses.forEach((inlineResponse, index) => {
    const lang = languagesToTranslate[index];
    const customId = customIds[index];

    if (inlineResponse.response) {
      const text = extractTextFromResponse(inlineResponse.response);
      if (text && text.trim()) {
        results.set(lang, { ok: true, text });
      } else {
        if (!loggedRawSample) {
          // First empty result in this batch: dump the raw response once so
          // a genuinely new response shape (not just the known .text-getter
          // gap) is easy to spot in the workflow logs.
          console.warn(
            `Raw inline response sample for ${customId} (debugging empty result): ` +
            JSON.stringify(inlineResponse.response, null, 2).slice(0, 2000)
          );
          loggedRawSample = true;
        }
        results.set(lang, { ok: false, error: new Error(`Empty response from Gemini batch API (${customId})`) });
      }
    } else {
      results.set(lang, { ok: false, error: new Error(`Batch request failed (${customId}): ${formatBatchError(inlineResponse.error)}`) });
    }
  });

  return results;
}

async function translateFile(ai, englishPath) {
  const englishContent = fs.readFileSync(englishPath, "utf8");
  const { protectedText, placeholders } = protectCodeBlocks(englishContent);

  // Skip languages that already have a translated file, unless the caller
  // explicitly asks to redo them. This lets a manual "translate everything"
  // backfill run pick up only what's actually missing (e.g. because an
  // earlier run hit a rate limit or quota error) instead of burning API
  // quota re-translating files that already succeeded.
  const forceRetranslate = process.env.FORCE_RETRANSLATE === "true";

  const languagesToTranslate = TARGET_LANGUAGES.filter((lang) => {
    const targetPath = targetPathFor(englishPath, lang);
    if (!forceRetranslate && fs.existsSync(targetPath)) {
      console.log(`Skipping ${targetPath} (already translated; set FORCE_RETRANSLATE=true to redo).`);
      return false;
    }
    return true;
  });

  if (languagesToTranslate.length === 0) {
    return;
  }

  // Try the whole file as one batch job first (cheaper and faster than one
  // sequential request per language). If the job itself fails outright
  // (submission error, timeout in a failure state, mismatched response
  // count), fall back to the old sequential path for every language in
  // this file so the run stays resilient instead of losing the whole file.
  let batchResults = null;
  try {
    batchResults = await translateFileWithBatchApi(ai, englishPath, languagesToTranslate, protectedText);
  } catch (error) {
    console.warn(
      `Batch translation failed for ${englishPath} (${error.message}). ` +
      `Falling back to sequential per-language requests for all ${languagesToTranslate.length} language(s).`
    );
  }

  for (const lang of languagesToTranslate) {
    const targetPath = targetPathFor(englishPath, lang);

    try {
      let translatedText;

      if (batchResults) {
        const result = batchResults.get(lang);

        if (result && result.ok) {
          translatedText = result.text;
        } else {
          // Either this language's batch entry failed, or (shouldn't
          // happen, but be defensive) it's missing from the results map.
          // Either way, retry just this one language sequentially instead
          // of giving up on it.
          const reason = result ? result.error.message : "missing from batch results";
          console.warn(`Batch result for "${lang}" unusable (${reason}); retrying ${targetPath} sequentially.`);
          translatedText = await translateWithRetry(ai, protectedText, lang);
        }
      } else {
        translatedText = await translateWithRetry(ai, protectedText, lang);
      }

      const restoredText = restoreCodeBlocks(translatedText, placeholders);

      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.writeFileSync(targetPath, restoredText, "utf8");
      console.log(`Translated ${englishPath} -> ${targetPath}`);
    } catch (error) {
      // A single language failing after all retries (rate limit, transient
      // API error, etc.) should not stop the rest of the languages/files
      // from being processed.
      console.error(`Failed to translate ${englishPath} into "${lang}" after ${MAX_ATTEMPTS} attempts: ${error.message}`);
    }
  }
}


async function main() {
  const changedFilesRaw = process.env.CHANGED_FILES || "";
  const changedFiles = changedFilesRaw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  // Normally we only process whatever CHANGED_FILES (the git-diff-scoped
  // list from the workflow) hands us. But that list only reflects recent
  // English edits -- it has no idea a target language was just added and
  // has never been translated at all. So: if any target language still
  // needs a full backfill (missing/empty rules/<lang>/ folder), or this is
  // a manual "all" mode dispatch, bypass the diff filter and fall back to
  // every rules/en/*.md file. translateFile's existing "skip if already
  // translated" check means this costs nothing for languages/files that
  // are already up to date -- it only actually translates what's missing.
  // A manual dispatch explicitly set to "changed-only" mode is NOT bypassed
  // here -- it behaves just like a push and only touches CHANGED_FILES.
  const languagesNeedingBackfill = TARGET_LANGUAGES.filter(languageNeedsFullBackfill);
  const manualAllModeRun = isManualAllModeRun();

  let filesToProcess = changedFiles;

  if (languagesNeedingBackfill.length > 0 || manualAllModeRun) {
    if (languagesNeedingBackfill.length > 0) {
      console.log(
        `Missing/empty rules/<lang>/ folder detected for: ${languagesNeedingBackfill.join(", ")}. ` +
        "Bypassing the git diff filter and processing every rules/en/*.md file so these languages get a full backfill."
      );
    }
    if (manualAllModeRun) {
      console.log("Running via workflow_dispatch in 'all' mode; bypassing the git diff filter and processing every rules/en/*.md file.");
    }

    const allEnglishFiles = getAllEnglishFiles();
    filesToProcess = Array.from(new Set([...changedFiles, ...allEnglishFiles]));
  }

  if (filesToProcess.length === 0) {
    console.log("No changed English markdown files were provided. Exiting.");
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not set.");
  }

  const ai = new GoogleGenAI({ apiKey });

  configureGitIdentity();

  const orderedFiles = sortByTranslationPriority(filesToProcess);

  for (const file of orderedFiles) {
    if (!file.startsWith("rules/en/") || !file.endsWith(".md")) {
      console.log(`Skipping ${file} (not an English rules markdown file).`);
      continue;
    }

    if (!fs.existsSync(file)) {
      console.log(`Skipping ${file} (file no longer exists on disk).`);
      continue;
    }

    console.log(`Translating ${file} into ${TARGET_LANGUAGES.length} languages...`);
    await translateFile(ai, file);

    // Commit + push immediately after this file's languages are done, so
    // progress is preserved incrementally instead of all-or-nothing.
    commitAndPushProgress(file);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
