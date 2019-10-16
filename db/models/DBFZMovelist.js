const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DBFZMovelistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  input: {
    type: String,
    required: true
  },
  damage: {
    type: Number
  },
  ki: {
    type: Number
  },
  framedata: [{
    type: [Schema.Types.ObjectId],
    ref: 'Framedata'
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

module.exports = DBFZMovelist = mongoose.model('dbfzmovelist', DBFZMovelistSchema);