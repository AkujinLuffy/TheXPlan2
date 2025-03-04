const Progress = require('../models/Progress');

// Create a new progress record
const createProgress = async (req, res) => {
  const { userId, date, totalRounds, totalWeightLifted, workoutsCompleted } = req.body;

  try {
    const progress = await Progress.create({
      userId,
      date,
      totalRounds,
      totalWeightLifted,
      workoutsCompleted,
    });
    res.status(201).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all progress records for a user
const getProgress = async (req, res) => {
  const { userId } = req.params;

  try {
    const progress = await Progress.find({ userId });
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a progress record
const updateProgress = async (req, res) => {
  const { id } = req.params;
  const { totalRounds, totalWeightLifted, workoutsCompleted } = req.body;

  try {
    const updatedProgress = await Progress.findByIdAndUpdate(
      id,
      { totalRounds, totalWeightLifted, workoutsCompleted },
      { new: true }
    );
    res.status(200).json(updatedProgress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a progress record
const deleteProgress = async (req, res) => {
  const { id } = req.params;

  try {
    await Progress.findByIdAndDelete(id);
    res.status(200).json({ message: 'Progress record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProgress,
  getProgress,
  updateProgress,
  deleteProgress,
};
