// Fetch the dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema
const ComboSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  character: [{
    type: [Schema.Types.ObjectId],
    ref: 'character'
  }],
  difficulty: {
    type: String,
    required: true
  },
  combo: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  damage: {
    type: String
  },
  posted_by: {
    type: String,
    default: "Guest"
  },
  posted_on: {
    type: Date,
    default: Date.now
  }
});

module.exports = Combo = mongoose.model('combo', ComboSchema);