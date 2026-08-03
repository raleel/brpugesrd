# Prerequisites

1. A basic understanding of the [markdown language](https://www.markdownguide.org/basic-syntax/).

2. You will need to create a free [github](https://github.com/) account if you don't have one. Recommend you use the name of your RPG as this will become part of the URL people will use to access your SRD. 

3. You can do this whole process through the browser without knowing git. Though  learning github desktop will allow you to test any changes locally before deploying them live for the world to see.

> If you have a domain name registered, you can use this with this process to create an SRD like I have https://srd.7thextinctionrpg.com

# The Process

## Creating the Repository on Github

1. Login to Github

2. Navigate to the public template https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Click "Use this template"

![Step3](/_media/Step3.png)

4. Select "Create a new repository"

5. Enter a repository name

![Step5](/_media/Step5.png)

6. Select 'Private' 

7. Select 'Create repository'

It will take 5-30 seconds to copy the template, then you'll have your own copy.

8. Ensure that you have the file ".nojekyll" this is an empty file that is needed when hosting a website on Github otherwise the SRD will not display properly. *(Tells GitHub Pages not to run the published files through Jekyll).*


## Adding Your Content

### *.md Files

.md files are markdown files, Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Depending on the size of your content you can either place all your game's information in a single *.md file, or like I have at [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) create separate files for each chapter. The "sample.md" provides some formatting examples. 

Markdown language is very easy to learn, use the link provided on point 2 under Prerequisites above for a full list of syntax. 

### _Sidebar.md

This is your menu, navigation pane on the left side of the website. Once you have added a markdown file to your repository you need to add the file here so that its contents are included. Follow the existing formatting.


## Enable Github Pages to turn the Repository into a Website

1. In your repository click on 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Select 'Pages' on the left hand side menu

![Website-Step2](/_media/Website-Step2.png)

3. If you haven't made the repository 'public', you have two choices
    a. Make the repository public which will then allow you to use Github pages to host your SRD Website for free
    b. Upgrade your Github account (at the time of writing this it costs $4 a month or $48 annual fee)

4. Under 'Branch'select 'main' and click save

5. Give it 10-20 seconds then refresh the page

6. You'll now see your URL such as https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Changing Fonts

1. Edit the /_assets/style.css file 

2. Under the 'body section' you'll find siteFont & headingFont

3. Change these to the fonts you want to use


## Using Fontawesome and/or Material Icons plugin to display free icons in your SRD

### Fontawesome

Use Fontawesome to get free icons and animated icons. Subcribed users can use Pro Icons

1. Find the icon on [Fontawesome](https://fontawesome.com/icons)
2. Select the icon
3. In the popup window, under the HTML tab copy everything between " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Place the copied text between `:` no spaces

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Use Material Icons for more free icons

1. Find the icons on [Material Icons](https://fonts.google.com/icons)
2. Copy & insert the web span link directly into your markdown files

```markup
<span class="material-icons">face</span>
```
