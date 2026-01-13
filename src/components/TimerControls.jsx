import { useEffect, useRef } from "react";

const TimerControls = ({ toggleTimer, isRunning, resetTimer }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []); // when the component mounts, the button element is selected by the useRef and we had focus() to it.
  return (
    <>
      <button
        ref={startButtonRef} // selecting the DOM element of the button
        onClick={toggleTimer}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-3"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={resetTimer}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;
