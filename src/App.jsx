import { useState, useRef } from "react";
import Timer from "./components/Timer";

const App = () => {
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
    <Timer
      time={time}
      toggleTimer={toggleTimer}
      resetTimer={resetTimer}
      isRunning={isRunning}
    />
  );
};

export default App;

// Notes: if we dont use ref here, the button will start the timer but wont pause it, because the value wont persist across the state
