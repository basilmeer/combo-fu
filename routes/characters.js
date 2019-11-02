// Fetch dependencies
const express = require('express');
const router = express.Router();

// Fetch the model
const Character = require('../db/models/Character');

/**
 * @route GET /api/characters
 * @desc Return all characters
 * @access Public
 */

router.get('/', (req, res) => {
  Character.find()
    .sort({ date: -1 })
    .then(characters => res.json(characters));
});

/**
 * @route GET /api/characters/:id
 * @desc Return a character
 * @access Public
 */

router.get('/:id', (req, res) => {
  Character.findById(req.params.id)
    .then(character => res.json(character))
    .catch(err => res.json(err));
});

/**
 * @route POST /api/characters
 * @desc Save a new character
 * @access Public
 */

router.post('/', (req, res) => {
  const newCharacter = new Character({
    name: req.body.name,
    health: req.body.health,
    role: req.body.role,
    game: req.body.game,
    image: req.body.image,
    movelist: req.body.movelist,
    posted_by: req.body.posted_by
  });
  newCharacter.save()
    .then(character => res.json(character))
    .catch(err => res.json(err));
});

/**
 * @route PUT /api/characters/:id
 * @desc Modify a character
 * @access Public
 */

router.put('/:id', (req, res) => {
  const updatedCharacter = {
    name: req.body.name,
    health: req.body.health,
    role: req.body.role,
    game: req.body.game,
    image: req.body.image,
    movelist: req.body.movelist,
    posted_by: req.body.posted_by
  };
  updatedCharacter.findOneAndUpdate({ _id: req.params.id }, updatedCharacter, { new: true })
    .then(character => res.json({ "status": true, "updatedCharacter": character }))
    .catch(err => res.json({ "status": false, "errors": err }))
});

/**
 * @route DELETE /api/characters/:id
 * @desc Delete a character
 * @access Public
 */

router.delete('/:id', (req, res) => {
  Character.findByIdAndRemove(req.params.id)
    .then(() => res.json({ "deleted": true }))
    .catch(err => res.json({ "deleted": false, "errors": err }));
});

module.exports = router;