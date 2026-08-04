# Parakushtet

1. Një kuptim bazë i [gjuhës markdown](https://www.markdownguide.org/basic-syntax/).

2. Do t'ju duhet të krijoni një llogari falas në [github](https://github.com/) nëse nuk keni një të tillë. Ju rekomandojmë të përdorni emrin e RPG-së tuaj, pasi kjo do të bëhet pjesë e URL-së që njerëzit do të përdorin për të hyrë në SRD-në tuaj.

3. Mund ta kryeni të gjithë këtë proces përmes shfletuesit pa ditur se si funksionon git. Megjithatë, mësimi i GitHub Desktop do t'ju lejojë t'i testoni ndryshimet lokalisht përpara se t'i publikoni ato që t'i shohë bota.

> Nëse keni një emër domaini të regjistruar, mund ta përdorni atë me këtë proces për të krijuar një SRD siç kam bërë unë https://srd.7thextinctionrpg.com

# Procesi

## Krijimi i Repozitorit në Github

1. Hyni në Github

2. Navigoni te shablloni publik https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klikoni "Use this template"

![Step3](/_media/Step3.png)

4. Zgjidhni "Create a new repository"

5. Vendosni një emër për repozitorin

![Step5](/_media/Step5.png)

6. Zgjidhni 'Private' (Privat)

7. Zgjidhni 'Create repository'

Do të duhen 5-30 sekonda për të kopjuar shabllonin, dhe më pas do të keni kopjen tuaj.

8. Sigurohuni që keni skedarin ".nojekyll"; ky është një skedar bosh që nevojitet kur strehoni një faqe interneti në Github, përndryshe SRD-ja nuk do të shfaqet siç duhet. *(I tregon GitHub Pages të mos i përpunojë skedarët e publikuar përmes Jekyll).*


## Shtimi i Përmbajtjes Tuaj

### Skedarët *.md

Skedarët .md janë skedarë markdown. Markdown është një gjuhë shënimi (markup) e lehtë që mund ta përdorni për t'i shtuar elemente formatimi teksteve të thjeshta. Në varësi të sasisë së përmbajtjes, mund ta vendosni të gjithë informacionin e lojës në një skedar të vetëm *.md, ose, siç kam bërë unë te [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), të krijoni skedarë të veçantë për çdo kapitull. "sample.md" ofron disa shembuj formatimi.

Gjuha Markdown është shumë e lehtë për t'u mësuar; përdorni lidhjen e dhënë në pikën 2 te Parakushtet më sipër për një listë të plotë të sintaksës.

### _Sidebar.md

Ky është menyja juaj, paneli i navigimit në anën e majtë të faqes së internetit. Pasi të keni shtuar një skedar markdown në repozitorin tuaj, duhet ta shtoni skedarin këtu në mënyrë që përmbajtja e tij të përfshihet. Ndiqni formatimin ekzistues.


## Aktivizimi i Github Pages për ta kthyer Repozitorin në një Faqe Interneti

1. Në repozitorin tuaj, klikoni te 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Zgjidhni 'Pages' në menunë e anës së majtë

![Website-Step2](/_media/Website-Step2.png)

3. Nëse nuk e keni bërë repozitorin 'public', keni dy zgjedhje:
    a. Bëjeni repozitorin publik, gjë që do t'ju lejojë të përdorni Github Pages për të strehuar faqen tuaj të SRD-së falas.
    b. Përmirësoni llogarinë tuaj në Github (në momentin e shkrimit të këtij teksti, kjo kushton 4 dollarë në muaj ose 48 dollarë në vit).

4. Nën 'Branch', zgjidhni 'main' dhe klikoni 'save'.

5. Prisni 10-20 sekonda dhe rifreskoni faqen.

6. Tani do të shihni URL-në tuaj, si p.sh. https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Ndryshimi i Shkronjave (Fonts)

1. Redaktoni skedarin /_assets/style.css

2. Nën seksionin 'body', do të gjeni siteFont dhe headingFont

3. Ndryshojini këto me shkronjat që dëshironi të përdorni


## Përdorimi i shtesës Fontawesome dhe/ose Material Icons për të shfaqur ikona falas në SRD-në tuaj

### Fontawesome

Përdorni Fontawesome për të marrë ikona falas dhe ikona të animuara. Përdoruesit me abonim mund të përdorin ikona Pro.

1. Gjeni ikonën në [Fontawesome](https://fontawesome.com/icons)
2. Zgjidhni ikonën
3. Në dritaren që shfaqet (popup), nën tabin HTML, kopjoni gjithçka midis " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Vendosni tekstin e kopjuar midis `:` pa hapësira

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Përdorni Material Icons për më shumë ikona falas.

1. Gjeni ikonat në [Material Icons](https://fonts.google.com/icons)
2. Kopjoni dhe futni lidhjen "span" të faqes direkt në skedarët tuaj markdown

```markup
<span class="material-icons">face</span>
```