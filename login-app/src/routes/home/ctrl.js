"use strict";

// GET
const output = {
  index: (req, res) => {
    res.send('Hello World!!!');
  },

  login: (req, res) => {
    res.send("Login page!!!!");
  }
}

// POST
const process = {

}


module.exports = {
  output,
  process
}