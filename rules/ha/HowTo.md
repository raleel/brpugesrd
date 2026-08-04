# Abubuwan da ake buƙata

1. Fahimtar asali game da [harshen markdown](https://www.markdownguide.org/basic-syntax/).

2. Za ka buƙaci ƙirƙirar asusun [github](https://github.com/) kyauta idan ba ka da shi. Ana ba da shawarar ka yi amfani da sunan wasan RPG ɗinka tunda wannan zai zama wani ɓangare na URL ɗin da mutane za su yi amfani da shi don shiga SRD ɗinka.

3. Za ka iya yin duk wannan tsari ta hanyar mai binciken yanar gizo (browser) ba tare da sanin yadda ake amfani da git ba. Kodayake koyon github desktop zai ba ka damar gwada duk wani canji da ka yi a kwamfutarka kafin ka wallafa shi don duniya ta gani.

> Idan kana da sunan domain da aka yi rijista, za ka iya amfani da shi tare da wannan tsari don ƙirƙirar SRD kamar yadda na yi https://srd.7thextinctionrpg.com

# Tsarin

## Ƙirƙirar Ma'ajiya (Repository) akan Github

1. Shiga (Login) zuwa Github

2. Kewaya zuwa ga samfurin jama'a (public template) https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Danna "Use this template"

![Step3](/_media/Step3.png)

4. Zaɓi "Create a new repository"

5. Shigar da sunan ma'ajiya (repository name)

![Step5](/_media/Step5.png)

6. Zaɓi 'Private'

7. Zaɓi 'Create repository'

Zai ɗauki daƙiƙa 5-30 don kwafi samfurin, sannan za ka sami naka kwafin.

8. Tabbatar cewa kana da fayil ɗin ".nojekyll" wannan fayil ne marar komai wanda ake buƙata lokacin da ake karɓar gidan yanar gizo akan Github, in ba haka ba SRD ɗin ba zai nuna yadda ya kamata ba. *(Yana gaya wa shafukan GitHub kada su gudanar da fayilolin da aka wallafa ta hanyar Jekyll).*

## Ƙara Abubuwan da Kake So

### Fayilolin *.md

Fayilolin .md su ne fayilolin markdown, Markdown harshe ne mai sauƙi na alama (markup language) wanda za ka iya amfani da shi don ƙara abubuwan tsari ga takardun rubutu. Dangane da girman abubuwan da kake da su, za ka iya sanya duk bayanan wasanka a cikin fayil ɗin *.md guda ɗaya, ko kuma kamar yadda na yi a [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) ƙirƙirar fayiloli daban-daban don kowane babi. "sample.md" yana ba da wasu misalan tsari.

Harshen Markdown yana da sauƙin koya, yi amfani da hanyar haɗin da aka bayar a batu na 2 a ƙarƙashin "Abubuwan da ake buƙata" a sama don cikakken jerin tsarin (syntax).

### _Sidebar.md

Wannan shi ne menu ɗinka, sashin kewaya a gefen hagu na gidan yanar gizon. Da zarar ka ƙara fayil ɗin markdown a ma'ajiyarka, kana buƙatar ƙara fayil ɗin anan domin a haɗa abubuwan da ke ciki. Bi tsarin da ake da shi.

## Kunna Shafukan Github don Juya Ma'ajiya zuwa Gidan Yanar Gizo

1. A cikin ma'ajiyarka danna 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Zaɓi 'Pages' a cikin menu na gefen hagu

![Website-Step2](/_media/Website-Step2.png)

3. Idan ba ka sanya ma'ajiyar ta zama 'public' ba, kana da zaɓi biyu:
    a. Sanya ma'ajiyar ta zama public wanda zai ba ka damar amfani da shafukan Github don karɓar gidan yanar gizon SRD ɗinka kyauta.
    b. Haɓaka asusunka na Github (a lokacin rubuta wannan, yana kashe $4 a wata ko $48 na kuɗin shekara).

4. A ƙarƙashin 'Branch' zaɓi 'main' sannan danna save

5. Ba shi daƙiƙa 10-20 sannan ka sabunta (refresh) shafin

6. Yanzu za ka ga URL ɗinka kamar https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Canza Fonts

1. Shirya fayil ɗin /_assets/style.css

2. A ƙarƙashin 'body section' za ka sami siteFont & headingFont

3. Canza waɗannan zuwa fonts ɗin da kake son amfani da su

## Amfani da plugin ɗin Fontawesome da/ko Material Icons don nuna gumaka kyauta a cikin SRD ɗinka

### Fontawesome

Yi amfani da Fontawesome don samun gumaka kyauta da gumaka masu motsi. Masu amfani da suka yi biyan kuɗi za su iya amfani da Pro Icons.

1. Nemo gunkin a [Fontawesome](https://fontawesome.com/icons)
2. Zaɓi gunkin
3. A cikin taga mai buɗewa (popup window), ƙarƙashin shafin HTML kwafi komai tsakanin " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Sanya rubutun da aka kwafa tsakanin `:` ba tare da sarari ba

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Yi amfani da Material Icons don ƙarin gumaka kyauta

1. Nemo gumakan a [Material Icons](https://fonts.google.com/icons)
2. Kwafa & saka hanyar haɗin gizon (web span link) kai tsaye cikin fayilolin markdown ɗinka

```markup
<span class="material-icons">face</span>
```