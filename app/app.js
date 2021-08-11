"use strict";

//Module
const express = require('express');
const app = express();


// Routing
const home = require("./src/routes/home");


// setting app
app.set("views", "./src/views");
app.set("view engine", "ejs");

//use : Middleware를 등록해주는 메소드
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", home); 
module.exports = app;

