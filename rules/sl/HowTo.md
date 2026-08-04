# Predpogoji

1. Osnovno razumevanje [markdown jezika](https://www.markdownguide.org/basic-syntax/).

2. Ustvariti boste morali brezplačen [github](https://github.com/) račun, če ga še nimate. Priporočamo, da uporabite ime svoje RPG igre, saj bo to postalo del URL-ja, ki ga bodo ljudje uporabljali za dostop do vašega SRD-ja.

3. Celoten postopek lahko opravite prek brskalnika, ne da bi poznali git. Čeprav vam bo učenje Github Desktopa omogočilo, da spremembe najprej preizkusite lokalno, preden jih objavite, da jih vidi ves svet.

> Če imate registrirano domeno, jo lahko uporabite v tem postopku za ustvarjanje SRD-ja, kot sem to storil jaz https://srd.7thextinctionrpg.com

# Postopek

## Ustvarjanje repozitorija na Githubu

1. Prijavite se v Github

2. Pomaknite se do javne predloge https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kliknite "Use this template"

![Step3](/_media/Step3.png)

4. Izberite "Create a new repository"

5. Vnesite ime repozitorija

![Step5](/_media/Step5.png)

6. Izberite 'Private' 

7. Izberite 'Create repository'

Trajalo bo od 5 do 30 sekund, da se predloga kopira, nato boste imeli svojo kopijo.

8. Prepričajte se, da imate datoteko ".nojekyll"; to je prazna datoteka, ki je potrebna pri gostovanju spletnega mesta na Githubu, sicer se SRD ne bo pravilno prikazal. *(Pove Github Pages, naj ne izvaja objavljenih datotek skozi Jekyll).*


## Dodajanje vsebine

### *.md datoteke

.md datoteke so markdown datoteke. Markdown je lahek označevalni jezik, ki ga lahko uporabite za dodajanje oblikovnih elementov v besedilne dokumente. Glede na velikost vaše vsebine lahko vse informacije o svoji igri vstavite v eno samo *.md datoteko ali pa, kot sem to storil jaz na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), ustvarite ločene datoteke za vsako poglavje. "sample.md" ponuja nekaj primerov oblikovanja.

Jezik Markdown je zelo enostaven za učenje, za celoten seznam sintakse uporabite povezavo iz 2. točke pod Predpogoji zgoraj.

### _Sidebar.md

To je vaš meni, navigacijska plošča na levi strani spletnega mesta. Ko v svoj repozitorij dodate markdown datoteko, jo morate dodati sem, da bo njena vsebina vključena. Upoštevajte obstoječe oblikovanje.


## Omogočanje Github Pages za pretvorbo repozitorija v spletno mesto

1. V svojem repozitoriju kliknite na 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. V levem meniju izberite 'Pages'

![Website-Step2](/_media/Website-Step2.png)

3. Če repozitorija niste nastavili na 'public', imate dve možnosti:
    a. Naredite repozitorij javen, kar vam bo omogočilo uporabo Github Pages za brezplačno gostovanje vašega SRD spletnega mesta
    b. Nadgradite svoj Github račun (v času pisanja tega besedila stane 4 USD na mesec ali 48 USD letne naročnine)

4. Pod 'Branch' izberite 'main' in kliknite shrani (save)

5. Počakajte 10-20 sekund in nato osvežite stran

6. Zdaj boste videli svoj URL, kot je https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Spreminjanje pisav

1. Uredite datoteko /_assets/style.css 

2. V razdelku 'body' boste našli siteFont in headingFont

3. Spremenite ju v pisave, ki jih želite uporabiti


## Uporaba vtičnika Fontawesome in/ali Material Icons za prikaz brezplačnih ikon v vašem SRD-ju

### Fontawesome

Uporabite Fontawesome za pridobitev brezplačnih in animiranih ikon. Naročeni uporabniki lahko uporabljajo Pro ikone.

1. Poiščite ikono na [Fontawesome](https://fontawesome.com/icons)
2. Izberite ikono
3. V pojavnem oknu pod zavihkom HTML kopirajte vse med " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Kopirano besedilo vstavite med `:` brez presledkov

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Uporabite Material Icons za več brezplačnih ikon.

1. Poiščite ikone na [Material Icons](https://fonts.google.com/icons)
2. Kopirajte in vstavite spletno povezavo `span` neposredno v svoje markdown datoteke

```markup
<span class="material-icons">face</span>
```