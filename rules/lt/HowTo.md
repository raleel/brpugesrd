# Būtinosios sąlygos

1. Pagrindinis [markdown kalbos](https://www.markdownguide.org/basic-syntax/) supratimas.

2. Turėsite susikurti nemokamą [github](https://github.com/) paskyrą, jei jos dar neturite. Rekomenduojame naudoti savo RPG pavadinimą, nes jis taps URL dalimi, kurią žmonės naudos pasiekti jūsų SRD.

3. Visą šį procesą galite atlikti naršyklėje, nemokėdami naudotis „git“. Visgi išmokę naudotis „github desktop“, galėsite išbandyti bet kokius pakeitimus vietoje, prieš paskelbdami juos viešai.

> Jei esate užregistravę domeną, galite jį naudoti šiame procese, kad sukurtumėte SRD, kaip tai padariau aš https://srd.7thextinctionrpg.com

# Procesas

## Saugyklos (Repository) kūrimas „Github“ sistemoje

1. Prisijunkite prie „Github“.

2. Eikite į viešą šabloną https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Spustelėkite „Use this template“.

![Step3](/_media/Step3.png)

4. Pasirinkite „Create a new repository“.

5. Įveskite saugyklos pavadinimą.

![Step5](/_media/Step5.png)

6. Pasirinkite „Private“.

7. Pasirinkite „Create repository“.

Užtruks 5–30 sekundžių, kol šablonas bus nukopijuotas, tada turėsite savo kopiją.

8. Įsitikinkite, kad turite failą „.nojekyll“ – tai tuščias failas, reikalingas talpinant svetainę „Github“, kitaip SRD nebus tinkamai rodomas. *(Nurodo „GitHub Pages“ nevykdyti publikuojamų failų per „Jekyll“).*


## Turinio įtraukimas

### *.md failai

.md failai yra „markdown“ failai. „Markdown“ yra lengva žymėjimo kalba, kurią galite naudoti formato elementams pridėti prie paprasto teksto dokumentų. Priklausomai nuo turinio dydžio, galite patalpinti visą savo žaidimo informaciją į vieną *.md failą arba, kaip aš padariau [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), sukurti atskirus failus kiekvienam skyriui. „sample.md“ pateikia keletą formatavimo pavyzdžių.

„Markdown“ kalbą labai lengva išmokti, visą sintaksės sąrašą rasite 2 punkte skyriuje „Būtinosios sąlygos“.

### _Sidebar.md

Tai jūsų meniu, naršymo sritis kairėje svetainės pusėje. Kai įtrauksite „markdown“ failą į savo saugyklą, turite jį pridėti čia, kad jo turinys būtų įtrauktas. Laikykitės esamo formatavimo.


## „Github Pages“ įgalinimas paversti saugyklą svetaine

1. Savo saugykloje spustelėkite „Settings“.

![Website-Step1](/_media/Website-Step1.png)

2. Kairėje meniu pusėje pasirinkite „Pages“.

![Website-Step2](/_media/Website-Step2.png)

3. Jei nepadarėte saugyklos „public“ (viešos), turite du pasirinkimus:
    a. Padaryti saugyklą viešą, kas leis naudotis „Github pages“ nemokamai talpinant savo SRD svetainę.
    b. Atnaujinti savo „Github“ paskyrą (šio rašymo metu tai kainuoja 4 USD per mėnesį arba 48 USD per metus).

4. Skiltyje „Branch“ pasirinkite „main“ ir spustelėkite „save“.

5. Palaukite 10–20 sekundžių ir atnaujinkite puslapį.

6. Dabar pamatysite savo URL, pvz., https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Šriftų keitimas

1. Redaguokite /_assets/style.css failą.

2. „body“ skiltyje rasite „siteFont“ ir „headingFont“.

3. Pakeiskite juos į šriftus, kuriuos norite naudoti.


## „Fontawesome“ ir (arba) „Material Icons“ papildinio naudojimas nemokamoms piktogramoms rodyti jūsų SRD

### „Fontawesome“

Naudokite „Fontawesome“, kad gautumėte nemokamų ir animuotų piktogramų. Prenumeruojantys vartotojai gali naudoti „Pro“ piktogramas.

1. Raskite piktogramą [Fontawesome](https://fontawesome.com/icons) svetainėje.
2. Pasirinkite piktogramą.
3. Iššokančiajame lange, skirtuke „HTML“, nukopijuokite viską tarp „ “.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Įklijuokite nukopijuotą tekstą tarp `:` be tarpų.

```EXAMPLE
fa-solid fa-dice-d20
```

### „Material Icons“

Naudokite „Material Icons“ daugiau nemokamų piktogramų.

1. Raskite piktogramas [Material Icons](https://fonts.google.com/icons) svetainėje.
2. Nukopijuokite ir įterpkite žiniatinklio „span“ nuorodą tiesiai į savo „markdown“ failus.

```markup
<span class="material-icons">face</span>
```