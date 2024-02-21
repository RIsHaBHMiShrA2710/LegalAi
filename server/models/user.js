const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  jwtToken: String,
  history: [
    {
      title: String,
      content: String,
    }
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
