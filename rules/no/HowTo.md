# Forutsetninger

1. En grunnleggende forståelse av [markdown-språket](https://www.markdownguide.org/basic-syntax/).

2. Du må opprette en gratis [github](https://github.com/)-konto hvis du ikke har en fra før. Det anbefales at du bruker navnet på rollespillet ditt, da dette vil bli en del av nettadressen folk bruker for å få tilgang til din SRD.

3. Du kan gjøre hele denne prosessen via nettleseren uten å kunne git. Selv om det å lære seg GitHub Desktop vil tillate deg å teste eventuelle endringer lokalt før du publiserer dem slik at hele verden kan se dem.

> Hvis du har et registrert domenenavn, kan du bruke dette i denne prosessen for å lage en SRD slik jeg har gjort: https://srd.7thextinctionrpg.com

# Prosessen

## Opprette depotet (repository) på Github

1. Logg inn på Github

2. Naviger til den offentlige malen https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klikk på "Use this template"

![Step3](/_media/Step3.png)

4. Velg "Create a new repository"

5. Skriv inn et navn på depotet

![Step5](/_media/Step5.png)

6. Velg 'Private'

7. Velg 'Create repository'

Det tar 5–30 sekunder å kopiere malen, så har du din egen kopi.

8. Sørg for at du har filen ".nojekyll". Dette er en tom fil som trengs når du hoster et nettsted på Github, ellers vil ikke SRD-en vises riktig. *(Forteller GitHub Pages at de publiserte filene ikke skal kjøres gjennom Jekyll).*


## Legge til innhold

### *.md-filer

.md-filer er markdown-filer. Markdown er et lettvekts markeringsspråk som du kan bruke til å legge til formateringselementer i ren tekst. Avhengig av størrelsen på innholdet ditt kan du enten plassere all spillinformasjonen i en enkelt *.md-fil, eller slik jeg har gjort på [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), opprette separate filer for hvert kapittel. "sample.md" gir noen eksempler på formatering.

Markdown-språket er veldig lett å lære; bruk lenken som er oppgitt i punkt 2 under Forutsetninger ovenfor for en fullstendig liste over syntaks.

### _Sidebar.md

Dette er menyen din, navigasjonspanelet på venstre side av nettstedet. Når du har lagt til en markdown-fil i depotet ditt, må du legge til filen her slik at innholdet blir inkludert. Følg den eksisterende formateringen.


## Aktiver Github Pages for å gjøre depotet om til et nettsted

1. Klikk på 'Settings' i depotet ditt

![Website-Step1](/_media/Website-Step1.png)

2. Velg 'Pages' i menyen på venstre side

![Website-Step2](/_media/Website-Step2.png)

3. Hvis du ikke har gjort depotet 'public', har du to valg:
    a. Gjør depotet offentlig (public), noe som vil tillate deg å bruke Github Pages til å hoste din SRD-nettside gratis.
    b. Oppgrader Github-kontoen din (da dette skrives koster det $4 i måneden eller $48 i årlig avgift).

4. Under 'Branch', velg 'main' og klikk lagre.

5. Vent 10–20 sekunder og oppdater siden.

6. Du vil nå se nettadressen din, for eksempel https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Endre fonter

1. Rediger filen /_assets/style.css

2. Under 'body section' finner du siteFont og headingFont

3. Endre disse til fontene du ønsker å bruke


## Bruke Fontawesome og/eller Material Icons-plugin for å vise gratis ikoner i SRD-en din

### Fontawesome

Bruk Fontawesome for å få gratis ikoner og animerte ikoner. Abonnerende brukere kan bruke Pro-ikoner.

1. Finn ikonet på [Fontawesome](https://fontawesome.com/icons)
2. Velg ikonet
3. I popup-vinduet, under HTML-fanen, kopier alt mellom " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Plasser den kopierte teksten mellom `:` uten mellomrom

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Bruk Material Icons for flere gratis ikoner

1. Finn ikonene på [Material Icons](https://fonts.google.com/icons)
2. Kopier og lim inn web-span-lenken direkte inn i markdown-filene dine

```markup
<span class="material-icons">face</span>
```