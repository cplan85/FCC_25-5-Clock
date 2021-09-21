import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";

const CountdownAnimation = (props) => {
  const renderTime = ({ remainingTime }) => {
    var timerhours = Math.floor(remainingTime / 3600);
    var timerminutes = -timerhours * 60 + Math.floor(remainingTime / 60);
    var timerseconds = -timerminutes * 60 - timerhours * 3600 + remainingTime;
    if (remainingTime === 0) {
      // timerhours = Math.floor(props.breakTime / 3600);
      // timerminutes = -timerhours * 60 + Math.floor(remainingTime / 60);
      // timerseconds = -timerminutes * 60 - timerhours * 3600 + remainingTime;
      return (
        <div>
          <div className="timer">NOW FOR BREAK...</div>
          <div className="minutesvalue">{timerminutes} Min</div>
          <div className="secondsvalue">{timerseconds} Sec</div>
        </div>
      );
    }
    return (
      <div className="timer">
        <div>{props.sessionType}</div>
        <div className="minutesvalue">{timerminutes} Min</div>
        <div className="secondsvalue">{timerseconds} Sec</div>
      </div>
    );
  };

  return (
    <div>
      <CountdownCircleTimer
        sessionType={props.sessionType}
        isPlaying={props.isPlaying}
        key={props.timeKey}
        duration={props.time}
        initialRemainingTime={props.time}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
        onComplete={
          props.onCompleteHandler
          //return [false, 1500]; // repeat animation in 1.5 seconds
        }
      >
        {/* {({ remainingTime }) => remainingTime} */}
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownAnimation;
