const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { hashPassword } = require('../utils/passwordUtils');
const User = require("../models/user");

exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            throw { status: 400, message: 'Username and password are required' };
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            throw { status: 400, message: 'Username already exists' };
        }

        const hashedPassword = await hashPassword(password);

        const user = new User({ username, password: hashedPassword, history: [] });
        await user.save();
        const jwtToken = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '3d' });

        res.status(200).json({ message: 'User registered successfully.', jwtToken, user });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw { status: 401, message: 'Authentication failed' };
        }
        const jwtToken = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '3d' });

        res.status(200).json({ message: 'Login successful', jwtToken, user});
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Internal server error' });
    }
};
