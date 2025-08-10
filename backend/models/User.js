const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  displayName: String,
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('User', UserSchema);