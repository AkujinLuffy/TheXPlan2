const express = require('express');
const {
  createProgress,
  getProgress,
  updateProgress,
  deleteProgress,
} = require('../controllers/progressController');

const router = express.Router();

// Create a new progress record
router.post('/', createProgress);

// Get all progress records for a user
router.get('/:userId', getProgress);

// Update a progress record
router.put('/:id', updateProgress);

// Delete a progress record
router.delete('/:id', deleteProgress);

module.exports = router;
