# Forudsætninger

1. En grundlæggende forståelse af [markdown-sproget](https://www.markdownguide.org/basic-syntax/).

2. Du skal oprette en gratis [github](https://github.com/)-konto, hvis du ikke allerede har en. Jeg anbefaler, at du bruger navnet på dit RPG, da dette bliver en del af den URL, folk skal bruge for at få adgang til din SRD.

3. Du kan gennemføre hele processen via browseren uden at kende til git. Selvom det at lære github desktop vil give dig mulighed for at teste ændringer lokalt, før du gør dem offentligt tilgængelige.

> Hvis du har et registreret domænenavn, kan du bruge dette i denne proces til at oprette en SRD ligesom jeg har gjort https://srd.7thextinctionrpg.com

# Processen

## Oprettelse af et repository på Github

1. Log ind på Github

2. Naviger til den offentlige skabelon https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klik på "Use this template"

![Step3](/_media/Step3.png)

4. Vælg "Create a new repository"

5. Indtast et navn til dit repository

![Step5](/_media/Step5.png)

6. Vælg 'Private'

7. Vælg 'Create repository'

Det tager 5-30 sekunder at kopiere skabelonen, hvorefter du har din egen kopi.

8. Sørg for, at du har filen ".nojekyll". Dette er en tom fil, der er nødvendig, når man hoster en hjemmeside på Github; ellers vil din SRD ikke blive vist korrekt. *(Fortæller GitHub Pages, at de publicerede filer ikke skal køres gennem Jekyll).*


## Tilføjelse af dit indhold

### *.md-filer

.md-filer er markdown-filer. Markdown er et letvægts-opmærkningssprog, som du kan bruge til at tilføje formateringselementer til almindelig tekst. Afhængigt af mængden af indhold kan du enten placere al din spilinformation i en enkelt *.md-fil, eller – som jeg har gjort på [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) – oprette separate filer til hvert kapitel. "sample.md" indeholder nogle eksempler på formatering.

Markdown-sproget er meget let at lære; brug linket i punkt 2 under Forudsætninger ovenfor for en fuldstændig liste over syntaks.

### _Sidebar.md

Dette er din menu, navigationspanelet på venstre side af hjemmesiden. Når du har tilføjet en markdown-fil til dit repository, skal du tilføje filen her, så dens indhold bliver inkluderet. Følg den eksisterende formatering.


## Aktiver Github Pages for at gøre dit Repository til en hjemmeside

1. Klik på 'Settings' i dit repository

![Website-Step1](/_media/Website-Step1.png)

2. Vælg 'Pages' i menuen til venstre

![Website-Step2](/_media/Website-Step2.png)

3. Hvis du ikke har gjort dit repository 'public', har du to valgmuligheder:
    a. Gør dit repository offentligt (public), hvilket tillader dig at bruge Github Pages til at hoste din SRD-hjemmeside gratis.
    b. Opgrader din Github-konto (da denne vejledning blev skrevet, kostede det $4 om måneden eller $48 årligt).

4. Under 'Branch' skal du vælge 'main' og klikke på gem.

5. Vent 10-20 sekunder og opdater siden.

6. Du vil nu se din URL, såsom https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Ændring af skrifttyper

1. Rediger filen /_assets/style.css 

2. Under 'body-sektionen' finder du siteFont & headingFont

3. Skift disse til de skrifttyper, du ønsker at bruge.


## Brug af Fontawesome og/eller Material Icons-plugins til at vise gratis ikoner i din SRD

### Fontawesome

Brug Fontawesome til at få gratis ikoner og animerede ikoner. Abonnenter kan bruge Pro-ikoner.

1. Find ikonet på [Fontawesome](https://fontawesome.com/icons)
2. Vælg ikonet
3. I pop op-vinduet under HTML-fanen skal du kopiere alt mellem " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Placer den kopierede tekst mellem `:` uden mellemrum

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Brug Material Icons for flere gratis ikoner.

1. Find ikonerne på [Material Icons](https://fonts.google.com/icons)
2. Kopier og indsæt web span-linket direkte ind i dine markdown-filer

```markup
<span class="material-icons">face</span>
```