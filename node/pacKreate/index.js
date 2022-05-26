const colors = require('colors')
const figlet = require('figlet')

figlet("Welcome!", function (err, data) {
    if (err) {

    }
    console.log(data.rainbow)
})