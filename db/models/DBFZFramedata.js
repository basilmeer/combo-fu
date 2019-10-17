const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DBFZFramedataSchema = new Schema({
  attribute: {
    type: String,
    default: "-"
  },
  guard: {
    type: String,
    default: "-"
  },
  smash: {
    type: String,
    default: "-"
  },
  startup: {
    type: String,
    default: "-"
  },
  active: {
    type: String,
    default: "-"
  },
  recovery: {
    type: String,
    default: "-"
  },
  frame_advantage: {
    type: String,
    default: "-"
  },
  level: {
    type: String,
    default: "-"
  },
  blockstun: {
    type: String,
    default: "-"
  },
  hitstun: {
    type: String,
    default: "-"
  },
  untech: {
    type: String,
    default: "-"
  },
  invulnerability: {
    type: String,
    default: "-"
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

module.exports = DBFZFramedata = mongoose.model('dbfzframedata', DBFZFramedataSchema);