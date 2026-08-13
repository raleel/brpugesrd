# Előfeltételek

1. A [markdown nyelv](https://www.markdownguide.org/basic-syntax/) alapvető ismerete.

2. Létre kell hoznod egy ingyenes [github](https://github.com/) fiókot, ha még nincs. Javasolt az RPG-d nevét használni, mivel ez része lesz annak az URL-nek, amelyet a felhasználók az SRD-d eléréséhez használni fognak.

3. Ezt az egész folyamatot elvégezheted a böngészőn keresztül, git-ismeretek nélkül. Bár a Github Desktop elsajátítása lehetővé teszi, hogy helyileg teszteld a változtatásokat, mielőtt élesben közzétennéd őket a világ számára.

> Ha van regisztrált domain neved, akkor ezzel a folyamattal létrehozhatsz egy olyan SRD-t, mint amilyen az enyém: https://srd.7thextinctionrpg.com

# A folyamat

## A tárhely (repository) létrehozása a Githubon

1. Jelentkezz be a Githubra.

2. Navigálj a nyilvános sablonhoz: https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kattints a "Use this template" (Sablon használata) gombra.

![Step3](/_media/Step3.png)

4. Válaszd a "Create a new repository" (Új tárhely létrehozása) lehetőséget.

5. Adj meg egy tárhelynevet.

![Step5](/_media/Step5.png)

6. Válaszd a 'Private' (Privát) opciót.

7. Válaszd a 'Create repository' (Tárhely létrehozása) lehetőséget.

5-30 másodpercet vesz igénybe a sablon másolása, utána meglesz a saját példányod.

8. Győződj meg róla, hogy megvan a ".nojekyll" fájl; ez egy üres fájl, amelyre szükség van, amikor weboldalt hosztozol a Githubon, különben az SRD nem fog megfelelően megjelenni. *(Azt mondja a GitHub Pagesnek, hogy a közzétett fájlokat ne futtassa a Jekyll-en keresztül).*


## Tartalom hozzáadása

### *.md fájlok

A .md fájlok markdown fájlok. A Markdown egy könnyűszerkezetes jelölőnyelv, amelyet a szöveges dokumentumok formázására használhatsz. A tartalom méretétől függően elhelyezheted a játékod összes információját egyetlen *.md fájlban, vagy – ahogy én tettem a [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) oldalon – minden fejezethez külön fájlt hozhatsz létre. A "sample.md" néhány formázási példát tartalmaz.

A Markdown nyelv nagyon könnyen megtanulható, használd az Előfeltételek 2. pontjában megadott linket a szintaxis teljes listájához.

### _Sidebar.md

Ez a menüd, a weboldal bal oldalán található navigációs panel. Miután hozzáadtál egy markdown fájlt a tárhelyedhez, itt is hozzá kell adnod a fájlt, hogy a tartalma megjelenjen. Kövesd a meglévő formázást.


## Github Pages engedélyezése a tárhely weboldallá alakításához

1. A tárhelyeden kattints a 'Settings' (Beállítások) menüpontra.

![Website-Step1](/_media/Website-Step1.png)

2. Válaszd a 'Pages' opciót a bal oldali menüben.

![Website-Step2](/_media/Website-Step2.png)

3. Ha még nem állítottad a tárhelyet 'public' (nyilvános) állapotra, két választásod van:
    a. Tedd nyilvánossá a tárhelyet, ami lehetővé teszi a Github Pages használatát az SRD weboldalad ingyenes hosztolására.
    b. Frissítsd a Github fiókodat (ennek megírásakor ez havi 4 dollárba vagy évi 48 dollárba kerül).

4. A 'Branch' (Ág) alatt válaszd a 'main' (fő) lehetőséget, és kattints a mentésre.

5. Várj 10-20 másodpercet, majd frissítsd az oldalt.

6. Ekkor látni fogod az URL-edet, például: https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Betűtípusok módosítása

1. Szerkeszd a /_assets/style.css fájlt.

2. A 'body section' (törzs rész) alatt megtalálod a siteFont & headingFont beállításokat.

3. Módosítsd ezeket a kívánt betűtípusokra.


## Fontawesome és/vagy Material Icons plugin használata ingyenes ikonok megjelenítéséhez az SRD-dben

### Fontawesome

Használd a Fontawesome-ot ingyenes és animált ikonok beszerzéséhez. Az előfizetők Pro ikonokat használhatnak.

1. Keresd meg az ikont a [Fontawesome](https://fontawesome.com/icons) oldalon.
2. Válaszd ki az ikont.
3. A felugró ablakban, a HTML fül alatt másold ki mindent a " " között.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Illeszd be a kimásolt szöveget a `:` közé szóközök nélkül.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Használd a Material Icons-t további ingyenes ikonokért.

1. Keresd meg az ikonokat a [Material Icons](https://fonts.google.com/icons) oldalon.
2. Másold ki és illeszd be a webes span linket közvetlenül a markdown fájljaidba.

```markup
<span class="material-icons">face</span>
```