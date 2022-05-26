// importation of test.js module locally
const test = require('./test') // No need to add the extension

// console.log(test)

// Require a directory locally
const testproject = require('./TestProject')
console.log("Dir requirement: ", testproject)

const boiler = require('./boilerplateproject')
const basic = require('./nodeBasic')

const grouped = [boiler, basic]

module.exports = grouped;

// NPM: Node Package Manager
// cli

// Install a package
// $npm install packageName || $npm i packageName
// In the rigth Dir
// to install a package globally, use "-g" flag

// to use a package installed globally, we need to link it to the project
// Inside the project, run $npm link packageName
// OR
//  use package.json, config file of the package

// To create a package, "cd" into the project and run
// $npm init, this asks basic info for the pack being created

// Install dependencies of project
// $npm install
// it will use the package.json file