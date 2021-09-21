import "../App.css";
import Button from "react-bootstrap/Button";
import Timer from "./CountdownAnimation";
import React, { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

import { TiArrowSortedDown } from "react-icons/ti";
import { TiMediaPlay } from "react-icons/ti";

import { TiMediaPause } from "react-icons/ti";

import { GrPowerReset } from "react-icons/gr";

function SetPomodoro(title, active, onClickHandler) {
  const startingTime = 25;
  const startingBreak = 5;
  const [time, setNewTime] = useState(startingTime * 60);
  const [breakTime, setBreak] = useState(startingBreak * 60);
  const [timeKey, setNewKey] = useState(0);

  const [sessionType, setSessionType] = useState("SESSION");

  const [isPlaying, setisPlaying] = useState(false);

  const handleSubmit = (e) => {
    console.log("hi!");
    e.preventDefault();
  };

  const addToSession = () => {
    setNewKey(timeKey + 1);
    setNewTime(time + 60);
  };

  const addToBreak = () => {
    setBreak(breakTime + 60);
  };

  const subtractFromBreak = () => {
    setBreak(breakTime - 60);
  };

  const subtractFromSession = () => {
    setNewKey(timeKey + 1);
    setNewTime(time - 60);
  };

  const pausePlay = () => {
    setisPlaying(!isPlaying);
  };

  const reset = () => {
    setNewKey(timeKey + 1);
    setisPlaying(false);
    setNewTime(startingTime * 60);
    setBreak(startingBreak * 60);

    setSessionType("SESSION");
  };

  const onCompleteHandler = () => {
    var audio = new Audio(
      "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
    );
    audio.play();
    setSessionType("BREAK TIME");
    setNewTime(breakTime);
    setNewKey(timeKey + 1);
  };

  return (
    <div className="form-container">
      <form noValidate>
        <div className="input-wrapper">
          <h2 id="session-label">Session Length</h2>
          <TiArrowSortedUp
            id="session-increment"
            size={25}
            onClick={addToSession}
          />
          <p id="session-length">{time / 60}</p>
          {/* {renderTime(time)} */}

          <TiArrowSortedDown
            id="session-decrement"
            size={22}
            onClick={subtractFromSession}
          />

          <h2 id="break-label">Break Length</h2>

          <TiArrowSortedUp
            id="break-increment"
            size={25}
            onClick={addToBreak}
          />
          <p id="break-length">{breakTime / 60}</p>

          <TiArrowSortedDown
            id="break-decrement"
            size={22}
            onClick={subtractFromBreak}
          />
        </div>

        <div id="countdown">
          <Timer
            sessionType={sessionType}
            time={time}
            timeKey={timeKey}
            initialRemainingTime={time}
            isPlaying={isPlaying}
            breakTime={breakTime}
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
        {isPlaying ? (
          <TiMediaPause id="start_stop" size={40} onClick={pausePlay} />
        ) : (
          <TiMediaPlay id="start_stop" size={40} onClick={pausePlay} />
        )}

        <GrPowerReset id="reset" size={40} onClick={reset} />
      </form>
    </div>
  );
}

export default SetPomodoro;
