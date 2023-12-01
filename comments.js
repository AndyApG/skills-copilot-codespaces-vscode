// Create web server application


// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Comment = require('./models/comment');
const app = express();
const router = express.Router();
const port = 4000;


// Configure middleware
app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB database
mongoose.connect('mongodb://    ', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});




