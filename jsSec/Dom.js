// DOM


// Dom est un objet JS
console.log("DOM: ")
console.dir(document) // La representation de l'objet DOM


/// Element selections
// document.getElementById("nom de l'id"); // retourne l'objet ayant l'ID selectionne'

//----------------------------------------------------------------------
/// Rappel: une classe peut etre utilisee plusieur fois dans le balisage
//----------------------------------------------------------------------


// document.getElementsByTagName("Nom de la balise"); // retourne tous les ojbets ayant pour balise celle selectionnee'
// eg:
let tousImages = document.getElementsByTagName("img"); //retourne tous les objets "image"
for (let imag of tousImages) {
    console.log(imag.src); // affiche la source de chaque image
}

// document.getElementsByClassName("nom de la classe"); // retourne l'ogjet ayant pour classe le nom de la classe specifiee'


// document.querySelector("Nom de l'element");  // retourne le premier objet(surtout dans le cas des balises html) des toutes les occurences de l'element selectionne' (tout comme la facon de selectionner les element comme les balises html, les classes, les id(seuls qui sont uniques), etc ...)


// document.querySelectorAll("nom d'element") // similaire a son predecesseur a la seule difference qu'il retourne toute la collection de toutes les occurences de l'element selectionnes
//eg:
const allAnchor = document.querySelectorAll('p a'); // selectionne tous les liens dans des paragraphes (css selection rule)
for (let anc of allAnchor) {
    console.log(anc.href); // affiche les liens de toutes les balises a
}

// Inner nodes

// innerHtml // selectionne le text contenu dans les nodes selectionne's (contenat meme les balises. id class etc...)

// textContent // selectionne tout le contenu "text" uniquement independament des regles css applique au(x parties du ) text

// innerText // selectionne tout le contenu HTML du node concerne'

// Attributes
// document.querySelector(" /* nom de l'element */ ").NomDeLAttribut
// document.querySelector(" /* nom de l'element */ ").getAttribute('nom de l'attribut') // selectionne  l'attribut
// document.querySelector(" /* nom de l'element */ ").setAttribute(/* nom de l'attribut */,/*valeur*/)

//----------------------------------------------------------------------------------

// style
// la propriete style contient les valeurs du "styling inline" par defaut
// nomDeLElement.style.proprieteCSS [= valeur]
// Eg:
// let head1 = document.querySelector('h1'); // 1er h1
// head1.style.color = #df4af4
// Pour obtenir la valeur finalement calculee et appliquee
// via l'objet "window" (ancetre de tous les objets javascript)
// window.getComputedStyle(/* Element selectionne */).proprieteCSS

// let containe = document.querySelector('#container');
// let image = document.querySelector('img');
// // containe.style.textAlignment = "center";
// image.style.width = '150px';
// image.style.borderRadius = '50%';

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const rainbow = document.querySelectorAll('span')

// for (let i = 0; i < rainbow.length; i++) {
//     rainbow[i].style.color = colors[i];
// }


// // ClassList
// // Nous permet de manipuler plus aisement les classes d'un element
// // cas de figure: ajouter une class sur un element
// let h1 = document.querySelector('h1')

// h1.setAttribute('class', 'NouvClass') // change litteralement la liste de toute les classes de l'element par uniquement NouvClass
// // alternative: recuperer la liste actuelle des classes

// let currentClasses = h1.getAttribute('class');
// //ajout de la nouvelle classe a' la liste actuelle
// h1.setAttribute('class', `${currentClasses}  NouvClass`)

// // Importance de ClassList: methode simple
// h1.classList.add('NomDeLaClasse') // ajoute la nouvelle classe
// h1.classList.remove('NomDeLaClasse') // Retranche la classe
// h1.classList.contains("NomDeLaClasse")  // Verifie si l'element contain la classe
// h1.classList.toggle("NomDeLaClasse")  // fait basculer la classe (enleve, ajoute, true, false)


// //---------------------------------------------------------------------------------
// // Dom Nodes traversing

// // Element parent

// let imag = document.querySelector('img')

// imag.parentElement; // Element parent
// imag.parentElement.parentElement.parentElement;  // Element parent de troisieme generation en arriere

// let spans = document.querySelector('h1 span')
// let children = spans.children  // Retourne la liste des elements enfants

// let span3 = children[2];

// span3.nextSibling // Retourne le prochain noeud ( (conciderant les noeud comme une chaine de char(A prendre avec des pincettes))  qui peut etre un caractere "Retour chariot")
// span3.nextElementSibling // Retourne le prochain Element HTML au lieu du noeud
// span3.previousElementSibling
// span3.previousSibling

// //-------------------------------------------------------------
// // creation de Nouveaux elements du DOM et leur insersion

// document.createElement(" Nom de La balise HTML ")

// ET s'en suit l'insertion avec .append, .appendChild, .prepend, .insertAdjacentElement, .after, .before etc... a' un noeud specifique

let divContainer = document.querySelector('div#container')

for (let i = 1; i <= 100; i++) {
    let newButton = document.createElement('button');
    newButton.innerText = 'hey';
    newButton.type = 'button';
    divContainer.appendChild(newButton);
}

//------------------------------------------------------
// Remove element
// Avec removeChild
// Selectionner l'element parent de l'element avant de selectionner l'element a' supprimer en question

// Avec remove
// On l'applique directement sur l'element a' supprimer 

