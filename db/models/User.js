const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
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

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  };

  bcrypt.genSalt(10, (err, salt) => {
    // handle errors
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      
      next();
    })
  })
})

module.exports = User = mongoose.model('user', UserSchema);