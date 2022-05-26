const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/productDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log("SUCCESSFUL CONNECTION TO DATABASE");
}).catch(() => {
    console.log("connection to database failed");
});


// Schema validation

const productSchema = new mongoose.Schema({
    name: {
        type: String, // defining Datatype of the field, implicit validation
        required: true, // set it a requiered field, by Default, it is false, this is an option defined on the field
        maxlength: 50, // Max length Constraint, on string
    },
    price: {
        type: Number, // Will try to parse the data into a Number
        min: 0, // Minimum constraint on Number
    },
    onSale: {
        type: Boolean,
        default: false, // set the field by default to false
    },
    categories: [String], // Constraint to set values of the array only to strings

    // Object type or document are also allowed
    //Ex:
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        },
    }

}) /// Any additional field used but not defined is simply dropped


// Custom validation can also be defined to follow up our own validation,
// This is done through functions
// CONSTRAINTS CAN ALSO BE DEFINED


const Product = new mongoose.model("Product", productSchema);

const bike = new Product({ price: 55 }); // ERROR, field required
bike.save().then(data => {
    console.log("Successful save");
    console.log("Data: ", data);
}).catch(
    err => {
        console.log("Error");
        console.log(err.errors); // To get infos about the error
        console.log("err.errors.name: ", err.errors.name);
        console.log("err.errors.name.properties: ", err.errors.name.properties);
    }
)


// validation on update
// validation process when updating a record does not work by default
// It has to be specified in the options of the function:  { runValidators: true }

// Custom validation errors

// custom validation errors can be set in array set as the value of a constrain
// example on price:


const prodSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        maxlength: 50, 
    },
    price: {
        type: Number, 
        min: [0, "Minimum price is 0"], // the string is the custom error message sent back when the validation fails 
    },
    onSale: {
        type: Boolean,
        default: false, 
    },
    categories: [String], 
    size: {
        type: String,
        enum: ['S', 'M', 'L'], // only accepted options
    }, //
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        },
    }

})

const Prod = new mongoose.model("Prod", prodSchema);

// Docs: https://mongoosejs.com/docs/guide.html


// Model instance methods
// there are default methods on Model, but custom methods can also be defined to act on the instances of the model
// Custom methods are Defined on the schema of the model, NOT ON THE GENERATED MODEL,
// they can be asynchronous functions, use promises

// Attention when using arrow function carefully, as A => function is defined on object, and if object not totally instanciated 
// can resovle to the ancestral "Windows" object

// To define custom model instance,
// schemaName.methods.customMethodName = function() {}
// Ex:
prodSchema.methods.myFunct = function () {
    console.log("Custom function executed")
}

prodSchema.method.getPrice = async (name) => {
    const foundProd = await Product.findOne({ name: name }); // Note that here we used the Model name to access the collection
    return foundProd.price;
}
// Arrow function can be used, object will definitely resovle

prodSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save() // save the change to the DB (here it is just the update) 
}


// Static methods
// Act upon the generated Model itself, not on the instances of the model
// Here, the keyword "this" refer to the model itself, not to an instance of the model
// to define a custom static method of a model, which in practice represent the collection
// modelName.statics.methodName = function() {}
// Ex: 
prodSchema.statics.fireSale = async function () {
    return await this.updateMany({}, { onSale: true, })
}

Prod.fireSale().then(res => {
    console.log(res);
})


// Mongoose virtual
// Docs: https://mongoosejs.com/docs/api/virtualtype.html
// document properties that can be set and get but are not persistant in MongoDB
// Like composite attribute in sql, but here defined at runtime and is not actually stored in database
// EX:

prodSchema.virtual('Price_name').get(function () {
    return `${this.price}_${this.name}`;
}) // using getter approach, just to get data

// the setter approach can be used to change the underlying atomic attributes values
// via the defined virtual property or attribute



// Mongoose Middleware
// functions which are passed control control during execution of asynchronous functions
// basically used to execute before or after an operation, usually involving change in database
// they are defined on the schema of the model, 
// but inside them, individual instance of object can be accessed by the keyword "this"
// the define a pre-execution action, we use the .pre method
// And for the post action, the .post method on the schema
// the syntax is the same for both
// Syntax:
// schemaName.pre("modelFunctionName", async callback)
// Ex:
prodSchema.pre('save', async function () {
    console.log("SAVE starting")
})

prodSchema.post('save', async function () {
    console.log("SAVE ending")
})
// Probably useful for transaction operations with the DB

// More in docs:
// https://mongoosejs.com/docs/middleware.html