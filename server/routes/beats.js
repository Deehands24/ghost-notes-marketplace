const express = require('express');
const { 
  getAllBeats, 
  getBeatById, 
  createBeat, 
  updateBeat, 
  deleteBeat,
  purchaseBeat
} = require('../controllers/beats');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET api/beats
// @desc    Get all beats
// @access  Public
router.get('/', getAllBeats);

// @route   GET api/beats/:id
// @desc    Get beat by ID
// @access  Public
router.get('/:id', getBeatById);

// @route   POST api/beats
// @desc    Create a new beat
// @access  Private
router.post('/', auth, createBeat);

// @route   PUT api/beats/:id
// @desc    Update a beat
// @access  Private
router.put('/:id', auth, updateBeat);

// @route   DELETE api/beats/:id
// @desc    Delete a beat
// @access  Private
router.delete('/:id', auth, deleteBeat);

// @route   POST api/beats/:id/purchase
// @desc    Purchase a beat
// @access  Private
router.post('/:id/purchase', auth, purchaseBeat);

module.exports = router; 