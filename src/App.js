import "./App.css";
import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import TimeLeft from "./components/TimeLeft";
import Session from "./components/Session";
import { GrPowerReset } from "react-icons/gr";
import CountdownAnimation from "./components/CountdownAnimation";
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
  // if (timeLeft === 0 && currentSessionType == "Break") {
  //   setCurrentSessionType("Session");
  // } else if (timeLeft === 0 && currentSessionType == "Session") {
  //   setCurrentSessionType("Break");
  // }

  //console.log("My session", isSession);
  //THIS IS WHERE I CAN FOCUS MY NEXT EFFORTS
  // if (currentSessionType == "Break" && timeLeft == 0) {
  //   const audio = document.getElementById("beep");
  //   audio.play();
  //   //setTimeLeft(timeLeft - 1);
  //   setNewSessionType("Session");
  //   console.log("ahoerhae");
  // } else if (timeLeft === 0 && currentSessionType == "Session") {
  //   //setTimeLeft(timeLeft - 1);
  //   setNewSessionType("Session");
  //   console.log("ahoerhae23342");
  // }

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
      />
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
      <button id="reset" onClick={reset}>
        <GrPowerReset size={40} />
      </button>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />

      {/* <CountdownAnimation
        //changeRemainingTime={changeRemainingTime}
        remainingTime={timeLeft}
        sessionType={currentSessionType}
        breakLength={breakLength}
        time={
          timeLeft
          // currentSessionType === "Session"
          //   ? sessionLength * 60
          //   : breakLength * 60
        }
        timeKey={0}
        isPlaying={isStarted}
        breakTime={breakLength * 60}
        //onCompleteHandler={onCompleteHandler}
        onComplete={() => {
          // do your stuff here
          return [true, 1500]; // repeat animation in 1.5 seconds
        }}
      /> */}

      <h3>{newSessionType}</h3>
    </div>
  );
}

export default App;
