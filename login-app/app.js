"use strict";

// Module
const express = require('express');
const app = express();


// Routes
const home = require('./src/routes/home');
app.use("/", home);


module.exports = app;