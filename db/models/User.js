const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  discord: {
    type: String
  },
  platforms: [{
    type: Array
  }],
  posted_combos: [{
    type: [Schema.Types.ObjectId],
    ref: 'Combo'
  }],
  saved_combos: [{
    type: [Schema.Types.ObjectId],
    ref: 'Combo'
  }],
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);