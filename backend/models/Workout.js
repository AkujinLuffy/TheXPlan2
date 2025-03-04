const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    boxing: {
      combos: [{ type: String }],
      rounds: { type: Number, default: 0 },
      roundDuration: { type: Number, default: 180 }, // 3 minutes per round
    },
    weightTraining: [
      {
        exercise: { type: String, required: true },
        sets: [{ reps: Number, weight: Number }],
      },
    ],
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);
