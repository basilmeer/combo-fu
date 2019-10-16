const express = require('express');
const router = express.Router();

const Game = require('../db/models/Game');

/**
* @route GET /api/games
* @desc Return all games
* @access Public
*/
router.get('/', (req, res) => {
  Game.find()
  .sort({ date: -1 })
  .then(games => res.json(games));
});

/**
* @route GET /api/games/:id
* @desc Return a specific game
* @access Public
*/
router.get('/:id', (req, res) => {
  Game.findById(req.params.id)
    .then(combo => res.json(combo))
    .catch(err => res.json(err));
})

/**
* @route POST /api/games
* @desc Save a new game
* @access Public
*/
router.post('/', (req, res) => {
  const newGame = new Game({
    title: req.body.title,
    platforms: req.body.platforms,
    characters: req.body.characters
  });
  newGame.save()
  .then(game => res.json(game))
  .catch(err => res.json(err));
});

/**
* @route PUT /api/games/:id
* @desc Update a saved game
* @access Public
*/
router.post('/:id', (req, res) => {
  const updatedGame = new Game({
    title: req.body.title,
    platforms: req.body.platforms,
    characters: req.body.characters
  });
  Game.findOneAndUpdate({ _id: req.params.id }, updatedCombo, { new: true })
  .then(game => res.json({ "status": true, "updatedGame": game }))
  .catch(err => res.json({ "status": false, "errors": err }));
});

module.exports = router;