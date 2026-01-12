import Timer from "./components/Timer";

const App = () => {
  return <Timer />;
};

export default App;

// Notes: if we dont use ref here, the button will start the timer but wont pause it, because the value wont persist across the state
