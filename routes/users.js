const express = require('express');
const router = express.Router();

const User = require('../db/models/User');

/**
 * @route GET /api/users
 * @desc Get a list of all users
 * @access Public
 */
router.get('/', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

/**
 * @route GET /api/users/:id
 * @desc Get a specific user
 * @access Public
 */
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

/**
 * @route POST /api/users
 * @desc Save a new user
 * @access Public
 */
router.post('/', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  User.save()
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

module.exports = router;