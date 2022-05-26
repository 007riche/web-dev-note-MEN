// Callbacks and array methods

//--------------------------------------------------------------------

// ForEach
// obj.forEach(/* callback ( a function ) */)

const num = [1, 2, 3, 4, 5];

//Eg1:

// function println(elem) {
//     console.log("In func ref");
//     console.log(elem);
// }

// num.forEach(println);

// num.forEach(function (elem) {
//     console.log("In callback explicit anonymous funct");
//     console.log(elem);
// });

//---------------------------------------

// map
// retourne un tableau
// by2 = num.map(function (num) {
//     return num * 2;
// });

// console.log(by2)

const fullNames = [
    { first: 'Albus', last: 'Dumbledore' },
    { first: 'Harry', last: 'Potter' },
    { first: 'Hermione', last: 'Granger' },
    { first: 'Ron', last: 'Weasley' },
    { first: 'Rubeus', last: 'Hagrid' },
    { first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' }
];

firstNames = fullNames.map(function (name) {
    return name["first"];
});

// console.log(firstNames);


//-----------------------------------------------------
// Arrow function, short form of anonymous func, used as func expr

// Syntax

// ( /*List des param, peut etre aussi vide pour une func sans arg, et remplacable par le nom du param si c'est un seul param */) => {
//     /* Corps de la function */
// }

// on peut faire un return implicit en remplacant les accolades par les parantheses
// Note: NE PAS UTILISER LE KEYWORD "return" et l'expression doit etre juste sur une ligne et pas besoin de virgule
// () => () ou meme
// () => expression literalement, 
//eg:
// (num) => num % 2 === 0   //true ou false  OU
// num => num % 2 === 0   // true ou false

// Ex:
// const square = num => {
//     return num * num;
// }

// const videFunc = () => {
//     console.log("Salut");
// }

// const calcREct = (lon, larg) => {
//     return 2 * lon + 2 * larg;
// }

// let lanceDee = () => (
//     Math.floor(Math.random() * 6) + 1
// )


// console.log(square(3)); // invoq ou appel
// videFunc();  // invoq ou appel
// console.log(calcREct(15, 10))   // invoq ou appel
// console.log(lanceDee())

//---------------------------------------------------------

// SetTimeout
// setTimeout(/*CallBack*/, /* delai*/) // execute seulement une fois le callback apres un retard ou une preiode de temps donnee en millisecondes
// Eg:
let i = 0;

// code errone'
// while (i < 60) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
//     i = i + 1;
//     // console.log(i);
// }
// setTimeout(() => {
//     console.log(i)
// }, 1000);

// SetInterval // execute un callback chaque fois par rapport a un interval pour toujours,
// il faut pouvoir terminer son execution en utilisant son identifiant reourne'
// avec la function clearInterval()

//Ex:
// let idSI = setInterval(() => {
//     i++;
//     console.log(i);
//     if (i < 60) {
//         clearInterval(idSI); // interception de l'execution DANS LE CALLBACK DUE AU FAIT DU 'CODE SCOPE'
//     }
// }, 1000);
// code errone'
// while (i <= 6) {
//     let idSI = setInterval(() => {
//         console.log(i);
//         // i++;
//     }, 1000);
//     if (i > 6) {
//         clearInterval(idSI);
//     }
//     i++;

// }



// if (i > 6) {
//     clearInterval(idSI);
// }

//----------------------------------------------------------


// Filter
// cree' un array d'elements filtre's sur la base du callbak comme la func qui filtre
//eg:
let evenNum = num.filter(n => (n % 2 === 0)) // retourne n si divisible par 2 (paire)
console.log(`  even numbers are: ${evenNum}`);

function validUserNames(elements) {
    return elements.filter(elem => (elem.length < 10));
}

console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));


//------------------------------------------------------------

// Some and every

// Some
// retourne "true" si au moins un element du tableau a reussi le test (callBack)
// obj.some(() => { })

// Every
// retourne "true" si tous les elements du tableau a reussi le test (callBack)
// obj.every(() => { });

//-----------------------------------------------------------

// Reduce
// Calls the specified callback function for all the elements in an array.
// The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// @param callbackfn — A function that accepts up to four arguments.
// The reduce method calls the callbackfn function one time for each element in the array.

// @param initialValue — If initialValue is specified,
//it is used as the initial value to start the accumulation.
// The first call to the callbackfn function provides this value as an argument instead of an array value.

// reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number
// A function that accepts up to four arguments.
// The reduce method calls the callbackfn function one time for each element in the array.


// Calls the specified callback function for all the elements in an array.
// The return value of the callback function is the accumulated result,
//     and is provided as an argument in the next call to the callback function.

// obj.reduce(/* callback */, /**/)


//--------------------------------------------------------------------------------------

// CONTEXT EXECUTION avec le keyword THIS dans les objets ( specialement dans les methodes de l'objet)