# Voraussetzungen

1. Ein grundlegendes Verständnis der [Markdown-Sprache](https://www.markdownguide.org/basic-syntax/).

2. Du musst ein kostenloses [github](https://github.com/)-Konto erstellen, falls du noch keines hast. Es wird empfohlen, den Namen deines RPGs zu verwenden, da dieser Teil der URL wird, über die Nutzer auf dein SRD zugreifen werden.

3. Du kannst diesen gesamten Prozess über den Browser durchführen, ohne Git zu beherrschen. Das Erlernen von GitHub Desktop ermöglicht es dir jedoch, Änderungen lokal zu testen, bevor du sie live für die Welt sichtbar machst.

> Wenn du einen registrierten Domainnamen hast, kannst du diesen in diesem Prozess verwenden, um ein SRD wie meines zu erstellen: https://srd.7thextinctionrpg.com

# Der Prozess

## Erstellen des Repositories auf Github

1. Melde dich bei Github an.

2. Navigiere zur öffentlichen Vorlage https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klicke auf „Use this template“

![Step3](/_media/Step3.png)

4. Wähle „Create a new repository“ aus.

5. Gib einen Repository-Namen ein.

![Step5](/_media/Step5.png)

6. Wähle „Private“ aus.

7. Wähle „Create repository“ aus.

Es dauert 5-30 Sekunden, um die Vorlage zu kopieren, danach hast du deine eigene Kopie.

8. Stelle sicher, dass du die Datei „.nojekyll“ hast. Dies ist eine leere Datei, die beim Hosten einer Website auf Github benötigt wird, da das SRD sonst nicht korrekt angezeigt wird. *(Teilt GitHub Pages mit, die veröffentlichten Dateien nicht durch Jekyll laufen zu lassen).*


## Hinzufügen deiner Inhalte

### *.md Dateien

.md-Dateien sind Markdown-Dateien. Markdown ist eine leichtgewichtige Auszeichnungssprache, die du verwenden kannst, um Formatierungselemente zu Klartextdokumenten hinzuzufügen. Abhängig vom Umfang deiner Inhalte kannst du entweder alle Spielinformationen in einer einzigen *.md-Datei ablegen oder, wie ich es bei [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) getan habe, separate Dateien für jedes Kapitel erstellen. Die „sample.md“ enthält einige Formatierungsbeispiele.

Die Markdown-Sprache ist sehr einfach zu erlernen; nutze den Link in Punkt 2 unter den Voraussetzungen oben für eine vollständige Liste der Syntax.

### _Sidebar.md

Dies ist dein Menü, der Navigationsbereich auf der linken Seite der Website. Sobald du eine Markdown-Datei zu deinem Repository hinzugefügt hast, musst du die Datei hier eintragen, damit ihre Inhalte eingebunden werden. Befolge dabei die bestehende Formatierung.


## Aktivieren von Github Pages, um das Repository in eine Website zu verwandeln

1. Klicke in deinem Repository auf „Settings“

![Website-Step1](/_media/Website-Step1.png)

2. Wähle „Pages“ im Menü auf der linken Seite aus.

![Website-Step2](/_media/Website-Step2.png)

3. Wenn du das Repository nicht auf „public“ gesetzt hast, hast du zwei Möglichkeiten:
    a. Mache das Repository öffentlich, was dir dann erlaubt, Github Pages zu nutzen, um deine SRD-Website kostenlos zu hosten.
    b. Führe ein Upgrade deines Github-Kontos durch (zum Zeitpunkt des Schreibens kostet dies 4 $ pro Monat oder eine Jahresgebühr von 48 $).

4. Wähle unter „Branch“ die Option „main“ aus und klicke auf Speichern.

5. Warte 10-20 Sekunden und aktualisiere dann die Seite.

6. Du siehst nun deine URL, wie z. B. https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Schriftarten ändern

1. Bearbeite die Datei /_assets/Stil.css 

2. Unter dem Abschnitt „body“ findest du siteFont & headingFont

3. Ändere diese in die Schriftarten, die du verwenden möchtest.


## Verwenden von Fontawesome und/oder Material Icons Plugins, um kostenlose Icons in deinem SRD anzuzeigen

### Fontawesome

Verwende Fontawesome für kostenlose Icons und animierte Icons. Abonnenten können Pro-Icons verwenden.

1. Finde das Icon auf [Fontawesome](https://fontawesome.com/icons)
2. Wähle das Icon aus.
3. Kopiere im Popup-Fenster unter dem HTML-Tab alles zwischen den „ “

```EXAMPLE
<i Klasse="fa-solid fa-dice-d20"></i>
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
<span Klasse="material-icons">face</span>
```