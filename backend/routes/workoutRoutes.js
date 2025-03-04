const express = require('express');
const { createWorkout, getWorkouts } = require('../controllers/workoutController');

const router = express.Router();

router.post('/', createWorkout);
router.get('/:userId', getWorkouts);

module.exports = router;
