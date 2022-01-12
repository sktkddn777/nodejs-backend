const crypto = require("crypto");

const hashstring = crypto.createHash('sha512').update("password").digest("base64");
console.log(hashstring);