# Prérequis

1. Une compréhension de base du [langage markdown](https://www.markdownguide.org/basic-syntax/).

2. Vous devrez créer un compte [github](https://github.com/) gratuit si vous n'en avez pas. Il est recommandé d'utiliser le nom de votre JDR car il fera partie de l'URL que les gens utiliseront pour accéder à votre SRD.

3. Vous pouvez effectuer tout ce processus via le navigateur sans connaître git. Cependant, apprendre github desktop vous permettra de tester vos modifications localement avant de les déployer en ligne pour que le monde entier puisse les voir.

> Si vous avez un nom de domaine enregistré, vous pouvez l'utiliser avec ce processus pour créer un SRD comme je l'ai fait https://srd.7thextinctionrpg.com

# Le Processus

## Création du dépôt sur Github

1. Connectez-vous à Github

2. Naviguez vers le modèle public https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Cliquez sur "Use this template" (Utiliser ce modèle)

![Step3](/_media/Step3.png)

4. Sélectionnez "Create a new repository" (Créer un nouveau dépôt)

5. Saisissez un nom de dépôt

![Step5](/_media/Step5.png)

6. Sélectionnez 'Private' (Privé)

7. Sélectionnez 'Create repository' (Créer le dépôt)

Il faudra 5 à 30 secondes pour copier le modèle, après quoi vous aurez votre propre copie.

8. Assurez-vous d'avoir le fichier ".nojekyll" ; il s'agit d'un fichier vide nécessaire lors de l'hébergement d'un site web sur Github, sinon le SRD ne s'affichera pas correctement. *(Indique à GitHub Pages de ne pas faire passer les fichiers publiés par Jekyll).*

## Ajout de votre contenu

### Fichiers *.md

Les fichiers .md sont des fichiers markdown ; Markdown est un langage de balisage léger que vous pouvez utiliser pour ajouter des éléments de mise en forme à des documents en texte brut. Selon la taille de votre contenu, vous pouvez soit placer toutes les informations de votre jeu dans un seul fichier *.md, soit, comme je l'ai fait sur [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), créer des fichiers séparés pour chaque chapitre. Le fichier "sample.md" fournit quelques exemples de mise en forme.

Le langage Markdown est très facile à apprendre, utilisez le lien fourni au point 2 de la section Prérequis ci-dessus pour obtenir une liste complète de la syntaxe.

### _Sidebar.md

Il s'agit de votre menu, le volet de navigation sur le côté gauche du site web. Une fois que vous avez ajouté un fichier markdown à votre dépôt, vous devez y ajouter le fichier pour que son contenu soit inclus. Suivez la mise en forme existante.

## Activer Github Pages pour transformer le dépôt en site web

1. Dans votre dépôt, cliquez sur 'Settings' (Paramètres)

![Website-Step1](/_media/Website-Step1.png)

2. Sélectionnez 'Pages' dans le menu de gauche

![Website-Step2](/_media/Website-Step2.png)

3. Si vous n'avez pas rendu le dépôt 'public', vous avez deux choix :
    a. Rendre le dépôt public, ce qui vous permettra ensuite d'utiliser Github Pages pour héberger votre site SRD gratuitement.
    b. Mettre à niveau votre compte Github (au moment de l'écriture de ceci, cela coûte 4 $ par mois ou 48 $ de frais annuels).

4. Sous 'Branch' (Branche), sélectionnez 'main' et cliquez sur save (enregistrer).

5. Patientez 10 à 20 secondes, puis actualisez la page.

6. Vous verrez maintenant votre URL, telle que https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Modification des polices

1. Modifiez le fichier /_assets/Style.css

2. Sous la section 'body', vous trouverez siteFont et headingFont.

3. Changez-les pour les polices que vous souhaitez utiliser.

## Utiliser le plugin Fontawesome et/ou Material Icons pour afficher des icônes gratuites dans votre SRD

### Fontawesome

Utilisez Fontawesome pour obtenir des icônes gratuites et des icônes animées. Les utilisateurs abonnés peuvent utiliser les icônes Pro.

1. Trouvez l'icône sur [Fontawesome](https://fontawesome.com/icons)
2. Sélectionnez l'icône
3. Dans la fenêtre contextuelle, sous l'onglet HTML, copiez tout ce qui se trouve entre les " "

```EXAMPLE
<i Classe="fa-solid fa-dice-d20"></i>
```

4. Placez le texte copié entre `:` sans espaces

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Utilisez Material Icons pour plus d'icônes gratuites.

1. Trouvez les icônes sur [Material Icons](https://fonts.google.com/icons)
2. Copiez & insérez le lien web span directement dans vos fichiers markdown

```markup
<span Classe="material-icons">face</span>
```