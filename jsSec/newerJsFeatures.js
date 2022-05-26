// Default parameters

// les param par defaut doivent etre defini a la fin de la liste des param de la function
// A CAUSE DE L'ORDRE DES ARGUMENT PASSES LORS DE L'EXECUTION
// les param par defaut sont definis juste avec le signe "=" et leur valeur par defaut

//eg: 
function Aleatoire(nombre = 100) {
    return Math.floor(Math.random() * nombre) + 1;
}

// console.log((Aleatoire()));
// console.log((Aleatoire(10)));

//--------------------------------------------
// Spread operator ("...")

// utilisable sur les objets iterables
//permet de 'decompresser' l'iterable element par element dans une func ou quelque part d'autre dans le code

//ex:

const num = [1, 2, 3, 4, 5];
const fullNames = [
    { first: 'Albus', last: 'Dumbledore' },
    { first: 'Harry', last: 'Potter' },
    { first: 'Hermione', last: 'Granger' },
    { first: 'Ron', last: 'Weasley' },
    { first: 'Rubeus', last: 'Hagrid' },
    { first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' }
];


// console.log("Sans l'operator spread")
// console.log(num)
// console.log("avec l'operator spread")
// console.log(...num)
// console.log("Sans l'operator spread".toUpperCase())
// console.log(..."Avec l'operator spread".toUpperCase())
// console.log(num, fullNames);
// console.log("Concat par exemple")

// let conca = [...num, ...fullNames]

// console.log(conca)

function tesMoi() {
    console.log(arguments);  // l'attribut 'arguments' de toute func,
    // est un iterable mais les methodes generales ne marchent pas dessus
}

tesMoi(2, 45, "fdssd", 'fd', 53, true)

//-------------------------------------------------------

// Rest parameters
// permet de decompresser les arguments passes a une function
// lors de son invocation

// Ex: 
function sumMoi(...num) {
    console.log(num);
}

sumMoi(24, 45, 65, 3, 2, 5, 48, 32)

// Destructuring
// permet de selectionner elegamment des elements dans un iterable ou objet

const tab = [24, 45, 65, 3, 2, 5, 48, 32]

const [premier, troisieme] = tab; //destructuration

console.log("Premier: ", premier)
console.log("Troisieme: ", troisieme)

const user = {
    nom: "Sanchez",
    prenom: "rick",
    age: 37,
    dimension: "C-317",
    ville: "ohio"
}

const { morty } = user; /// Non-defini, donc retourne un undefined // Destructuration
console.log("Morty: ", morty);
const { defaultMorty = "Evil morty" } = user; /// Non-defini, mais retourne la valeur par defaut, TECHNIQUEMENT N'EST PAS DEFINI
console.log(" ==> Default Morty: ", defaultMorty);
console.log(" ==> Default Morty: ", user.defaultMorty);

const { nom } = user; // Destructuration
console.log("nom: ", nom);
const { dimension: dim } = user; // Destructuration suivie de renommage de var, dim exist, dimension n'existe plus
console.log("Dimension: ", dim);
// console.log(dimension) /// Erreur et interruption d'execution

/// Destructuration sur paramtres, destructuration direct sur l'objet ( en connaissance de sa structure )
function nomComplet({ nom, prenom }) {
    return ` ${nom} ${prenom}`;
}

console.log(nomComplet(user))


