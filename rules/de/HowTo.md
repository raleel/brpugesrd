# Voraussetzungen

1. Ein grundlegendes Verständnis der [Markdown-Sprache](https://www.markdownguide.org/basic-syntax/).

2. Du musst ein kostenloses [Github](https://github.com/)-Konto erstellen, falls du noch keines hast. Es wird empfohlen, den Namen deines Rollenspiels zu verwenden, da dieser Teil der URL wird, unter der die Leute auf dein SRD zugreifen.

3. Du kannst diesen gesamten Prozess über den Browser abwickeln, ohne Git beherrschen zu müssen. Das Erlernen von Github Desktop ermöglicht es dir jedoch, Änderungen lokal zu testen, bevor du sie für die Welt sichtbar veröffentlichst.

> Wenn du einen registrierten Domainnamen hast, kannst du diesen mit diesem Prozess verwenden, um ein SRD zu erstellen, so wie ich es getan habe: https://srd.7thextinctionrpg.com

# Der Prozess

## Erstellen des Repositories auf Github

1. Melde dich bei Github an

2. Navigiere zur öffentlichen Vorlage https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klicke auf „Use this template“ (Diese Vorlage verwenden)

![Step3](/_media/Step3.png)

4. Wähle „Create a new repository“ (Neues Repository erstellen)

5. Gib einen Namen für das Repository ein

![Step5](/_media/Step5.png)

6. Wähle „Private“ (Privat)

7. Wähle „Create repository“ (Repository erstellen)

Es dauert 5–30 Sekunden, bis die Vorlage kopiert wurde, danach hast du deine eigene Kopie.

8. Stelle sicher, dass die Datei „.nojekyll“ vorhanden ist. Dies ist eine leere Datei, die beim Hosten einer Website auf Github benötigt wird; andernfalls wird das SRD nicht korrekt angezeigt. *(Weist GitHub Pages an, die veröffentlichten Dateien nicht durch Jekyll zu verarbeiten).*


## Hinzufügen deiner Inhalte

### *.md-Dateien

.md-Dateien sind Markdown-Dateien. Markdown ist eine einfache Auszeichnungssprache, die du verwenden kannst, um Formatierungselemente zu Klartextdokumenten hinzuzufügen. Abhängig vom Umfang deines Inhalts kannst du entweder alle Informationen deines Spiels in einer einzigen *.md-Datei platzieren oder – so wie ich es unter [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) gemacht habe – separate Dateien für jedes Kapitel erstellen. Die „sample.md“ bietet einige Formatierungsbeispiele.

Die Markdown-Sprache ist sehr leicht zu erlernen. Nutze den Link, der in Punkt 2 unter „Voraussetzungen“ oben angegeben ist, für eine vollständige Liste der Syntax.

### _Sidebar.md

Dies ist dein Menü, der Navigationsbereich auf der linken Seite der Website. Sobald du eine Markdown-Datei zu deinem Repository hinzugefügt hast, musst du die Datei hier eintragen, damit ihr Inhalt aufgenommen wird. Folge der bestehenden Formatierung.


## Github Pages aktivieren, um das Repository in eine Website zu verwandeln

1. Klicke in deinem Repository auf „Settings“ (Einstellungen)

![Website-Step1](/_media/Website-Step1.png)

2. Wähle „Pages“ im Menü auf der linken Seite

![Website-Step2](/_media/Website-Step2.png)

3. Falls du das Repository nicht „public“ (öffentlich) gemacht hast, hast du zwei Möglichkeiten:
    a. Mache das Repository öffentlich, was dir dann erlaubt, Github Pages zu nutzen, um deine SRD-Website kostenlos zu hosten.
    b. Führe ein Upgrade deines Github-Kontos durch (zum Zeitpunkt des Schreibens dieses Textes kostet das 4 $ pro Monat oder eine jährliche Gebühr von 48 $).

4. Wähle unter „Branch“ den Eintrag „main“ aus und klicke auf „Save“ (Speichern).

5. Warte 10–20 Sekunden und aktualisiere die Seite dann.

6. Du siehst nun deine URL, z. B. https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Schriftarten ändern

1. Bearbeite die Datei /_assets/style.css

2. Im „body“-Abschnitt findest du `siteFont` & `headingFont`

3. Ändere diese in die Schriftarten, die du verwenden möchtest.


## Nutzung von Fontawesome und/oder Material Icons Plugin, um kostenlose Icons in deinem SRD anzuzeigen

### Fontawesome

Verwende Fontawesome, um kostenlose Icons und animierte Icons zu erhalten. Abonnierte Benutzer können Pro Icons verwenden.

1. Finde das Icon auf [Fontawesome](https://fontawesome.com/icons)
2. Wähle das Icon aus
3. Kopiere im Popup-Fenster unter dem HTML-Tab alles, was zwischen den Anführungszeichen " " steht.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Platziere den kopierten Text zwischen `:` ohne Leerzeichen.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Verwende Material Icons für weitere kostenlose Icons.

1. Finde die Icons auf [Material Icons](https://fonts.google.com/icons)
2. Kopiere den Web-Span-Link und füge ihn direkt in deine Markdown-Dateien ein.

```markup
<span class="material-icons">face</span>
```