import TimerDisplay from "./TimerDisplay";
const Timer = ({ time, toggleTimer, resetTimer, isRunning }) => {
  return (
    <div className="max-w-md mx-auto text-center">
      <TimerDisplay time={time} />

      <button
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
    </div>
  );
};

export default Timer;
