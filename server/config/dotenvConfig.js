require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGOAUTH: process.env.MONGOAUTH,
  SESSION_SECRET: process.env.SESSION_SECRET,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY
};
