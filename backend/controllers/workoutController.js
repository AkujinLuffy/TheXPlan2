const Workout = require('../models/Workout');

// Create a new workout
const createWorkout = async (req, res) => {
  const { userId, date, boxing, weightTraining } = req.body;

  try {
    const workout = await Workout.create({ userId, date, boxing, weightTraining });
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all workouts for a user
const getWorkouts = async (req, res) => {
  const { userId } = req.params;

  try {
    const workouts = await Workout.find({ userId });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createWorkout, getWorkouts };