// Fetch dependencies
const express = require('express');
const router = express.Router();

// Fetch the model
const Combo = require('../db/models/Combo');

/**
 * @route GET /api/combos
 * @desc Return all combos
 * @access Public
 */

router.get('/', (req, res) => {
  Combo.find()
    .sort({ date: -1 })
    .then(combos => res.json(combos));
});

/**
 * @route GET /api/combos/:id
 * @desc Return a combo
 * @access Public
 */

router.get('/:id', (req, res) => {
  Combo.findById(req.params.id)
    .then(combo => res.json(combo))
    .catch(err => res.json(err));
});

/**
 * @route POST /api/combos
 * @desc Save a new combos
 * @access Public
 */

router.post('/', (req, res) => {
  const newCombo = new Combo({
    title: req.body.title,
    character: req.body.character,
    combo: req.body.combo,
    game: req.body.game
  });
  newCombo.save()
    .then(combo => res.json(combo))
    .catch(err => res.json(err));
});

/**
 * @route PUT /api/combos/:id
 * @desc Modify a combo
 * @access Public
 */
router.put('/:id', (req, res) => {
  const updatedCombo = {
    title: req.body.title,
    character: req.body.character,
    combo: req.body.combo,
    game: req.body.game
  };
  Combo.findOneAndUpdate({ _id: req.params.id }, updatedCombo, { new: true })
    .then(combo => res.json({ "status": true, "updatedCombo": combo }))
    .catch(err => res.json({ "status": false, "errors": err }))
});

/**
 * @route DELETE /api/combos/:id
 * @desc Delete a combo
 * @access Public
 */

router.delete('/:id', (req, res) => {
  Combo.findByIdAndRemove(req.params.id)
    .then(() => res.json({ "deleted": true }))
    .catch(err => res.json({ "deleted": false, "errors": err }));
});

module.exports = router;