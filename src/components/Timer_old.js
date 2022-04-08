import "../App.css";
import CountdownAnimation from "./CountdownAnimation";
import React, { useState, useEffect } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

import { TiArrowSortedDown } from "react-icons/ti";
import { TiMediaPlay } from "react-icons/ti";

import { TiMediaPause } from "react-icons/ti";

import { GrPowerReset } from "react-icons/gr";

function Timer() {
  const startingTime = 25;
  const startingBreak = 5;
  const sessionText = "SESSION";

  const [timeSeconds, setTimeSeconds] = useState(startingTime * 60);

  const [timer, setNewTimer] = useState({
    sessionTime: startingTime,
    breakTime: startingBreak,
    timeKey: 0,
    sessionType: sessionText,
    remainingTime: startingTime * 60,
  });

  const [remainingTime, setRemainingTime] = useState(1023);

  const [isPlaying, setisPlaying] = useState(false);

  // NEW FUNCTIONS
  const reduceTime = () => {
    if (isPlaying && timeSeconds > 0) {
      setTimeSeconds(timeSeconds - 1);
    }
    if (isPlaying && timeSeconds === 0) {
      setTimeSeconds(timer.breakTime * 60);
      setTimeSeconds(timeSeconds - 1);
    }
  };

  const clockify = (remainingTime) => {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  };

  setTimeout(reduceTime, 1000);

  console.log(`time in seconds`, timeSeconds);
  // NEW FUNCTIONS

  const addToSession = () => {
    if (timer.sessionTime < 60 && !isPlaying) {
      setNewTimer({
        ...timer,
        timeKey:
          timer.sessionType === sessionText ? timer.timeKey + 1 : timer.timeKey,
        sessionTime: timer.sessionTime + 1,
      });
      setRemainingTime((timer.sessionTime + 1) * 60);
      //look to delete
    }
  };

  // useEffect(() => {
  //   if (!isPlaying) {
  //     setNewTimer({
  //       ...timer,
  //       sessionType: sessionText,
  //       sessionTime: timer.sessionTime,
  //     });
  //   }
  // }, [timer.sessionTime]);

  const addToBreak = () => {
    if (timer.breakTime < 60 && !isPlaying) {
      setNewTimer({
        ...timer,
        breakTime: timer.breakTime + 1,
        timeKey:
          timer.sessionType === "BREAK TIME"
            ? timer.timeKey + 1
            : timer.timeKey,
      });
    }
  };

  const subtractFromBreak = () => {
    if (timer.breakTime > 1 && !isPlaying) {
      setNewTimer({
        ...timer,
        breakTime: timer.breakTime - 1,
        timeKey:
          timer.sessionType === "BREAK TIME"
            ? timer.timeKey + 1
            : timer.timeKey,
      });
    }
  };

  const subtractFromSession = () => {
    if (timer.sessionTime > 1 && !isPlaying) {
      setNewTimer({
        ...timer,
        timeKey:
          timer.sessionType === sessionText ? timer.timeKey + 1 : timer.timeKey,
        sessionTime: timer.sessionTime - 1,
      });
      setRemainingTime((timer.sessionTime - 1) * 60);
    }
  };

  const pausePlay = () => {
    setisPlaying(!isPlaying);
  };

  const reset = () => {
    setisPlaying(false);
    setNewTimer({
      ...timer,
      timeKey: timer.timeKey + 1,
      sessionTime: startingTime,
      breakTime: startingBreak,
      sessionType: sessionText,
    });
    console.log(`timer from reset`, timer);
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  const onCompleteHandler = () => {
    if (timer.sessionType == sessionText) {
      const audio = document.getElementById("beep");
      audio.play();

      setNewTimer({
        ...timer,
        timeKey: timer.timeKey + 1,
        breakTime: timer.breakTime,
        sessionType: "BREAK TIME",
      });
    } else {
      const audio = document.getElementById("beep");
      audio.play();
      setNewTimer({
        ...timer,
        timeKey: timer.timeKey + 1,
        sessionTime: timer.sessionTime,
        sessionType: sessionText,
      });
    }
  };

  return (
    <div className="form-container">
      <div className="input-wrapper">
        <h2 id="session-label">Session Length</h2>
        <button id="session-increment" onClick={addToSession}>
          <TiArrowSortedUp size={25} />
        </button>
        <p id="session-length">{timer.sessionTime}</p>
        {/* {renderTime(time)} */}
        <button id="session-decrement" onClick={subtractFromSession}>
          <TiArrowSortedDown size={22} />
        </button>
        <h2 id="break-label">Break Length</h2>
        <button id="break-increment" onClick={addToBreak}>
          <TiArrowSortedUp size={25} />
        </button>
        <p id="break-length">{timer.breakTime}</p>
        <button id="break-decrement" onClick={subtractFromBreak}>
          <TiArrowSortedDown size={22} />
        </button>
      </div>

      <div id="countdown">
        <CountdownAnimation
          //changeRemainingTime={changeRemainingTime}
          remainingTime={timer.remainingTime}
          sessionType={timer.sessionType}
          time={
            timer.sessionType === sessionText
              ? timer.sessionTime * 60
              : timer.breakTime * 60
          }
          timeKey={timer.timeKey}
          isPlaying={isPlaying}
          breakTime={timer.breakTime * 60}
          onCompleteHandler={onCompleteHandler}
          onComplete={() => {
            // do your stuff here
            return [true, 1500]; // repeat animation in 1.5 seconds
          }}
        />
        <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
      <button id="start_stop" onClick={pausePlay}>
        {isPlaying ? <TiMediaPause size={40} /> : <TiMediaPlay size={40} />}
      </button>
      <button id="reset" onClick={reset}>
        <GrPowerReset size={40} />
      </button>
      <h2>{clockify(timeSeconds)}</h2>
    </div>
  );
}

export default Timer;
