import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState } from 'react';

const RoundTimer = ({ rounds }) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleComplete = () => {
    if (currentRound < rounds) {
      setCurrentRound(currentRound + 1);
      return { shouldRepeat: true, delay: 1 }; // 1-second rest between rounds
    }
    return { shouldRepeat: false };
  };

  return (
    <div className="mt-4">
      <h4 className="h6">Round {currentRound}</h4>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={180} // 3 minutes per round
        colors={['#004777', '#F7B801', '#A30000']}
        colorsTime={[180, 90, 0]}
        onComplete={handleComplete}
      >
        {({ remainingTime }) => (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="btn btn-secondary"
          >
            {remainingTime} seconds
          </button>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default RoundTimer;