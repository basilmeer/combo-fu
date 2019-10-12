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
    platforms: req.body.platforms
  });
  newGame.save()
  .then(game => res.json(game))
  .catch(err => res.json(err));
});

module.exports = router;