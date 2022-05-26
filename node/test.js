const multiply = (a, b) => a * b;
const cube = x => x * x * x;
const PI = 3.14159
const square = x => x * x;

// Till here no function or object is exposed to the outside of the module

// to make these available, we need to export them

// module.exports.FunctOrVarName = FunctOrVarName


// Syntax 
// module.exports.PI = PI;
// module.exports.multiply = multiply;
// module.exports.cube = cube;


// Syntax 
const ExportedObj = {
    A: 580,
    B: function (message) {
        return `Your message is: ${message}`;
    }
    ,
    square: square
}

module.exports = ExportedObj;

//Syntax , directly on definition
module.exports.sub = message => message.toLoweCase();
module.exports.base = 10;

exports.PI = PI;
exports.multiply = multiply;

// Attention to assigning something to the keyword exports:
// exports = "jn;sndf;kn;fd" //ERROR