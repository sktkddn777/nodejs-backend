const express = require('express');
const db = require('../models');
const { route } = require('.');

const router = express.Router();

router.route('/')
.get(async (req, res, next) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch(err) {
    console.error(err);
    next(err);
  }
})
.post(async (req, res, next) => {
  try {
    const user = await db.User.create({
      name: req.body.name,
      age: req.body.age,
      married: req.body.married,
    });
    console.log(user);
    res.status(201).json(user);
  } catch(err) {
    console.error(err);
    next(err);
  }
});

router.get('/:id/comments', async (req, res, next) => {
  try {
    const comments = await db.Comment.findAll({
      include: {
        model: db.User,
        where: {id: req.params.id},
      },
    });
    console.log(comments);
    res.json(comments);
  } catch(err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;