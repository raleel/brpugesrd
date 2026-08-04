# Prerequisiti

1. Una conoscenza di base del [linguaggio markdown](https://www.markdownguide.org/basic-syntax/).

2. Dovrai creare un account [github](https://github.com/) gratuito se non ne possiedi uno. Ti consiglio di usare il nome del tuo gioco di ruolo, poiché diventerà parte dell'URL che le persone useranno per accedere al tuo SRD.

3. Puoi eseguire l'intero processo tramite il browser senza conoscere git. Tuttavia, imparare ad usare GitHub Desktop ti permetterà di testare le modifiche localmente prima di pubblicarle affinché il mondo possa vederle.

> Se hai un nome di dominio registrato, puoi utilizzarlo con questo processo per creare un SRD come ho fatto io https://srd.7thextinctionrpg.com

# Il Processo

## Creazione del Repository su Github

1. Accedi a Github

2. Vai al template pubblico https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Clicca su "Use this template"

![Step3](/_media/Step3.png)

4. Seleziona "Create a new repository"

5. Inserisci un nome per il repository

![Step5](/_media/Step5.png)

6. Seleziona 'Private' 

7. Seleziona 'Create repository'

Ci vorranno 5-30 secondi per copiare il template, dopodiché avrai la tua copia personale.

8. Assicurati di avere il file ".nojekyll"; questo è un file vuoto necessario per ospitare un sito web su Github, altrimenti l'SRD non verrà visualizzato correttamente. *(Dice a GitHub Pages di non eseguire i file pubblicati attraverso Jekyll).*


## Aggiunta dei Contenuti

### File *.md

I file .md sono file markdown. Il Markdown è un linguaggio di markup leggero che puoi usare per aggiungere elementi di formattazione ai documenti di testo semplice. A seconda della dimensione del tuo contenuto, puoi inserire tutte le informazioni del tuo gioco in un unico file *.md o, come ho fatto io su [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), creare file separati per ogni capitolo. Il file "sample.md" fornisce alcuni esempi di formattazione. 

Il linguaggio Markdown è molto facile da imparare; usa il link fornito al punto 2 della sezione Prerequisiti qui sopra per un elenco completo della sintassi. 

### _Sidebar.md

Questo è il tuo menu, il riquadro di navigazione sul lato sinistro del sito web. Una volta aggiunto un file markdown al tuo repository, devi aggiungere il file qui affinché i suoi contenuti vengano inclusi. Segui la formattazione esistente.


## Abilitare Github Pages per trasformare il Repository in un Sito Web

1. Nel tuo repository, clicca su 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Seleziona 'Pages' dal menu sul lato sinistro

![Website-Step2](/_media/Website-Step2.png)

3. Se non hai reso il repository 'public', hai due scelte:
    a. Rendere il repository pubblico, il che ti permetterà di usare Github Pages per ospitare il tuo sito SRD gratuitamente.
    b. Aggiornare il tuo account Github (al momento in cui scrivo costa 4$ al mese o 48$ di quota annuale).

4. Sotto 'Branch' seleziona 'main' e clicca su save.

5. Attendi 10-20 secondi, poi ricarica la pagina.

6. Ora vedrai il tuo URL, come ad esempio https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Cambiare i Font

1. Modifica il file /_assets/style.css 

2. Sotto la 'body section' troverai siteFont & headingFont

3. Modificali con i font che desideri utilizzare


## Usare i plugin Fontawesome e/o Material Icons per visualizzare icone gratuite nel tuo SRD

### Fontawesome

Usa Fontawesome per ottenere icone gratuite e animate. Gli utenti iscritti possono usare le icone Pro.

1. Trova l'icona su [Fontawesome](https://fontawesome.com/icons)
2. Seleziona l'icona
3. Nella finestra pop-up, sotto la scheda HTML copia tutto ciò che si trova tra " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Inserisci il testo copiato tra `:` senza spazi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Usa Material Icons per ulteriori icone gratuite.

1. Trova le icone su [Material Icons](https://fonts.google.com/icons)
2. Copia e inserisci il link span web direttamente nei tuoi file markdown

```markup
<span class="material-icons">face</span>
```