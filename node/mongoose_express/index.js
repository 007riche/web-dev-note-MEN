const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override');

// Personal modules' include
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION TO DATABASE SUCCESSFULL");
    }).catch(err => {
        console.log("CONNECTION TO DATABASE FAILED");
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', "ejs")
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.listen(5000, () => {
    console.log("APP Running at http://localhost:5000")
})

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    // res.send('All products gotten');
    res.render('products/index.ejs', { products })
    
});

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products/new', (req, res) => {
    res.render('products/newproduct.ejs', { categories});
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id/edit', async (req, res) => { 
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
});

app.put('/products/:id', async (req, res) => { 
    const { id } = req.params;
    console.log(req.body)
   const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true }).then();
    res.redirect(`/products/${product._id}`);
});

app.get('/products/:id', async (req, res) => { 
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/details.ejs', { product });
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
    console.log(`Deleted: ${deletedProduct}`);
})





