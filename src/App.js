import "./App.css";
import SetPomodoro from "./components/SetPomodoro";
//import CountdownAnimation from "./components/CountdownAnimation";
function App() {
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <p>Be Productive the right way!</p>

      <SetPomodoro />
    </div>
  );
}

export default App;
