// Calling Mongoose into the project or into this file
const mongoose = require('mongoose');

// Connecting to my mLab database
mongoose.connect('mongodb://chris:chris123@ds247101.mlab.com:47101/weight123', { useNewUrlParser: true });

// Creating a variable which is equal to the connection
let db = mongoose.connection;

module.exports.db = db;





// Add new document to collection
// Weigh.save((err, Weights) => {
//     if(err) return console.log(err);
//     console.log(Weights);
// });




// Create a Schema or db structure
let weighSchema = new mongoose.Schema({
    name: String,
    age: Number,
    weight: Array
});


// A model is the same as a collection
const Weights = mongoose.model('Weights', weighSchema);
module.exports.Weights = Weights;

// Create a document
const Weigh = new Weights({ name: 'Chris',age: 24, weight: ["78kg", "82kg", "80kg", "72kg"] });