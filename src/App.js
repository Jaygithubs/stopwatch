import { useState } from 'react';
import './App.css';
import Showtime from './components/show_time';

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const stoptime = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const starttime = () => {
    // Only start the timer if there isn't already an active interval
    if (!intervalId) {
      const id = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond === 59) {
            setMinute((prevMinute) => {
              if (prevMinute === 59) {
                setHour((prevHour) => prevHour + 1);
                return 0;
              }
              return prevMinute + 1;
            });
            return 0;
          }
          return prevSecond + 1;
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  const resettime = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
    stoptime(); // Clear interval when resetting
  };

  return (
    <div className="stopwatch">
      <Showtime hour={hour} min={minute} second={second} />
      <div className="navigation">
        <div id="stopTime" onClick={stoptime}>Stop Time</div>
        <div id="startTime" onClick={starttime}>Start Time</div>
        <div id="resetTime" onClick={resettime}>Reset-Time</div>
      </div>
    </div>
  );
}

export default App;
