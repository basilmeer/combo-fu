const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  health: {
    type: String
  },
  role: {
    type: String
  },
  game: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  movelist: [{
    type: [Schema.Types.ObjectId],
    ref: 'Movelist'
  }],
  posted_by: {
    type: String,
    default: "Guest"
  },
  posted_on: {
    type: Date,
    default: Date.now
  }
});

module.exports = Character = mongoose.model('character', CharacterSchema);