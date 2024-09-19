const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');

// POST register a new user with validation
router.post(
    '/register',
    [
        body('username').notEmpty().withMessage('Username is required'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ],
    async (req, res) => {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Hash the password
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            // Create new user
            const user = new User({
                username: req.body.username,
                password: hashedPassword,
            });

            // Save user to database
            const newUser = await user.save();
            res.status(201).json({ message: 'User registered successfully', newUser });
        } catch (err) {
            res.status(500).json({ message: "Error registering user: " + err.message });
        }
    }
);

// POST login user with validation
router.post(
    '/login',
    [
        body('username').notEmpty().withMessage('Username is required'),
        body('password').notEmpty().withMessage('Password is required')
    ],
    async (req, res) => {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Find user by username
            const user = await User.findOne({ username: req.body.username });
            if (!user) return res.status(400).json({ message: 'User not found' });

            // Compare passwords
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

            // Generate JWT token
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            // Send token in Authorization header
            res.header('Authorization', `Bearer ${token}`).json({ message: 'Login successful', token });
        } catch (err) {
            res.status(500).json({ message: "Error logging in: " + err.message });
        }
    }
);

module.exports = router;
