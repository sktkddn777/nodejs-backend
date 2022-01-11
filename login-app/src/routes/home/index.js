"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require('./ctrl');

router.get('/', ctrl.output.index);

router.get('/login', ctrl.output.login);

module.exports = router;