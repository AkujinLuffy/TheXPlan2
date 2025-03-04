const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    totalRounds: { type: Number, default: 0 },
    totalWeightLifted: { type: Number, default: 0 },
    workoutsCompleted: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Progress', progressSchema);
