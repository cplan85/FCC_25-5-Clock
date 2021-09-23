import "../App.css";
import CountdownAnimation from "./CountdownAnimation";
import React, { useState, useEffect } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

import { TiArrowSortedDown } from "react-icons/ti";
import { TiMediaPlay } from "react-icons/ti";

import { TiMediaPause } from "react-icons/ti";

import { GrPowerReset } from "react-icons/gr";

function Timer(title, active, onClickHandler) {
  const startingTime = 25;
  const startingBreak = 5;
  const sessionText = "SESSION";

  const [timer, setNewTimer] = useState({
    time: startingTime,
    breakTime: startingBreak,
    timeKey: 0,
    sessionType: sessionText,
    remainingTime: startingTime * 60,
  });

  console.log("MY MINUTE", timer.time);

  const [remainingTime, setRemainingTime] = useState(1023);

  const [isPlaying, setisPlaying] = useState(false);

  const addToSession = (e) => {
    e.preventDefault();
    if (timer.time < 60 && !isPlaying) {
      setNewTimer({
        ...timer,
        timeKey:
          timer.sessionType === sessionText ? timer.timeKey + 1 : timer.timeKey,
        time: timer.time + 1,
      });
      //look to delete
    }
  };

  useEffect(() => {
    if (!isPlaying) {
      setNewTimer({
        ...timer,
        sessionType: sessionText,
        time: timer.time,
      });
    }
  }, [timer.time]);

  const addToBreak = (e) => {
    e.preventDefault();
    if (timer.breakTime < 60 && !isPlaying) {
      setNewTimer({
        ...timer,
        breakTime: timer.breakTime + 1,
        timeKey:
          timer.sessionType === "BREAK TIME"
            ? timer.timeKey + 1
            : timer.timeKey,
      });
      // console.log("timer from addToBreak", timer);
    }
  };

  const subtractFromBreak = (e) => {
    e.preventDefault();
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

  const changeRemainingTime = (data) => {
    setRemainingTime(data);
    console.log("look at my data", data);
  };

  const subtractFromSession = (e) => {
    e.preventDefault();
    if (timer.time > 1 && !isPlaying) {
      setNewTimer({
        ...timer,
        timeKey:
          timer.sessionType === sessionText ? timer.timeKey + 1 : timer.timeKey,
        time: timer.time - 1,
      });
    }
  };

  const pausePlay = (e) => {
    e.preventDefault();
    setisPlaying(!isPlaying);
  };

  const reset = (e) => {
    e.preventDefault();
    setisPlaying(false);
    setNewTimer({
      ...timer,
      timeKey: timer.timeKey + 1,
      time: startingTime,
      breakTime: startingBreak,
      sessionType: sessionText,
    });
    console.log(`timer from reset`, timer);
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  const onCompleteHandler = () => {
    const audio = document.getElementById("beep");
    audio.play();

    if (timer.sessionType == sessionText) {
      setNewTimer({
        ...timer,
        timeKey: timer.timeKey + 1,
        breakTime: timer.breakTime,
        sessionType: "BREAK TIME",
      });
    } else {
      setNewTimer({
        ...timer,
        timeKey: timer.timeKey + 1,
        time: timer.time,
        sessionType: sessionText,
      });
    }
  };

  return (
    <div className="form-container">
      <form noValidate>
        <div className="input-wrapper">
          <h2 id="session-label">Session Length</h2>
          <button id="session-increment" onClick={addToSession}>
            <TiArrowSortedUp size={25} onClick={addToSession} />
          </button>
          <p id="session-length">{timer.time}</p>
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
            changeRemainingTime={changeRemainingTime}
            remainingTime={timer.remainingTime}
            sessionType={timer.sessionType}
            time={
              timer.sessionType === sessionText
                ? timer.time * 60
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
      </form>
    </div>
  );
}

export default Timer;
