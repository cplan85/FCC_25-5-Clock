import "./App.css";
import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import Session from "./components/Session";
//import CountdownAnimation from "./components/CountdownAnimation";
function App() {
  const [sessionLength, setSessionLength] = useState(60 * 25);

  const subtractFromSession = () => {
    const newSessionLength = sessionLength - 60;
    newSessionLength < 0
      ? setSessionLength(0)
      : setSessionLength(newSessionLength);
  };

  const addToSession = () => {
    const newSessionLength = sessionLength + 60;
    newSessionLength < 0
      ? setSessionLength(0)
      : setSessionLength(newSessionLength);
  };

  const [breakLength, setBreakLength] = useState(300);

  const subtractFromBreak = () => {
    const newBreakLength = breakLength - 60;
    newBreakLength < 0 ? setBreakLength(0) : setBreakLength(newBreakLength);
  };

  const addToBreak = () => {
    const newBreakLength = breakLength + 60;
    newBreakLength < 0 ? setBreakLength(0) : setBreakLength(newBreakLength);
  };
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <p>Designed and coded by Carlos Planchart</p>

      <Timer
        breakLength={breakLength}
        subtractFromBreak={subtractFromBreak}
        addToBreak={addToBreak}
      />
      <Session
        sessionLength={sessionLength}
        subtractFromSession={subtractFromSession}
        addToSession={addToSession}
      />
    </div>
  );
}

export default App;
