# Translation glossaries

Drop an optional `<lang>.json` file in this directory to steer Gemini's
translations for that target language and clean up its already-translated
output. `<lang>` must match one of the language codes in `TARGET_LANGUAGES`
in `translate.mjs` (e.g. `es.json`, `fr.json`, `zh-CN.json`).

A language with no glossary file here behaves exactly as before this
feature existed -- nothing is required.

## Schema

```json
{
  "terms": {
    "Hit Points": "Puntos de Golpe"
  },
  "forbidden_translations": {
    "Puntos de Vida": "Puntos de Golpe"
  }
}
```

Both blocks are optional.

- `terms`: maps a source English term to its mandatory target-language
  translation. This is:
  1. Injected into the Gemini prompt as a strict "must use this exact
     translation" instruction for every file translated into that
     language.
  2. Applied as a defensive post-processing pass on the model's output, in
     case an occurrence of the source term slipped through untranslated.
- `forbidden_translations`: maps a known-bad translation (that the model
  has produced before) to the correct replacement. This block is **only**
  applied during post-processing (there's nothing sensible to "prompt
  against" for a translation that hasn't been generated yet) -- it exists
  to retroactively fix already-translated files.

## Using it

- **New/backfilled translations**: as soon as a glossary file exists for a
  language, every *newly* translated file for that language automatically
  gets the glossary prompt instruction and the post-processing pass. This
  does **not** retroactively touch already-translated files (the normal
  skip-if-exists logic is unchanged), so adding a glossary never triggers
  a mass retranslation.
- **Fixing already-translated files**: run the script in standalone
  post-processing mode, which never calls the Gemini API:

  ```
  node .github/scripts/translate.mjs --post-process-only --lang=es
  ```

  Omit `--lang` (or pass `--lang=all`) to sweep every language that has a
  glossary file. `--apply-glossary` is accepted as an alias for
  `--post-process-only`.
