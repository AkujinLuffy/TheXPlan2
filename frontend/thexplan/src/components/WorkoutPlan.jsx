import RoundTimer from './RoundTimer';
import SetTracker from './SetTracker';

const WorkoutPlan = ({ workout }) => {
  return (
    <div className="card p-4">
      <h2 className="card-title">Workout Plan</h2>
      <div className="mb-4">
        <h3 className="h5">Boxing</h3>
        <ul className="list-group">
          {workout.boxing.combos.map((combo, index) => (
            <li key={index} className="list-group-item">{combo}</li>
          ))}
        </ul>
        <RoundTimer rounds={workout.boxing.rounds} />
      </div>
      <div>
        <h3 className="h5">Weight Training</h3>
        {workout.weightTraining.map((exercise, index) => (
          <SetTracker key={index} exercise={exercise.exercise} sets={exercise.sets} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlan;