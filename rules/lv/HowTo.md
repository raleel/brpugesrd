# Priekšnosacījumi

1. Pamatzināšanas par [markdown valodu](https://www.markdownguide.org/basic-syntax/).

2. Jums būs jāizveido bezmaksas [github](https://github.com/) konts, ja tāds vēl nav. Ieteicams izmantot savas RPG spēles nosaukumu, jo tas kļūs par daļu no URL, kuru cilvēki izmantos, lai piekļūtu jūsu SRD.

3. Visu šo procesu varat veikt caur pārlūkprogrammu, nepārzinot git. Lai gan "Github Desktop" apguve ļaus jums lokāli pārbaudīt visas izmaiņas, pirms tās publicēt visai pasaulei.

> Ja esat reģistrējis domēna vārdu, varat to izmantot šajā procesā, lai izveidotu tādu SRD, kāds ir man: https://srd.7thextinctionrpg.com

# Process

## Repozitorija izveide Github vietnē

1. Ielogojieties Github

2. Dodieties uz publisko šablonu https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Noklikšķiniet uz "Use this template"

![Step3](/_media/Step3.png)

4. Atlasiet "Create a new repository"

5. Ievadiet repozitorija nosaukumu

![Step5](/_media/Step5.png)

6. Atlasiet 'Private' (Privāts)

7. Atlasiet 'Create repository'

Būs nepieciešamas 5–30 sekundes, lai nokopētu šablonu, pēc tam jums būs sava kopija.

8. Pārliecinieties, vai jums ir fails ".nojekyll" — tas ir tukšs fails, kas nepieciešams, mitinot vietni Github, pretējā gadījumā SRD netiks attēlots pareizi. *(Norāda GitHub Pages, ka publicētie faili nav jāapstrādā caur Jekyll).*


## Satura pievienošana

### *.md faili

.md faili ir markdown faili. Markdown ir viegla iezīmēšanas valoda, ko varat izmantot, lai pievienotu formatējuma elementus vienkārša teksta dokumentiem. Atkarībā no satura apjoma, varat ievietot visu spēles informāciju vienā *.md failā vai, kā es to darīju vietnē [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), izveidot atsevišķus failus katrai nodaļai. "sample.md" sniedz dažus formatēšanas piemērus.

Markdown valodu ir ļoti viegli apgūt; izmantojiet 2. punktā zem "Priekšnosacījumiem" norādīto saiti, lai iegūtu pilnu sintakses sarakstu.

### _Sidebar.md

Šī ir jūsu izvēlne, navigācijas panelis tīmekļa vietnes kreisajā pusē. Kad esat pievienojis markdown failu savam repozitorijam, jums tas šeit jāpievieno, lai tā saturs tiktu iekļauts. Ievērojiet esošo formatējumu.


## Github Pages iespējošana, lai pārveidotu repozitoriju par vietni

1. Savā repozitorijā noklikšķiniet uz 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Kreisās puses izvēlnē atlasiet 'Pages'

![Website-Step2](/_media/Website-Step2.png)

3. Ja neesat padarījis repozitoriju 'public' (publisku), jums ir divas izvēles:
    a. Padariet repozitoriju publisku, kas ļaus jums izmantot Github pages, lai bez maksas mitinātu savu SRD vietni.
    b. Uzlabojiet savu Github kontu (šī teksta rakstīšanas brīdī tas maksā 4 USD mēnesī vai 48 USD gadā).

4. Sadaļā 'Branch' atlasiet 'main' un noklikšķiniet uz saglabāt (save).

5. Uzgaidiet 10–20 sekundes un pēc tam atsvaidziniet lapu.

6. Tagad jūs redzēsiet savu URL, piemēram, https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Fontu maiņa

1. Rediģējiet /_assets/style.css failu.

2. Sadaļā 'body' atradīsiet siteFont un headingFont.

3. Nomainiet tos uz fontiem, kurus vēlaties izmantot.


## "Fontawesome" un/vai "Material Icons" spraudņa izmantošana bezmaksas ikonu attēlošanai jūsu SRD

### Fontawesome

Izmantojiet Fontawesome, lai iegūtu bezmaksas ikonas un animētas ikonas. Abonētie lietotāji var izmantot Pro ikonas.

1. Atrodiet ikonu [Fontawesome](https://fontawesome.com/icons) vietnē.
2. Atlasiet ikonu.
3. Uznirstošajā logā, HTML cilnē, nokopējiet visu, kas atrodas starp " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Ievietojiet nokopēto tekstu starp `:` bez atstarpēm

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Izmantojiet Material Icons, lai iegūtu vairāk bezmaksas ikonu.

1. Atrodiet ikonas [Material Icons](https://fonts.google.com/icons) vietnē.
2. Nokopējiet un ievietojiet tīmekļa span saiti tieši savos markdown failos.

```markup
<span class="material-icons">face</span>
```