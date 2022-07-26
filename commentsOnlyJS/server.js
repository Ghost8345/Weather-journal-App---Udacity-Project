// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes
const express = require("express")

// Start up an instance of app
const app = express();
/* Dependencies */
const cors = require("cors")
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
  