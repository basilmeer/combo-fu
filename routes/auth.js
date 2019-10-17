const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../db/models/User');

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;

  return jwt.sign({ username, email }, secret, { expiresIn });
}

/**
 * @route POST /login
 * @desc Save a new user
 * @access Public
 */
router.post('/login', async (req, res) => {
  let { email, password } = req.body;
  
  const user = await User.findOne({ email });

  if (!user) res.json('This user does not exist.');

  const isValidPassword = await bcrypt.compare(password, user.password);

  if(!isValidPassword) res.status(403).json('Invalid password');

  res.json({ token: createToken(user, process.env.SECRET, '1hr') });
})

router.post('/register', async (req, res) => {
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
    .then(user => res.json({ token: createToken(newUser, process.env.SECRET, "1hr"), user }))
    .catch(err => res.json(err));
});

module.exports = router;