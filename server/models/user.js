const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String,
  username: String,
  email: String, 
  password: { type: String, select: false }, 
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
