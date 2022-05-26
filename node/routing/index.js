// Routing

// const { text } = require('express')
const express = require('express')
const path = require('path')

// UUID package
const { v4: uuid } = require('uuid');
uuid();
const methodOverride = require('method-override')

// NOTE: ejs is not included in express and is requiered implicitly,
// so, $npm i ejs

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(3000, () => {
    console.log("http://localhost:3000")
})


app.get("/get", (req, res) => {
    res.send("GET request successful, this is the response")
})


// Post routes in express

app.use(express.urlencoded({ extended: true })) // on every request, run to parse the encoded url form data request
// other format encoded data would fail to be parsed,
// so, each format needs its specific parser
// Ex: for json
app.use(express.json()) // parse data as json object

app.use(methodOverride('_method'))

app.post("/post", (req, res) => {
    console.log(req.body)  // console log the body of the data of the request
    const { first, second } = req.body; // destructuration to extract the data
    res.send(`posted data are: ${first}, ${second} `)
})


// REST: representational State Transfer (API base on that principle are known to be RESTful)
// useful to expose some databse's data, easen CRUD operations
// Generally to expose some resources

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'plz delete your account, todd'
    },
    {
        id: uuid(),
        username: 'onlysaywoof',
        comment: ' woof woof woof'
    },
    // {
    //     username: '',
    //     comment: ''
    // },
    // {
    //     username: '',
    //     comment: ''
    // }
]

// example of Rest implementation using array as a resource to expose

// Specifications:

// username
// text

// Get / allcomments

// GET: /comments - list all comments
// POST: /comments - Create a new comment
// GET /comments /: id - Get one comment(using ID)
// PATCH /comments /: id - Update one comment
// DELETE /comments/:id - id Destroy one comment

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments: comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

// following the pattern, we will use post on the same /comment route
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    // console.log(req.body)
    console.log(`${username} - ${comment}`)
    comments.push({ username, comment, id: uuid() });
    // res.send('Posted')
    res.redirect("/comments") // redirect to the "/comments", it is a GET by default
})
// Express redirects

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(com => com.id === id)
    res.render('comments/show', { comment })
})

// restful Update ( patch )
app.patch('/comments/:id', (req, res) => {
    // a request also has a body
    const { id } = req.params;
    // console.log(req.body.comment);
    const newComment = req.body.comment;
    const commentToUpdate = comments.find(com => com.id === id);
    commentToUpdate.comment = newComment;
    // res.send('Patched')
    res.redirect('/comments')
})

// Express method override
// used to fake some get or post request for patch, put, etc request
// html form do not have other actions than post and get like delete, put, patch
// this is where method override comes to be handy
// For that we need a package called method-orride
// $npm i method=override
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(com => com.id === id);
    res.render('comments/edit', { comment })
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})