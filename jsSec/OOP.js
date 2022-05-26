// Prototype of object can be accessed by the "prototype" attribute
// String.prototype contains all the properties and methods of strings

// "__proto__" on instances of objects is a reference to the "prototype" attribute of the object

// Objects referred here are like internal classes or Objects of JS
// such as Array, String objects
// Ex: instance of Array: [1, 2, 5]
// Ex: instance of String: "jfkfksdj"

// __proto__ = Object.prototype

// OOPs concept
function hex(r, g, b) {
    return '#' + ((r << 16) + (g << 8) + b).toString(16);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}


// Factory Approach
function makeColor(r, g, b) {
    const color = { // creating an object
    };
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    color.hex = function () {
        return '#' + ((r << 16) + (g << 8) + b).toString(16);
    }
    return color;
}

// Construction function
// Attributes are defined inside the constructor
// Methods are defined on the "prototype" attribute but outside the constructor
// The name of the constructor function should start with a Capital Letter

// To instanciate new object from it, preceed the keyword "new" in front of it


// Constructor function approach

function MakeColor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

MakeColor.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}


MakeColor.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((r << 16) + (g << 8) + b).toString(16);
}

MakeColor.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r},${g},${b},${a})`;
}

// JavaScript CLASSES
// class ClassName {
//     constructor(/*list of arg/param */) {
//         // constructor body
//     }
// methods defined directly inside the class
// }
// has a constructor

// class approach
class MakeColorClass {
    // Constructor
    constructor(r, g, b, colorName) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = colorName;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`; // reference to another method inside the class during the class definition
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB}, ${a})`
    }
}


// Extends and super keywords
// extends is the keyword used to inherit a class form another class
// super can be used to access (in using it) the constructor of the "super class" from which the class derived
// usually in the constructor of the child class