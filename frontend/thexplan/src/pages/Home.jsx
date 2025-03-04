import { useState } from 'react';
import CalendarView from '../components/CalendarView';
import WorkoutPlan from '../components/WorkoutPlan';

const Home = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const workouts = [
    {
      date: '2025-03-03',
      boxing: {
        combos: ['Jab-Cross', 'Jab-Cross-Hook'],
        rounds: 6,
      },
      weightTraining: [
        {
          exercise: 'Bench Press',
          sets: [{ reps: 10, weight: 50 }],
        },
      ],
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="h2 mb-4">Workout Tracker</h1>
      <div className="row">
        <div className="col-md-6">
          <CalendarView workouts={workouts} onSelectWorkout={setSelectedWorkout} />
        </div>
        <div className="col-md-6">
          {selectedWorkout && <WorkoutPlan workout={selectedWorkout} />}
        </div>
      </div>
    </div>
  );
};

export default Home;