# Mga Kinakailangan

1. Isang pangunahing pag-unawa sa [markdown language](https://www.markdownguide.org/basic-syntax/).

2. Kakailanganin mong gumawa ng libreng [github](https://github.com/) account kung wala ka pa nito. Inirerekomenda namin na gamitin ang pangalan ng iyong RPG dahil ito ang magiging bahagi ng URL na gagamitin ng mga tao para ma-access ang iyong SRD.

3. Magagawa mo ang buong prosesong ito sa pamamagitan ng browser nang hindi alam ang git. Bagaman ang pag-aaral ng github desktop ay magbibigay-daan sa iyo na subukan ang anumang mga pagbabago nang lokal bago ang mga ito i-deploy nang live para makita ng mundo.

> Kung mayroon kang rehistradong domain name, maaari mo itong gamitin sa prosesong ito para gumawa ng SRD tulad ng ginawa ko https://srd.7thextinctionrpg.com

# Ang Proseso

## Paglikha ng Repository sa Github

1. Mag-login sa Github

2. Pumunta sa public template https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. I-click ang "Use this template"

![Step3](/_media/Step3.png)

4. Piliin ang "Create a new repository"

5. Maglagay ng pangalan para sa repository

![Step5](/_media/Step5.png)

6. Piliin ang 'Private'

7. Piliin ang 'Create repository'

Aabutin ito ng 5-30 segundo para kopyahin ang template, pagkatapos ay magkakaroon ka na ng sarili mong kopya.

8. Siguraduhin na mayroon kang file na ".nojekyll"; ito ay isang bakanteng file na kinakailangan kapag nagho-host ng website sa Github, kung hindi ay hindi maayos na maipapakita ang SRD. *(Sinasabihan nito ang GitHub Pages na huwag patakbuhin ang mga nai-publish na file sa pamamagitan ng Jekyll).*

## Pagdagdag ng Iyong Nilalaman

### *.md Files

Ang mga .md file ay mga markdown file. Ang Markdown ay isang lightweight markup language na magagamit mo para magdagdag ng mga formatting element sa mga plaintext na dokumento. Depende sa laki ng iyong nilalaman, maaari mong ilagay ang lahat ng impormasyon ng iyong laro sa iisang *.md file, o tulad ng ginawa ko sa [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), gumawa ng magkakahiwalay na file para sa bawat kabanata. Ang "sample.md" ay nagbibigay ng ilang halimbawa ng formatting.

Ang markdown language ay napakadaling matutunan; gamitin ang link na ibinigay sa punto 2 sa ilalim ng Mga Kinakailangan sa itaas para sa kumpletong listahan ng syntax.

### _Sidebar.md

Ito ang iyong menu, ang navigation pane sa kaliwang bahagi ng website. Kapag nakapagdagdag ka na ng markdown file sa iyong repository, kailangan mong idagdag ang file rito para maisama ang mga nilalaman nito. Sundin ang umiiral na formatting.

## I-enable ang Github Pages para Gawing Website ang Repository

1. Sa iyong repository, i-click ang 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Piliin ang 'Pages' sa kaliwang side menu

![Website-Step2](/_media/Website-Step2.png)

3. Kung hindi mo ginawang 'public' ang repository, mayroon kang dalawang pagpipilian:
    a. Gawing public ang repository na magpapahintulot sa iyo na gamitin ang Github pages para i-host ang iyong SRD Website nang libre.
    b. I-upgrade ang iyong Github account (sa oras ng pagsulat nito, nagkakahalaga ito ng $4 kada buwan o $48 na taunang bayad).

4. Sa ilalim ng 'Branch', piliin ang 'main' at i-click ang save.

5. Maghintay ng 10-20 segundo pagkatapos ay i-refresh ang pahina.

6. Makikita mo na ngayon ang iyong URL gaya ng https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Pagbabago ng mga Font

1. I-edit ang /_assets/style.css file

2. Sa ilalim ng 'body section', makikita mo ang siteFont & headingFont

3. Baguhin ang mga ito sa mga font na nais mong gamitin

## Paggamit ng Fontawesome at/o Material Icons plugin para magpakita ng mga libreng icon sa iyong SRD

### Fontawesome

Gamitin ang Fontawesome para makakuha ng mga libreng icon at animated icon. Ang mga subscribed user ay maaaring gumamit ng Pro Icons.

1. Hanapin ang icon sa [Fontawesome](https://fontawesome.com/icons)
2. Piliin ang icon
3. Sa popup window, sa ilalim ng HTML tab, kopyahin ang lahat ng nasa pagitan ng " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Ilagay ang kinopyang teksto sa pagitan ng `:` na walang mga espasyo

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Gamitin ang Material Icons para sa mas marami pang libreng icon

1. Hanapin ang mga icon sa [Material Icons](https://fonts.google.com/icons)
2. Kopyahin at i-insert ang web span link nang direkta sa iyong mga markdown file

```markup
<span class="material-icons">face</span>
```