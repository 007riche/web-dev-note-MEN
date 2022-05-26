const nicer = document.querySelector('#nicer');

// Event linkings
nicer.onclick = function () {
    alert("Nicer linking");
}

function down() {
    console.log("D O W N !!!")
}

nicer.onmousedown = down;

// Event communs


// Events Listener (/* flexible*/)

// AddEventListener
// Permet d'attacher plusieurs functions callBack sur le meme element
// NomDeLElement.addEventListener('nom de l\'event', /*callBack function*/, { /* objet des options de l'ecouteur des evenements (optionel) */}, /*useCapture (bool)*/)
// Peut etre enleve' sur l'element par la methode removeEventListener()
// Eg:
const firstEventListener = document.querySelector('#listen');
firstEventListener.addEventListener('click', function () {
    alert("Event Click happened!");
});

const onceClick = document.querySelector('#onceClick');
onceClick.addEventListener('click', () => {
    alert("Joker used!");
}, { once: true }); // L'option "once" permet d'executer le callBack une seule fois uniquement

// onceClick.removeEventListener()

const changeColor = document.querySelector('#rollColor');

function rollColor() {
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;

    return `(${red}, ${green}, ${blue})`;
}

changeColor.addEventListener('click', () => {
    const genBodyColor = rollColor();
    console.log("gen color: rgb", genBodyColor);
    const body = document.body;
    body.style.backgroundColor = `rgb${genBodyColor}`;
    const rgbText = document.querySelector('#RGBVal');
    rgbText.innerText = `RGB${genBodyColor}`;
});


///---------------------------------------------------
// THIS keyword ( qui change selon le context d'execution ,pratique contre la duplication de code)

//eg: si cette fonction est utilisee sur un objet, s'appliquera seule sur l'objet
// function uneFonction() {
//     this.style.backgroundColor = qlqChoz;
// }


//-------------------------------------------------------------
// Event OBJECT & Keyboard Event
// L'objet EVENT est l'objet capturer quand un evenement se produit sur la page entiere
// Il peut etre passe' a' la function callBack (comme l'objet d'un  TRY-CATCH)

// Eg:

document.querySelector('#title').addEventListener('click', function (event) {
    console.log("L'objet evenement: ", event); // L'objet event, on peut extraire les infos de cet objet
});

let input = document.querySelector("#inp-text");


// Note: "keydown" est unt exemle de Keyboard event
input.addEventListener('keydown', (evt) => {
    console.log("charCode: ", evt.charCode);
    console.log("code: ", evt.code);
    console.log("composed: ", evt.composed);
    console.log("ctrlKey: ", evt.ctrlKey);
    console.log("keyCode: ", evt.keyCode);
    console.log("key: ", evt.key);
    console.log("location: ", evt.location);
    console.log("isComposing: ", evt.isComposing);

})

//----------------------------------------------------------
// Event PreventDefault:
//  Permet d'intercepter le comportement par defaut de quelque
// une forme pratique est la soumiison d'un formulaire
// (Au lieu d'executers le code specifie' par l'attribut "action" du formulaire, on peut executer un autre code)

const UlTodoList = document.querySelector("#TodoList");
const newTodoInput = document.querySelector("input#newTodo");
const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Interception du comportement par defaut a la soumission
    const value = newTodoInput.value;
    const newTodo = document.createElement("li");
    newTodo.innerText = value;
    console.log(newTodo);
    UlTodoList.append(newTodo);
    newTodoInput.value = "";
});

// const form = document.querySelector('form');

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const product = form.elements.product.value;
//     form.elements.product.value = "";
//     const qty = form.elements.qty.value;
//     form.elements.qty.value = "";

//     const newElem = document.createElement('li');
//     newElem.innerText = `${qty} ${product}`;
//     console.log(newElem);
//     const ul = document.querySelector('#list');
//     ul.appendChild(newElem);
// });

//----------------------------------------------------------------------------
// Input change events
// Pour les changements sur un champ d'entree
// Nom de l'evenement: "input"
// Avantageux par rapport aux evenements comme "keydown"

input.addEventListener("input", () => { });

// const inputEvent = document.querySelector("#username");
// inputEvent.addEventListener("input", (e) => {
//     const text = inputEvent.value;
//     if (text != "") {
//         document.querySelector('h1').innerText = `Welcome, ${text}`;
//     } else {
//         document.querySelector('h1').innerText = "Enter Your Username";
//     }
// })

//------------------------------------------------------------------------
// Event Bubbling
// les evenements declenche's dans un markup,
// de certains "node enfant" recursivement vers les nodes parents touche's correspondants
// ce qui peut causer des evenements imbrique's a se propager a l'envers vers les parents

// Pour Prevenir cela, il faut utilser la methode StopPropagation() de l'objet event

// EG:
// inputEvent.addEventListener('click', (e) => {
//     e.stopPropagation();
//     /* corps */
// })


//-------------------------------------------------------------------------
//Event Delegation
// Permet d'ajouter des events ou event listener sur des elements qui seront cre'e's dans le futur
// Via l'objet evenement
// plus precisement son attribut "target" qui permet cible l'element sur l'evenement en question se produit

// Eg:
// utilisation de concept pour supprimer les li dans le "todo list"
UlTodoList.addEventListener('click', function (event) {
    event.target.remove(); //remove comme append ou appenchild
    console.log("Click on ul");
});

