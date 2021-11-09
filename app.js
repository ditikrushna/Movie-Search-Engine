/* Importing all required packagesfor the app. */
const express = require('express');
const bodyParser = require('body-parser');
const exphb = require('express-handlebars');
const method = require('method-override');
const dotenv = require('dotenv');
const redis = require('redis');
dotenv.config();

const app = express();



app.get('/', function (req, res) {
    res.end("Hello! I am a Node JS Server.");
});



app.listen(process.env.PORT, () => {
    console.log("Server Started at port: " + process.env.PORT);
});

