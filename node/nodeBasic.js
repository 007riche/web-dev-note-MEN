// To run a file script with node
// in terminal:

// $node fileName

// process & argv
// The process object provides information about, and control over, the current Node.js process
// argv is an array containing arguments passed to the node process (file here), plus the node program and the filename executed 
// Ex:
const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Arg: ${arg}`);
}
// console.log(args)
// console.log(process.argv)

// Basic module importation in node
// Ex: const varName = require('module name')

// Example in the project boilerplate structure

// some processes have their synchronous and asynchronous version of methods