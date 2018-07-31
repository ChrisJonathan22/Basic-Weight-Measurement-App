// Calling Express into the project
const express = require('express');

// Calling bodyParser into the project
const bodyParser = require('body-parser');

// Calling my database from database.js
const { db } = require('./database.js');

// Calling the collection/model Weights from database.js
const { Weights } = require('./database.js');

// Handling connection errors
db.on('error', console.error.bind(console, 'connection error:'));

// Once connected log the message to the console
db.once('open', () => {
    console.log('We are connected to the database!!!');
    
});




// Creating a port and setting it to 3000
const port = 3000;

// Creating an instance of Express = the application
const app = express();

// Tell the app to use bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Basic Home page routing
app.get('/home', (req,res) => {
    // Respond with some json
    res.json({message: "Welcome to the homepage."});
    console.log("Home works.");
    
});


// Find the document with the id below.
app.get('/user', (req, res) => {
    Weights.findById("5b58cec31ace28d8d59834af", (err, doc) => {
        if(err) err;

        else {
            res.json({user: doc});
            console.log("Document successfully found.");
        }
    });
});


// Find the document with the id below and return the user's weight measurements.
app.get('/userWeight', (req,res) => {
    Weights.findById("5b58cec31ace28d8d59834af", (err, doc) => {
        if(err) err;
    
        else {
            res.json({userWeight: doc.weight});
            console.log("User weight measurements successfully found.");
        }
    });
});

// Update the document which matches the id below and push the value below into the weight array
app.post('/updateWeight', (req,res) => {
    
    Weights.update({ _id: "5b58cec31ace28d8d59834af" },{ $push:  { weight: req.body } }, {}, (err, task) => {
    if(err) err;

    else {
        res.json({ updateStatus: true });
        console.log("Document successfully updated.", req.body);
        
    }
});
});



// Set the app to listen or to be active on port 3000
app.listen(port, console.log(`The server is live on port: ${port}`)
);