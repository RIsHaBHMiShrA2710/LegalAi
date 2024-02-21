const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    console.log(user);
    next();
  });
};

module.exports = isAuthenticated;