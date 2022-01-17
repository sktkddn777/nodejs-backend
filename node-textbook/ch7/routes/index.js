const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await db.User.findAll();
    res.render('sequelize', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;