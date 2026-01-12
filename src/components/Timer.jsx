import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";
import { useState, useRef } from "react";

const Timer = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0); //time is the variable that saves the display value
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    if (isRunning) {
      //  Clear interval to stop the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      // Star timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // we are incresing 1 every 1 milisecond = 1 second. setInterval returns an Id which we are puttin to the ref
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
  };
  return (
    <div className="max-w-md mx-auto text-center">
      <TimerDisplay time={time} />
      <TimerControls
        toggleTimer={toggleTimer}
        isRunning={isRunning}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default Timer;
