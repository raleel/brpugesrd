# Preduslovi

1. Osnovno poznavanje [markdown jezika](https://www.markdownguide.org/basic-syntax/).

2. Moraćete da kreirate besplatan [github](https://github.com/) nalog ako ga već nemate. Preporučuje se da koristite naziv vašeg RPG-a, jer će to postati deo URL-a koji će ljudi koristiti za pristup vašem SRD-u.

3. Ceo ovaj proces možete obaviti putem pregledača bez poznavanja git-a. Iako će vam učenje Github Desktop-a omogućiti da lokalno testirate sve izmene pre nego što ih objavite da ih svet vidi.

> Ako imate registrovan naziv domena, možete ga koristiti u ovom procesu za kreiranje SRD-a kao što sam ja uradio https://srd.7thextinctionrpg.com

# Proces

## Kreiranje repozitorijuma na Github-u

1. Prijavite se na Github

2. Idite na javni šablon https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kliknite na "Use this template"

![Step3](/_media/Step3.png)

4. Izaberite "Create a new repository"

5. Unesite naziv repozitorijuma

![Step5](/_media/Step5.png)

6. Izaberite 'Private'

7. Izaberite 'Create repository'

Biće potrebno 5-30 sekundi da se kopira šablon, nakon čega ćete imati svoju kopiju.

8. Uverite se da imate fajl ".nojekyll". Ovo je prazan fajl koji je potreban prilikom hostovanja veb lokacije na Github-u, u suprotnom se SRD neće pravilno prikazati. *(Govori GitHub Pages-u da objavljene fajlove ne obrađuje kroz Jekyll).*


## Dodavanje sadržaja

### *.md fajlovi

.md fajlovi su markdown fajlovi. Markdown je lagani jezik za označavanje koji možete koristiti za dodavanje elemenata formatiranja u obične tekstualne dokumente. U zavisnosti od obima vašeg sadržaja, možete staviti sve informacije o igri u jedan *.md fajl ili, kao što sam ja uradio na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), kreirati zasebne fajlove za svako poglavlje. "sample.md" pruža neke primere formatiranja.

Markdown jezik je veoma lak za učenje; koristite vezu navedenu u tački 2 pod "Preduslovi" iznad za potpunu listu sintakse.

### _Sidebar.md

Ovo je vaš meni, navigaciona tabla na levoj strani veb lokacije. Kada dodate markdown fajl u svoj repozitorijum, morate ga dodati ovde kako bi njegov sadržaj bio uključen. Pratite postojeće formatiranje.


## Omogućavanje Github Pages-a za pretvaranje repozitorijuma u veb lokaciju

1. U svom repozitorijumu kliknite na 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Izaberite 'Pages' u meniju sa leve strane

![Website-Step2](/_media/Website-Step2.png)

3. Ako repozitorijum niste učinili 'public', imate dva izbora:
    a. Učinite repozitorijum javnim, što će vam omogućiti da koristite Github Pages za besplatno hostovanje vašeg SRD veb sajta
    b. Nadogradite svoj Github nalog (u trenutku pisanja ovog teksta, to košta 4 dolara mesečno ili 48 dolara godišnje)

4. Pod 'Branch' izaberite 'main' i kliknite na 'save'

5. Sačekajte 10-20 sekundi, a zatim osvežite stranicu

6. Sada ćete videti svoj URL, kao što je https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Promena fontova

1. Uredite fajl /_assets/style.css

2. U sekciji 'body' pronaći ćete siteFont i headingFont

3. Promenite ih u fontove koje želite da koristite


## Korišćenje Fontawesome i/ili Material Icons dodataka za prikaz besplatnih ikona u vašem SRD-u

### Fontawesome

Koristite Fontawesome za besplatne ikone i animirane ikone. Pretplatnici mogu koristiti Pro ikone.

1. Pronađite ikonu na [Fontawesome](https://fontawesome.com/icons)
2. Izaberite ikonu
3. U iskačućem prozoru, ispod HTML kartice kopirajte sve između " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Postavite kopirani tekst između `:` bez razmaka

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Koristite Material Icons za još besplatnih ikona

1. Pronađite ikone na [Material Icons](https://fonts.google.com/icons)
2. Kopirajte i umetnite web span link direktno u vaše markdown fajlove

```markup
<span class="material-icons">face</span>
```