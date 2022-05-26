// import mongoose package

const mongoose = require('mongoose')

// To connect to mongoose
// mongoose.connect("uri:PortNumber/DBSName", { useNewUrlParser: true, useUnifedTopology: true})
// Connection to mongoose is runtime event so promise approach can be used to handle it

mongoose.connect('mongodb://localhost:27017/MoviesDB', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("SUCCESSFUL CONNECTION TO DATABASE");
}).catch(() => {
    console.log("connection to database failed");
});

// For more info, see the docs:
// https://mongoosejs.com/docs/connections.html

// To do operations with data with mongoose, models have to be defined for the data, (especially here, with the help of schema) .
// Models are js classes, they represent information in some collection

// operation event should usually be handled with asynchronous approach, as they usually return promises 

// Ex

const movieSchema = new mongoose.Schema({
    title: String, // implicitly defining datatype
    year: Number,
    score: Number,
    rating: String
}) // Instanciate a new mongoose schema object

// make the schema a model
// mongoose.model("modelName", schemaName)
const Movie = mongoose.model("Movie", movieSchema);

// From the created model, new objects can be created based on that model, but the object is not stored in the DB yet
// Ex:

const amadeus = new Movie({ title: "Amadeus", year: 1986, score: 9.2, rating: "R" })

// To store a single instance of the model in the DB, ObjName.save()
// ex: 
amadeus.save()

// But for many instances at a time, the operation returns a promise (or mongoose promises (like promises))
// In order to return real promises, .exec() function has to be executed on the operation's function 
// like find, findOne, insert, etc...

Movie.insertMany(
    [
        { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
        { title: "Alien", year: 1979, score: 8.1, rating: "R" },
        { title: "Stand By Me", year: 1986, score: 8.6, rating: "PG" },
        {title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13"},
    ]
).then( inserted => {
    console.log(inserted);
    console.log("Successful insertion...")
}).catch(err => {
    console.log(err);
})

// For more operation with mongoose, check the Docs,
// https://mongoosejs.com/docs/api/model.html

// Find with mongoose
Movie.find({ year: 1979 }).then(data => console.log(data));

Movie.findOne({}).then(data => console.log("First match:", data));

// Updating and deleting in mongoose
// Consult docs


// Mongoose schema validation