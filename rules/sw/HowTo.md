# Masharti ya awali

1. Uelewa wa kimsingi wa [lugha ya markdown](https://www.markdownguide.org/basic-syntax/).

2. Utahitaji kuunda akaunti ya [github](https://github.com/) bila malipo ikiwa huna moja. Inapendekezwa utumie jina la RPG yako kwani hili litakuwa sehemu ya URL ambayo watu watatumia kufikia SRD yako.

3. Unaweza kufanya mchakato huu wote kupitia kivinjari bila kujua git. Ingawa kujifunza github desktop kutakuwezesha kujaribu mabadiliko yoyote ndani ya kifaa chako kabla ya kuyachapisha ili yaonekane na ulimwengu.

> Ikiwa umesajili jina la kikoa (domain name), unaweza kulitumia na mchakato huu kuunda SRD kama nilivyofanya mimi https://srd.7thextinctionrpg.com

# Mchakato

## Kuunda Hifadhi (Repository) kwenye Github

1. Ingia kwenye Github

2. Nenda kwenye kiolezo cha umma (public template) https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Bofya "Use this template"

![Step3](/_media/Step3.png)

4. Chagua "Create a new repository"

5. Ingiza jina la hifadhi

![Step5](/_media/Step5.png)

6. Chagua 'Private'

7. Bofya 'Create repository'

Itachukua sekunde 5-30 kunakili kiolezo hicho, kisha utakuwa na nakala yako mwenyewe.

8. Hakikisha kuwa una faili ya ".nojekyll"; hili ni faili tupu linalohitajika wakati wa kuhifadhi tovuti kwenye Github, la sivyo SRD haitaonyeshwa ipasavyo. *(Inaambia GitHub Pages isitumie faili zilizochapishwa kupitia Jekyll).*


## Kuongeza Maudhui Yako

### Faili za *.md

Faili za .md ni faili za markdown; Markdown ni lugha nyepesi ya alama (markup language) unayoweza kutumia kuongeza vipengele vya uumbizaji kwenye hati za maandishi. Kulingana na ukubwa wa maudhui yako, unaweza kuweka maelezo yote ya mchezo wako kwenye faili moja ya *.md, au kama nilivyofanya kwenye [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), unaweza kuunda faili tofauti kwa kila sura. "sample.md" hutoa mifano kadhaa ya uumbizaji.

Lugha ya Markdown ni rahisi sana kujifunza, tumia kiungo ulichopewa katika hatua ya 2 chini ya Masharti ya awali hapo juu kwa orodha kamili ya sintaksia.

### _Sidebar.md

Hii ni menyu yako, kidirisha cha urambazaji upande wa kushoto wa tovuti. Mara tu unapoongeza faili ya markdown kwenye hifadhi yako, unahitaji kuongeza faili hiyo hapa ili maudhui yake yajumuishwe. Fuata uumbizaji uliopo.


## Kuwezesha Github Pages kubadilisha Hifadhi kuwa Tovuti

1. Kwenye hifadhi yako, bofya 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Chagua 'Pages' kwenye menyu ya upande wa kushoto

![Website-Step2](/_media/Website-Step2.png)

3. Ikiwa haujafanya hifadhi kuwa 'public', una machaguo mawili:
    a. Ifanye hifadhi kuwa ya umma (public), jambo ambalo litakuruhusu kutumia Github pages kuhifadhi tovuti yako ya SRD bila malipo.
    b. Boresha akaunti yako ya Github (wakati wa kuandika mwongozo huu, inagharimu $4 kwa mwezi au ada ya $48 kwa mwaka).

4. Chini ya 'Branch', chagua 'main' na ubofye 'save'.

5. Ipe sekunde 10-20 kisha uonyeshe upya (refresh) ukurasa.

6. Sasa utaona URL yako kama vile https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Kubadilisha Fonti

1. Hariri faili ya /_assets/style.css

2. Chini ya sehemu ya 'body', utapata siteFont & headingFont

3. Badilisha hizi ziwe fonti unazotaka kutumia


## Kutumia Fontawesome na/au Material Icons plugin kuonyesha ikoni zisizolipishwa kwenye SRD yako

### Fontawesome

Tumia Fontawesome kupata ikoni zisizolipishwa na ikoni zilizohuishwa. Watumiaji waliojisajili wanaweza kutumia Pro Icons.

1. Tafuta ikoni kwenye [Fontawesome](https://fontawesome.com/icons)
2. Chagua ikoni hiyo
3. Kwenye dirisha ibukizi, chini ya kichupo cha HTML nakili kila kitu kilicho kati ya " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Weka maandishi uliyoyanakili kati ya `:` bila nafasi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Tumia Material Icons kwa ikoni zaidi zisizolipishwa.

1. Tafuta ikoni kwenye [Material Icons](https://fonts.google.com/icons)
2. Nakili & ingiza kiungo cha web span moja kwa moja kwenye faili zako za markdown

```markup
<span class="material-icons">face</span>
```