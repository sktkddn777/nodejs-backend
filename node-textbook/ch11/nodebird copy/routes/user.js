const express = require('express');

const { isLoggedIn } = require('./middlewares');
const { User } = require('../models');
const { addFollowing } = require('../controllers/user');

const router = express.Router();

// user/3/follow
router.post('/:id/follow', isLoggedIn, addFollowing);

module.exports = router;