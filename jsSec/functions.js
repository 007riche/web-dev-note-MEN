// This file is for learning purpose of functions in JS

function lastElement(arr) {
    if (arr.length <= 0) {
        return null;
    }
    return arr[arr.length - 1];
}


// console.log(lastElement([3, 5, 7]));
// console.log(lastElement([1]));
// console.log(lastElement([]));

// console.log("Test".slice(1));

function capitalize(str) {
    return str[0] + str.slice(1);
}

// capitalize(str);
// console.log("rest".toUpperCase());

function sumArray(arr) {
    let total = 0;
    if (arr.length > 0) {
        for (item of arr) {
            total += item;
        }
        return total;
    }

}

// console.log(sumArray([1, 2, 3]));
// console.log(sumArray([2, 2, 2, 2]));
// console.log(sumArray([50, 50, 1]));
function returnDay(param) {
    switch (param) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";

        case 3:
            return "Wednesday";

        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";

        default:
            return null;
    }
}

console.log(returnDay(4));

//---------------------------------------------------------------------------------------

//Expression de fonction (Une closure en JS)
nomDeVar = function (/* liste des parametre ou Arg */) { /* corps de la function*/ } //stocke la func dans la variable
/* Appel ou invocation de la fonction*/   nomDeVar();

//---------------------------------------------------------------------------------------

//fonctions d'ordre superieur (Higher order functions)
// Des fonctions prenant en arg des fonctions au moment de leur appel
function premierBut() { } //Sera l'argument

function funcCommeArg(/*param*/ premierBut) {
    // "nomFunc()" ==> invocation
}
/* Appel */
funcCommeArg(/* nom de la func en Arg*/ premierBut);


//--------------------------------------------------------------------------------------
//Fonction retournant des fonctions
// Peuvent aider comme une forme de polymorphisme de function
/* syntaxe basic  */function nOmFunc(/*param*/) {
    return function (/*param*/) {
        // fonction retourne
    }
}
/* Appel */ nOmFunc(); // ==> retourne une fonction, donc A recupere dans une variable
let recup = nOmFunc()
/* Vrai appel de function*/ recup();
// Ex:
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

let isChild = makeBetweenFunc(0, 18); // polymorphique
isChild(8) // true
isChild(25) //false
let isAdult = makeBetweenFunc(18, 100);  // Autre forme polymorphique
isAdult(7) // false

//--------------------------------------------------------------------------------------

// Methodes
nomObj = {
    // syntaxe 1:
    nomMeth1: function (/*param*/) {/* Corps de la methode*/ }, // A ne pas oublier la virgule apres

    // Syntaxe 2
    nomMeth2(/*param*/) {/* Corps */ },

    nomAttribut: uneVarCommeAttribut, //un attribut de l'objet nomObj
}

// Appels
// utilisant la syntaxe 1 de finition de la methode:
nomObj.nomMeth1(/* Arg*/);
nomObj["nomMeth1"](); // appel de la methode comme appel d'1 attribut de l'objet, syntaxe pas courante

// syntaxe 2 de definition
nomObj.nomMeth2();

//----------------------------------------------------------------------------------------