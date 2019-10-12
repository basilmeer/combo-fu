const express = require('express');
const router = express.Router();

const Platform = require('../db/models/Platform');

/**
 * @route GET /api/platforms
 * @desc Fetch all the platforms
 * @access Public
*/
router.get('/', (req, res) => {
  Platform.find()
    .sort({ date: -1 })
    .then(platforms => res.json(platforms))
    .catch(err => res.json(err));
});

/**
 * @route POST /api/platforms
 * @desc Add a new platform
 * @access Public
*/
router.post('/', (req, res) => {
  const newPlatform = new Platform({
    title: req.body.title
  });
  newPlatform.save()
    .then(platform => res.json(platform))
    .catch(err => res.json(err));
});

module.exports = router;