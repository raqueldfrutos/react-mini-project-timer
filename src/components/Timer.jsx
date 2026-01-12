const Timer = ({ time, toggleTimer, resetTimer, isRunning }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-4xl font-semibold mt-4">⏳Timer {time}</h2>
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
