const express = require('express')
const app = express();
const path = require('path')

// Templating

// Some templating engines are Nunjucks, EJS (embedded JS), Pug, jade, handlebars
// these are also known as view engine

// to set a view engine for the express server:
// install the template engine, here ejs: npm i ejs

// For EJS, a dir "views" has to be created as this is the default name of the views' dir 
// ( and the server assume that this dir is in the dir where the server has been started from (with nodemon))
// So not appropriate, because default

// but the defaults views dir can be changed

//  on the app, use the set function to set the view engine
// A template view needs to end in extension ".ejs"

app.set('view engine', "ejs") // Sets the view engine to ejs

app.set('views', path.join(__dirname, '/views')) // SETS EXPLICITLY THE VIEWS DIRECTORY TO "/views"


app.get('/', (req, res) => {
    // Allows to render a template
    res.render('home.ejs')
})

app.get('/synt', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('eJsSyntax.ejs', { num: num })
})

app.get('/data', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    console.log(num)
    res.render('passDataEjs', { data: num }) // the exact name of passed var has to be used in the template 
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
    console.log('http://localhost:3000')
})


/// Static assets
// This allows to share files like css, images, videos usually grouped in directory
// Just like views
// many assets dir can be shared independently
// app.use(express.static('public')) // But just as for views there is a problem with the path of the dir,
// so just as views, we should use "absolute path"
// Better
app.use(express.static(path.join(__dirname, 'public')))

app.get('/asset', (req, res) => {
    res.render('assettest')
})