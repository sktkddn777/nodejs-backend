"use strict";

const value = require("./var");
// value는 module exports한 객체


function checkNum(number) {
  if (number % 2) {
    return value.odd;
  } else {
    return value.even;
  }
}

module.exports = checkNum;