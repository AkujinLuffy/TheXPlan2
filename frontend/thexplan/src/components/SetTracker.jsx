import { useState } from 'react';

const SetTracker = ({ exercise, sets }) => {
  const [newReps, setNewReps] = useState('');
  const [newWeight, setNewWeight] = useState('');
  const [loggedSets, setLoggedSets] = useState(sets);

  const addSet = () => {
    if (newReps && newWeight) {
      setLoggedSets([...loggedSets, { reps: parseInt(newReps), weight: parseInt(newWeight) }]);
      setNewReps('');
      setNewWeight('');
    }
  };

  return (
    <div className="mb-4">
      <h4 className="h6">{exercise}</h4>
      <ul className="list-group">
        {loggedSets.map((set, index) => (
          <li key={index} className="list-group-item">
            Set {index + 1}: {set.reps} reps x {set.weight} kg
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <input
          type="number"
          placeholder="Reps"
          value={newReps}
          onChange={(e) => setNewReps(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={newWeight}
          onChange={(e) => setNewWeight(e.target.value)}
          className="form-control mb-2"
        />
        <button onClick={addSet} className="btn btn-primary">
          Add Set
        </button>
      </div>
    </div>
  );
};

export default SetTracker;