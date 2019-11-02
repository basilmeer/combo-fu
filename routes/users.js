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
/* TODO:
    -- Fix the messy async implementation
*/
router.post('/', async (req, res) => {
  let { username, 
    name, 
    email, 
    password, 
    discord, 
    platforms, 
    posted_combos, 
    saved_combos } = req.body;

  const user = await User.findOne({ username });
  
  if (user) throw new Error('User already exists!');
  
  const newUser = new User({
    username,
    name,
    email,
    password,
    discord,
    platforms,
    posted_combos,
    saved_combos
  });
  await newUser.save()
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

module.exports = router;