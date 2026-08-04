# Preduslovi

1. Osnovno razumijevanje [markdown jezika](https://www.markdownguide.org/basic-syntax/).

2. Moraćete kreirati besplatan [github](https://github.com/) nalog ako ga već nemate. Preporučuje se da koristite naziv vašeg RPG-a jer će to postati dio URL-a koji će ljudi koristiti za pristup vašem SRD-u.

3. Čitav proces možete obaviti putem pregledača bez poznavanja git-a. Iako će vam učenje Github desktopa omogućiti da testirate sve izmjene lokalno prije nego što ih objavite da ih svijet vidi.

> Ako imate registrovan naziv domene, možete ga koristiti u ovom procesu za kreiranje SRD-a kao što sam ja učinio na https://srd.7thextinctionrpg.com

# Proces

## Kreiranje repozitorijuma na Github-u

1. Prijavite se na Github

2. Idite na javni šablon https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kliknite "Use this template"

![Step3](/_media/Step3.png)

4. Odaberite "Create a new repository"

5. Unesite naziv repozitorijuma

![Step5](/_media/Step5.png)

6. Odaberite 'Private'

7. Odaberite 'Create repository'

Biće potrebno 5-30 sekundi da se kopira šablon, nakon čega ćete imati svoju kopiju.

8. Provjerite da li imate datoteku ".nojekyll". Ovo je prazna datoteka koja je potrebna prilikom hostovanja web stranice na Github-u, u suprotnom se SRD neće pravilno prikazati. *(Govori GitHub Pages-u da ne pokreće objavljene datoteke kroz Jekyll).*


## Dodavanje vašeg sadržaja

### *.md datoteke

.md datoteke su markdown datoteke. Markdown je lagani jezik za označavanje koji možete koristiti za dodavanje elemenata formatiranja tekstualnim dokumentima. U zavisnosti od obima vašeg sadržaja, možete staviti sve informacije o igri u jednu *.md datoteku, ili kao što sam ja uradio na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), kreirati zasebne datoteke za svako poglavlje. "sample.md" pruža nekoliko primjera formatiranja.

Markdown jezik je veoma lak za učenje; koristite link naveden u tački 2 pod Preduslovi iznad za punu listu sintakse.

### _Sidebar.md

Ovo je vaš meni, navigacioni panel na lijevoj strani web stranice. Nakon što dodate markdown datoteku u svoj repozitorijum, potrebno je da ovdje dodate datoteku kako bi njen sadržaj bio uključen. Pratite postojeće formatiranje.


## Omogućavanje Github Pages za pretvaranje repozitorijuma u web stranicu

1. U svom repozitorijumu kliknite na 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Odaberite 'Pages' u meniju na lijevoj strani

![Website-Step2](/_media/Website-Step2.png)

3. Ako repozitorijum niste učinili 'javnim' (public), imate dvije opcije:
    a. Učinite repozitorijum javnim, što će vam tada omogućiti da koristite Github pages za besplatno hostovanje vaše SRD web stranice.
    b. Nadogradite svoj Github nalog (u trenutku pisanja ovog teksta košta 4$ mjesečno ili 48$ godišnja naknada).

4. Pod 'Branch' odaberite 'main' i kliknite save

5. Sačekajte 10-20 sekundi, a zatim osvježite stranicu

6. Sada ćete vidjeti svoj URL, kao što je https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Promjena fontova

1. Uredite datoteku /_assets/style.css

2. Pod 'body section' naći ćete siteFont i headingFont

3. Promijenite ih u fontove koje želite koristiti


## Korištenje Fontawesome i/ili Material Icons dodataka za prikaz besplatnih ikona u vašem SRD-u

### Fontawesome

Koristite Fontawesome za dobijanje besplatnih ikona i animiranih ikona. Pretplatnici mogu koristiti Pro ikone.

1. Pronađite ikonu na [Fontawesome](https://fontawesome.com/icons)
2. Odaberite ikonu
3. U iskačućem prozoru, pod HTML karticom kopirajte sve između " "

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
2. Kopirajte i umetnite web span link direktno u vaše markdown datoteke

```markup
<span class="material-icons">face</span>
```