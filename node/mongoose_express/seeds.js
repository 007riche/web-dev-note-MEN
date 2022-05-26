const Product = require('./models/product');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION TO DATABASE SUCCESSFULL");
    }).catch(err => {
        console.log("CONNECTION TO DATABASE FAILED");
        console.log(err);
    })

const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
});

p.save().then(p => {
    console.log(p);
}).catch(e => {
    console.log(e);
});

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon'
        ,
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit',
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
];

Product.insertMany(seedProducts).then(res => {
    console.log(res);
}).catch(er => {
    console.log(er);
})