const TimerDisplay = ({ time }) => {
  return (
    <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold">⏳Timer {time}</h2>
    </div>
  );
};

export default TimerDisplay;
