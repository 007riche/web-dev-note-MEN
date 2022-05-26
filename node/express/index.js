// Server auto-restart

// with nodemon package
// $npm i nodemon -g (to access the command on your local system) or
// $npm install --save-dev nodemon # or using yarn: yarn add nodemon -D


const { request, response } = require('express')
const express = require('express')

// Instanciate Express server
const app = express()

// console.dir(app)

// Listen on specified port
app.listen(3500, () => {
    console.log('PORT 3500 Running ... on  http://localhost:3500')
})


// Executed on each new request
// this also wil act on all the requests even on known routes as well
// app.use((request, response) => {
//     console.log("Executed on a new request");
//     // console.log(request)
//     response.send() // To send a response
//     // response can be anything json, html etc...
//     // Only one response can be sent to a request
// })

// Express routning basic
// app.get("/route", /* CollBack func*/( request, response) => { })
// Listen to the incoming get route "/route" request in order to respond in the callback
// Ex:

app.get('/', (request, response) => {
    response.send("Response to the resquest on root route ")
})

app.get('/route1', (request, response) => {
    response.send("Response to the resquest on route 1")
})

app.get('/route2', (request, response) => {
    response.send("Response to the resquest on route 2")
})

// Post Resquest
app.post('/', (request, response) => {
    console.log("POST REquest Response")
})

// Route pattern matching and parameters
// "/r/:subroute" // will work on all the request under the route "/r", params attribute can be used to extract the
// subroute.
// NOTE the ":" preceeding the subroute

app.get('/b/:subroute', (req, res) => {
    // extracting the request's parameters
    const { subroute } = req.params;
    res.send(`<h2>${subroute} subroute request successfully received! <h2>`)
    console.log(subroute)
})

// we can have any pattern 'test/:subL1/:subL2 .... /:subLn'


// Query Strings
// can be extracted in the query property of the request
app.get('/serch', (req, resp) => {
    console.log(req.query);
    const quer = req.query.toString()
    resp.send(`<h1>Result for ${quer} <h1>`)
})

// TO catch all unknown route requests, we use "*" route and at the end of
// the file in order not to intercept any known incoming request
app.get('*', (request, respond) => { })

