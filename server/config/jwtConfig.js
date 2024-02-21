const { SESSION_SECRET } = require('./dotenvConfig');
module.exports = {
    secretKey: SESSION_SECRET, 
    expiresIn: '1d', 
};
