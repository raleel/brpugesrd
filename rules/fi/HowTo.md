# Esivaatimukset

1. [Markdown-kielen](https://www.markdownguide.org/basic-syntax/) perusteiden hallinta.

2. Sinun on luotava ilmainen [github](https://github.com/)-tili, jos sinulla ei sellaista vielä ole. Suosittelen käyttämään roolipelisi nimeä, sillä se tulee olemaan osa URL-osoitetta, jota ihmiset käyttävät päästäkseen SRD-sivustollesi.

3. Voit tehdä koko prosessin selaimen kautta ilman git-osaamista. GitHub Desktopin opettelu mahdollistaa kuitenkin muutosten testaamisen paikallisesti ennen niiden julkaisemista koko maailman nähtäväksi.

> Jos sinulla on rekisteröity verkkotunnus, voit käyttää sitä tässä prosessissa luodaksesi SRD-sivuston kuten minä tein: https://srd.7thextinctionrpg.com

# Prosessi

## Repositorion luominen Githubiin

1. Kirjaudu sisään Githubiin.

2. Siirry julkiseen malliin (template): https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klikkaa "Use this template"

![Step3](/_media/Step3.png)

4. Valitse "Create a new repository"

5. Anna repositoriolle nimi

![Step5](/_media/Step5.png)

6. Valitse 'Private' (yksityinen)

7. Valitse 'Create repository'

Mallin kopioiminen kestää 5–30 sekuntia, minkä jälkeen sinulla on oma kopiosi.

8. Varmista, että sinulla on tiedosto ".nojekyll". Tämä on tyhjä tiedosto, jota tarvitaan verkkosivustoa Githubissa isännöitäessä, muuten SRD ei näy oikein. *(Kertoo GitHub Pagesille, ettei julkaistuja tiedostoja saa ajaa Jekyllin läpi).*

## Sisällön lisääminen

### *.md-tiedostot

.md-tiedostot ovat Markdown-tiedostoja. Markdown on kevyt merkintäkieli, jolla voit lisätä muotoiluelementtejä tekstiasiakirjoihin. Sisällön määrästä riippuen voit joko sijoittaa pelisi tiedot yhteen *.md-tiedostoon tai, kuten minä tein osoitteessa [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), luoda erilliset tiedostot jokaiselle luvulle. "sample.md" tarjoaa muutamia esimerkkejä muotoilusta.

Markdown-kieli on erittäin helppo oppia; käytä Esivaatimusten kohdassa 2 annettua linkkiä saadaksesi täydellisen listan syntaksista.

### _Sidebar.md

Tämä on verkkosivustosi vasemmassa reunassa oleva valikko ja navigointipaneeli. Kun olet lisännyt Markdown-tiedoston repositorioosi, sinun on lisättävä tiedosto tänne, jotta sen sisältö sisällytetään valikkoon. Noudata olemassa olevaa muotoilua.

## Github Pagesin käyttöönotto verkkosivuston luomiseksi

1. Klikkaa repositoriossasi 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Valitse vasemmasta sivupalkista 'Pages'

![Website-Step2](/_media/Website-Step2.png)

3. Jos et ole tehnyt repositoriosta 'public' (julkinen), sinulla on kaksi vaihtoehtoa:
    a. Tee repositoriosta julkinen, jolloin voit käyttää Github Pagesia SRD-verkkosivustosi ilmaiseen isännöintiin.
    b. Päivitä Github-tilisi (tätä kirjoitettaessa se maksaa 4 dollaria kuukaudessa tai 48 dollaria vuodessa).

4. Valitse 'Branch'-kohdasta 'main' ja klikkaa 'Save'.

5. Odota 10–20 sekuntia ja päivitä sivu.

6. Näet nyt URL-osoitteesi, esimerkiksi https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Fonttien vaihtaminen

1. Muokkaa tiedostoa /_assets/style.css 

2. 'body'-osiosta löydät kohdat siteFont & headingFont

3. Vaihda nämä niihin fontteihin, joita haluat käyttää.

## Fontawesome- ja/tai Material Icons -liitännäisten käyttäminen ilmaisten ikonien näyttämiseen SRD-sivustollasi

### Fontawesome

Käytä Fontawesomea saadaksesi ilmaisia ikoneita ja animoituja ikoneita. Tilatut käyttäjät voivat käyttää Pro-ikoneita.

1. Etsi ikoni [Fontawesomesta](https://fontawesome.com/icons)
2. Valitse ikoni
3. Kopioi ponnahdusikkunassa HTML-välilehden alta kaikki lainausmerkkien " " välistä.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Aseta kopioitu teksti `:` väliin ilman välilyöntejä.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Käytä Material Iconseja saadaksesi lisää ilmaisia ikoneita.

1. Etsi ikonit osoitteesta [Material Icons](https://fonts.google.com/icons)
2. Kopioi ja lisää web-span-linkki suoraan Markdown-tiedostoihisi.

```markup
<span class="material-icons">face</span>
```