# Pêdivî

1. Fêmkirineke bingehîn a [zimanê markdown](https://www.markdownguide.org/basic-syntax/).

2. Ger hesabê we tune be, pêwîst e hûn hesabekî [github](https://github.com/) yê belaş çêkin. Tê pêşniyarkirin ku hûn navê lîstika xwe ya RPG bikar bînin, ji ber ku ev dê bibe beşek ji URL-ya ku mirov dê ji bo gihîştina SRD-ya we bikar bînin. 

3. Hûn dikarin vê pêvajoya tevayî bi rêya gerokê bêyî ku hûn "git" bizanin pêk bînin. Lêbelê, hînbûna github desktop dê bihêle ku hûn her guhertinekê bi awayekî herêmî (locally) biceribînin berî ku hûn wan ji bo cîhanê eşkere bikin.

> Ger navê domainekî we yê tomarkirî hebe, hûn dikarin vê bi vê pêvajoyê re bikar bînin da ku SRD-yek mîna ya min çêbikin https://srd.7thextinctionrpg.com

# Pêvajo

## Afirandina Repository li ser Github

1. Têkevin (Login) Github

2. Herin ser şablona giştî (public template) https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Bikirtînin "Use this template"

![Step3](/_media/Step3.png)

4. "Create a new repository" hilbijêrin

5. Navekî ji bo repository binivîsin

![Step5](/_media/Step5.png)

6. 'Private' hilbijêrin 

7. 'Create repository' hilbijêrin

Dê 5-30 çirke bigire da ku şablon were kopîkirin, paşê dê kopiya weya taybet hebe.

8. Bawer bikin ku pelê ".nojekyll" heye. Ev pelê vala ye ku dema hûn malperekê li ser Github-ê vedihewînin pêwîst e, na SRD dê bi rêkûpêk xuya neke. *(Ji GitHub Pages re dibêje ku pelên weşandî bi rêya Jekyll-ê re derbas neke).*


## Zêdekirina Naveroka Xwe

### Pelên *.md

Pelên .md pelên markdown in. Markdown zimanekî mark-up ê sivik e ku hûn dikarin ji bo zêdekirina hêmanên formatkirinê li belgeyên nivîsa sade bikar bînin. Li gorî mezinahiya naveroka xwe, hûn dikarin hemî agahiyên lîstika xwe di yek pelê *.md de bi cih bikin, an jî mîna min li [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) ji bo her beşekê pelên cuda çêbikin. "sample.md" hin mînakên formatkirinê pêşkêşî dike. 

Zimanê markdown fêrbûna wî pir hêsan e, ji bo navnîşek temam a syntaxê lînka ku di xala 2-an de di bin Pêdiviyan de hatî dayîn bikar bînin. 

### _Sidebar.md

Ev menuya we ye, panelekî navîgasyonê yê li milê çepê yê malperê. Gava ku we pelekî markdown li repository-ya xwe zêde kir, pêwîst e hûn pelê li vir zêde bikin da ku naveroka wê were dîtin. Formatkirina heyî bişopînin.


## Çalakirina Github Pages ji bo veguherandina Repository-ê bo Malperê

1. Di repository-ya xwe de li ser 'Settings' bikirtînin

![Website-Step1](/_media/Website-Step1.png)

2. Di menuyê de li milê çepê 'Pages' hilbijêrin

![Website-Step2](/_media/Website-Step2.png)

3. Ger we repository 'public' nekiribe, du bijareyên we hene
    a. Repository-yê giştî (public) bikin ku dê rê bide we ku hûn Github pages bikar bînin da ku malpera SRD-ya xwe belaş vedihewînin
    b. Hesabê xwe yê Github nûve bikin (di dema nivîsandina vê de mehê 4$ an jî salane 48$ lêçûn heye)

4. Di bin 'Branch' de 'main' hilbijêrin û li ser save bikirtînin

5. 10-20 çirkeyan bidinê û dûv re rûpelê nû bikin (refresh)

6. Hûn ê niha URL-ya xwe wekî https://coweater.github.io/mysrd/ bibînin

![Website-Step6](/_media/Website-Step6.png)


## Guhertina Fontan

1. Pelê /_assets/style.css biguherînin 

2. Di bin 'body section' de hûn ê siteFont & headingFont bibînin

3. Van bi fontên ku hûn dixwazin bikar bînin biguherînin


## Bikaranîna pluginên Fontawesome û/an Material Icons ji bo nîşandana îkonên belaş di SRD-ya xwe de

### Fontawesome

Ji bo bidestxistina îkonên belaş û îkonên anîmasyonî Fontawesome bikar bînin. Bikarhênerên abonekirî dikarin Pro Icons bikar bînin

1. Îkonê li ser [Fontawesome](https://fontawesome.com/icons) bibînin
2. Îkonê hilbijêrin
3. Di pencereya popup de, di bin tab-a HTML de her tiştê di navbera " " de kopî bikin

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Nivîsa kopîkirî di navbera `:` de bêyî valahî bi cih bikin

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Ji bo bêtir îkonên belaş Material Icons bikar bînin

1. Îkonan li ser [Material Icons](https://fonts.google.com/icons) bibînin
2. Lînka span a webê kopî bikin & rasterast têxin nav pelên xwe yên markdown

```markup
<span class="material-icons">face</span>
```