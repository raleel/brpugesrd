# Preduvjeti

1. Osnovno razumijevanje [markdown jezika](https://www.markdownguide.org/basic-syntax/).

2. Morat ćete stvoriti besplatan [github](https://github.com/) račun ako ga već nemate. Preporučuje se korištenje imena vašeg RPG-a jer će to postati dio URL-a koji će ljudi koristiti za pristup vašem SRD-u.

3. Cijeli ovaj proces možete obaviti putem preglednika bez poznavanja git-a. Iako će vam učenje Github desktopa omogućiti lokalno testiranje svih promjena prije nego što ih objavite da ih svijet vidi.

> Ako imate registrirano ime domene, možete ga koristiti u ovom procesu za stvaranje SRD-a kao što sam ja učinio na https://srd.7thextinctionrpg.com

# Proces

## Stvaranje repozitorija na Githubu

1. Prijavite se na Github

2. Idite na javni predložak https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kliknite "Use this template" (Koristi ovaj predložak)

![Step3](/_media/Step3.png)

4. Odaberite "Create a new repository" (Stvori novi repozitorij)

5. Unesite naziv repozitorija

![Step5](/_media/Step5.png)

6. Odaberite 'Private' (Privatno)

7. Odaberite 'Create repository' (Stvori repozitorij)

Trebat će 5-30 sekundi da se kopira predložak, nakon čega ćete imati svoju kopiju.

8. Osigurajte da imate datoteku ".nojekyll", to je prazna datoteka koja je potrebna prilikom hostanja web stranice na Githubu, inače se SRD neće ispravno prikazati. *(Govori GitHub Pages stranicama da ne obrađuju objavljene datoteke kroz Jekyll).*


## Dodavanje vašeg sadržaja

### *.md datoteke

.md datoteke su markdown datoteke; Markdown je lagani označni jezik koji možete koristiti za dodavanje elemenata oblikovanja u tekstualne dokumente. Ovisno o veličini vašeg sadržaja, možete staviti sve informacije o svojoj igri u jednu *.md datoteku ili, kao što sam ja učinio na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), stvoriti zasebne datoteke za svako poglavlje. "sample.md" pruža neke primjere oblikovanja.

Markdown jezik je vrlo jednostavan za naučiti, koristite poveznicu navedenu u točki 2 pod Preduvjetima iznad za potpuni popis sintakse.

### _Sidebar.md

Ovo je vaš izbornik, navigacijska ploča na lijevoj strani web stranice. Nakon što ste dodali markdown datoteku u svoj repozitorij, morate je ovdje dodati kako bi njezin sadržaj bio uključen. Pratite postojeće oblikovanje.


## Omogućite Github Pages da pretvorite repozitorij u web stranicu

1. U svom repozitoriju kliknite na 'Settings' (Postavke)

![Website-Step1](/_media/Website-Step1.png)

2. Odaberite 'Pages' na izborniku s lijeve strane

![Website-Step2](/_media/Website-Step2.png)

3. Ako niste učinili repozitorij 'public' (javnim), imate dva izbora:
    a. Učinite repozitorij javnim, što će vam omogućiti besplatno korištenje Github stranica za hostanje vaše SRD web stranice.
    b. Nadogradite svoj Github račun (u vrijeme pisanja ovog teksta košta 4 dolara mjesečno ili 48 dolara godišnje).

4. Pod 'Branch' odaberite 'main' i kliknite spremi

5. Pričekajte 10-20 sekundi, a zatim osvježite stranicu

6. Sada ćete vidjeti svoj URL, kao što je npr. https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Promjena fontova

1. Uredite datoteku /_assets/style.css

2. Pod sekcijom 'body' pronaći ćete siteFont i headingFont

3. Promijenite ih u fontove koje želite koristiti


## Korištenje Fontawesome i/ili Material Icons dodatka za prikaz besplatnih ikona u vašem SRD-u

### Fontawesome

Koristite Fontawesome za dobivanje besplatnih ikona i animiranih ikona. Pretplatnici mogu koristiti Pro ikone.

1. Pronađite ikonu na [Fontawesome](https://fontawesome.com/icons)
2. Odaberite ikonu
3. U skočnom prozoru, pod HTML karticom kopirajte sve između " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Postavite kopirani tekst između `:` bez razmaka

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Koristite Material Icons za više besplatnih ikona.

1. Pronađite ikone na [Material Icons](https://fonts.google.com/icons)
2. Kopirajte i umetnite web span poveznicu izravno u svoje markdown datoteke

```markup
<span class="material-icons">face</span>
```