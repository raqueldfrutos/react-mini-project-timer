import Timer from "./components/Timer";

const App = () => {
  return (
    <div className="max-w-md mx-auto text-center mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <Timer />
    </div>
  );
};

export default App;

// Notes: if we dont use ref here, the button will start the timer but wont pause it, because the value wont persist across the state
