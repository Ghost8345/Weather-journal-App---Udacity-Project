// Setup empty JS object array to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express")

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080;
const server = app.listen(port, () => {
    console.log(`Running on localhost: ${port}`);
});

app.get("/all", (req, res) => {
    res.send(projectData);
});

app.post("/generate", (req, res) => {
    console.log(req.body);
    projectData = req.body;
    console.log(projectData);
    res.status(200).send({
        success: true,
        data: projectData
    });
})