// Fetch the dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Game Schema
const GameSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  characters: [{
    type: Array
  }],
  platforms: [{
    type: Array,
    required: true
  }],
  added_on: {
    type: Date,
    default: Date.now
  }
});

module.exports = Game = mongoose.model('game', GameSchema);