# Web-Noticias

Objectiu final: Realitzar una aplicació web de notícies que, en fer scroll fins abaix, recarregui més notícies amb html, jQuery i Bootstrap.

## Especificaciones

* La maquetació (layer design) ha de deixar 300 px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. Tot altre diseny és lliure.  <b>CORRECTO</b>
* Per dispositius mòbils, la publicitat anirá fixada a la part inferior o bé només es mostrará a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. Pots triar l'opció. Tot altre diseny és lliure.  <b>CORRECTO</b> <br>La publicidad se muestra en la parte superior y desaparece al hacer scroll.
* Les dades són: títol (entorn a 8 paraules), imgbig (url al json, imatge a la carpeta), imgmid (url al json, imatge a la carpeta), descripció (mínim de 300 caràcters), data i hora (datetime).  <b>CORRECTO</b>
* Totes les notícies han de tenir el mateix format i mostrar les dades especificades de forma elegant a tot dispositiu.  <b>CORRECTO</b>

## Requisitos

* Realitza la maquetació del projecte. Entrega un breu document amb l'análisi i la planificació al README.md (valen fotos d'esquemes del quadern).  <b>CORRECTO</b>
* Presenta news.html amb 3 notícies (ja escrites al html, no carregar amb js) i emmagatzema 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb js.  <b>CORRECTO</b>
* Codifica news.js en jQuery per fer: "botó carregar més notícies" i "scroll bottom" que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades (fins a dues vegades 1.json, 2.json)  <b>CORRECTO</b>
* Inclou rss.xml (especificat al tema 6)  <b>CORRECTO</b>
* Codifica news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html (seguir no té sentit, aquesta tasca s'automatitza amb codi de servidor).  <b>CORRECTO</b>
* La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) ha de contenir una imatge i un vídeo de youtube responsive.  <b>CORRECTO</b>
* Cada pàgina ha de contenir les etiquetes meta (amb open graph) per compartir títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina.  <b>CORRECTO</b>


## Maquetación inicial

![web horizontal index](https://rawgit.com/juliCy/Web-Noticias/master/img/maqueta/image1.JPG)
![web horizontal news](https://rawgit.com/juliCy/Web-Noticias/master/img/maqueta/image2.JPG)
![web movil index](https://rawgit.com/juliCy/Web-Noticias/master/img/maqueta/image3.JPG)
![web horizontal news](https://rawgit.com/juliCy/Web-Noticias/master/img/maqueta/image4.JPG)

### Añadidos al boceto inicial

Se ha añadido un footer con enlaces de interés.

En la versión de movil se ha añadido un navbar y la publicidad no es fija en la parte baja, si no que se situa arriba y desaparece al hacer scroll.

### Aclaraciones

Se ha añadido otra librería adicional de bootstrap para añadir iconos que no ofrece gliphicon, como por ejemplo los de github...

La parte del login no es funcional.

Se han realizado media queries para poder adaptar la página web a todas las resoluciones más empleadas hoy en dia.
Ya que debido a la maquetación de la página no se adaptaba igual a todas las resoluciones.

La barra de navegación no tiene funciones implementadas, porqué no hay noticias suficientes noticias como para clasificarlas.
En las versiones para móvil se añade el botón de login dentro de la barra de navrgación.

La barra de navegación no queda fija en las versiones de móvil, excepto IPAD, para que así se muestre la máxima información posible en pantalla.

----------------------------

Se ha querido crear un web de noticias simple, sin muchos efectos, que puedan llegar a molestar, pero a la vez bonita de ver y de navegar.

## Autor

* **Julián Maestre** - *Lenguaje de Marcas* - *DAM*

