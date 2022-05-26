// This script is just example of node usage for general purpose programmong
// Here use to automatically create a boiler plate web project structure 

const fs = require('fs')
// import fs from 'fs' // Es import module syntax
// console.log(fs)

const folderName = process.argv[2] || 'BoilerPlateProject' // Extract the first argument passed to the script

// fs.mkdir('./apple', { recursive: true }, (err) => {
//     if (err) throw err;
// })

// console.log(typeof folderName)

fs.mkdirSync(folderName);
fs.writeFileSync('test.js', "")
// fs, fs.writeFileSync(folderName)
fs.writeFileSync(`${folderName}/index.html`, "");
fs.writeFileSync(`${folderName}/index.js`, "");
fs.writeFileSync(`${folderName}/index.css`, "");