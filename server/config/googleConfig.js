const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = require('./dotenvConfig');
module.exports = {
    googleClientID: GOOGLE_CLIENT_ID,
    googleClientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'https://leagalai.netlify.app/auth/google/callback'
  };
  