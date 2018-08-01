// Calling Express into the project
const express = require('express');

// Calling bodyParser into the project
const bodyParser = require('body-parser');

// Calling Cors into the project
const cors = require('cors');

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

app.use(cors());

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
        // If there is an error, send error to user
        if(err) res.json({errorMessage: err});

        else {
            // If successful send user requested data
            res.json({user: doc});
            console.log("Document successfully found.");
        }
    });
});


// Find the document with the id below and return the user's weight measurements.
app.get('/userWeight', (req,res) => {
    Weights.findById("5b58cec31ace28d8d59834af", (err, doc) => {
        // If there is an error, send error to user
        if(err) res.json({errorMessage: err});
    
        else {
            // If successful send user requested data
            res.json({userWeight: doc.weight});
            // Just some feedback to let me know that it works in some capacity
            console.log("User weight measurements successfully found.");
        }
    });
});

// Update the document which matches the id below and push the value within the date & time below into the weight array
app.post('/updateWeight', (req,res) => {
    
    Weights.update({ _id: "5b58cec31ace28d8d59834af" },{ $push:   {weight: `${req.body.weight} ${req.body.info}`}  }, {}, (err, task) => {
    if(err) res.json({errorMessage : err});

    else {
        // If successful send user the updateStatus
        res.json({ updateStatus: true });
        console.log("Document successfully updated.", req.body.weight);
        
    }
});
});



// Set the app to listen or to be active on port 3000
app.listen(port, console.log(`The server is live on port: ${port}`)
);