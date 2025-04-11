const express = require('express');
const { register, login, getCurrentUser } = require('../controllers/auth');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   POST api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', register);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', login);

// @route   GET api/auth/me
// @desc    Get current user's profile
// @access  Private
router.get('/me', auth, getCurrentUser);

module.exports = router; 