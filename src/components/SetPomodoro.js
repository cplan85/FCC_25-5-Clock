import "../App.css";
import Button from "react-bootstrap/Button";
import CountdownAnimation from "./CountdownAnimation";
import React, { useState } from "react";

function SetPomodoro(title, active, onClickHandler) {
  const [time, setNewTime] = useState(0.1 * 60);
  const [breakTime, setBreak] = useState(5 * 60);
  const [timeKey, setNewKey] = useState(0);

  const [sessionType, setSessionType] = useState("SESSION");

  const [isPlaying, setisPlaying] = useState(false);

  const handleSubmit = (e) => {
    console.log("hi!");
    e.preventDefault();
  };

  const renderTime = (remainingTime) => {
    var timerhours = Math.floor(remainingTime / 3600);
    var timerminutes = -timerhours * 60 + Math.floor(remainingTime / 60);
    var timerseconds = -timerminutes * 60 - timerhours * 3600 + remainingTime;
    if (remainingTime === 0) {
      timerminutes = 0;
      timerseconds = 0;
    }
    return (
      <div className="timer">
        <div className="minutesvalue">{timerminutes} Min</div>
        <div className="secondsvalue">{timerseconds} Sec</div>
      </div>
    );
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

  const pause = () => {
    setisPlaying(!isPlaying);
  };

  const reset = () => {
    setNewKey(timeKey + 1);
    setNewTime(0.1 * 60);
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
          <Button variant="primary" size="lg" onClick={addToSession}>
            ADD
          </Button>

          {renderTime(time)}

          <Button variant="primary" size="lg" onClick={subtractFromSession}>
            SUBTRACT
          </Button>

          <h2 id="break-label">Break Length</h2>

          <Button variant="primary" size="lg" onClick={addToBreak}>
            ADD
          </Button>
          {renderTime(breakTime)}

          <Button variant="primary" size="lg" onClick={subtractFromBreak}>
            SUBTRACT
          </Button>
        </div>

        <div id="countdown">
          <CountdownAnimation
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
        <Button variant="primary" size="lg" onClick={pause}>
          PLAY/PAUSE
        </Button>
        <Button variant="primary" size="lg" onClick={reset}>
          Reset
        </Button>
      </form>
    </div>
  );
}

export default SetPomodoro;
