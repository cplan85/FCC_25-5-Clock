import "./App.css";
import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import TimeLeft from "./components/TimeLeft";
import Session from "./components/Session";
import { GrPowerReset } from "react-icons/gr";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
function App() {
  const [sessionLength, setSessionLength] = useState(60 * 25);

  const [intervalId, setIntervalId] = useState(null);
  const [currentSessionType, setCurrentSessionType] = useState("Session");

  const [newSessionType, setNewSessionType] = useState(false);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const subtractFromSession = () => {
    const newSessionLength = sessionLength - 60;
    newSessionLength <= 0
      ? setSessionLength(60)
      : setSessionLength(newSessionLength);
  };

  const addToSession = () => {
    const newSessionLength = sessionLength + 60;
    newSessionLength <= 3600
      ? setSessionLength(newSessionLength)
      : setSessionLength(sessionLength);
  };

  const [breakLength, setBreakLength] = useState(300);

  const reset = () => {
    //clear the timeout interval
    //set the sessionType to Session
    //set timeOutInterval
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType("Session");
    setSessionLength(60 * 25);
    setTimeLeft(60 * 25);
    setBreakLength(300);
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  const isStarted = intervalId != null;

  var isSession = true;
  var sessionLocal = "Session";

  const handleStartStopClick = () => {
    // if we are in stopped mode
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }

          setNewSessionType(!newSessionType);
          const audio = document.getElementById("beep");
          audio.play();
          isSession = !isSession;
          console.log("is Session -", isSession);
          if (currentSessionType === "Session" && isSession == false) {
            setCurrentSessionType("Break");
            return breakLength;
          } else {
            setCurrentSessionType("Session");
            return sessionLength;
          }
          //console.log("currrent session type", currentSessionType);
          // return prevTimeLeft;
        });
      }, 100);

      setIntervalId(newIntervalId);
    }
  };

  console.log(timeLeft);
  console.log("Current Session Type", currentSessionType);

  const subtractFromBreak = () => {
    const newBreakLength = breakLength - 60;
    newBreakLength <= 0 ? setBreakLength(60) : setBreakLength(newBreakLength);
  };

  const addToBreak = () => {
    const newBreakLength = breakLength + 60;

    newBreakLength <= 3600
      ? setBreakLength(newBreakLength)
      : setBreakLength(breakLength);
  };

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <p>Designed and coded by Carlos Planchart</p>
      <TimeLeft
        sessionLength={sessionLength}
        breakLength={breakLength}
        intervalId={intervalId}
        currentSessionType={currentSessionType}
        timeLeft={timeLeft}
        handleStartStopClick={handleStartStopClick}
        isStarted={isStarted}
        reset={reset}
      />
      {/* <button id="reset" onClick={reset}>
        <GrPowerReset size={30} />
      </button> */}
      <div className="row">
        <Session
          sessionLength={sessionLength}
          subtractFromSession={subtractFromSession}
          addToSession={addToSession}
        />
        <Timer
          breakLength={breakLength}
          subtractFromBreak={subtractFromBreak}
          addToBreak={addToBreak}
        />
      </div>

      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />

      <h3>{newSessionType}</h3>
    </div>
  );
}

export default App;
