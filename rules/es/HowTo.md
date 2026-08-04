# Requisitos previos

1. Un conocimiento básico del [lenguaje markdown](https://www.markdownguide.org/basic-syntax/).

2. Necesitarás crear una cuenta gratuita de [github](https://github.com/) si no tienes una. Te recomiendo que utilices el nombre de tu juego de rol, ya que esto formará parte de la URL que la gente usará para acceder a tu SRD.

3. Puedes hacer todo este proceso a través del navegador sin saber usar git. Sin embargo, aprender a usar github desktop te permitirá probar cualquier cambio localmente antes de publicarlo para que todo el mundo lo vea.

> Si tienes un nombre de dominio registrado, puedes usarlo en este proceso para crear una SRD como hice yo: https://srd.7thextinctionrpg.com

# El proceso

## Crear el repositorio en Github

1. Inicia sesión en Github.

2. Navega hasta la plantilla pública https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Haz clic en "Use this template".

![Step3](/_media/Step3.png)

4. Selecciona "Create a new repository".

5. Introduce un nombre para el repositorio.

![Step5](/_media/Step5.png)

6. Selecciona 'Private'.

7. Selecciona 'Create repository'.

Tardará entre 5 y 30 segundos en copiar la plantilla, después tendrás tu propia copia.

8. Asegúrate de tener el archivo ".nojekyll"; este es un archivo vacío necesario al alojar un sitio web en Github, de lo contrario, la SRD no se mostrará correctamente. *(Le indica a Github Pages que no procese los archivos publicados a través de Jekyll).*


## Añadir tu contenido

### Archivos *.md

Los archivos .md son archivos markdown. Markdown es un lenguaje de marcado ligero que puedes usar para añadir elementos de formato a documentos de texto plano. Dependiendo del tamaño de tu contenido, puedes colocar toda la información de tu juego en un único archivo *.md o, como he hecho yo en [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), crear archivos separados para cada capítulo. El archivo "sample.md" proporciona algunos ejemplos de formato.

El lenguaje Markdown es muy fácil de aprender, utiliza el enlace proporcionado en el punto 2 de los Requisitos previos anteriores para ver una lista completa de la sintaxis.

### _Sidebar.md

Este es tu menú, el panel de navegación en el lado izquierdo del sitio web. Una vez que hayas añadido un archivo markdown a tu repositorio, necesitas añadir el archivo aquí para que su contenido sea incluido. Sigue el formato existente.


## Habilitar Github Pages para convertir el repositorio en un sitio web

1. En tu repositorio, haz clic en 'Settings'.

![Website-Step1](/_media/Website-Step1.png)

2. Selecciona 'Pages' en el menú de la izquierda.

![Website-Step2](/_media/Website-Step2.png)

3. Si no has hecho que el repositorio sea 'public', tienes dos opciones:
    a. Hacer el repositorio público, lo que te permitirá usar Github Pages para alojar tu sitio web de SRD de forma gratuita.
    b. Actualizar tu cuenta de Github (en el momento de escribir esto, cuesta 4$ al mes o una cuota anual de 48$).

4. En 'Branch', selecciona 'main' y haz clic en guardar.

5. Espera de 10 a 20 segundos y luego actualiza la página.

6. Ahora verás tu URL, como por ejemplo https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Cambiar fuentes

1. Edita el archivo /_assets/style.css

2. En la sección 'body', encontrarás siteFont y headingFont.

3. Cámbialas por las fuentes que desees utilizar.


## Usar el plugin de Fontawesome y/o Material Icons para mostrar iconos gratuitos en tu SRD

### Fontawesome

Usa Fontawesome para obtener iconos gratuitos e iconos animados. Los usuarios suscritos pueden usar Pro Icons.

1. Busca el icono en [Fontawesome](https://fontawesome.com/icons)
2. Selecciona el icono.
3. En la ventana emergente, bajo la pestaña HTML, copia todo lo que hay entre " ".

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Coloca el texto copiado entre `:` sin espacios.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Usa Material Icons para más iconos gratuitos.

1. Busca los iconos en [Material Icons](https://fonts.google.com/icons)
2. Copia e inserta el enlace del span web directamente en tus archivos markdown.

```markup
<span class="material-icons">face</span>
```