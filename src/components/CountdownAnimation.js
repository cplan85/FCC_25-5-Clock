import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CountdownAnimation = (props) => {
  const clockify = (remainingTime) => {
    props.changeRemainingTime(remainingTime);

    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  };

  const renderTime = ({ remainingTime }) => {
    console.log("my remainder", remainingTime);
    var timerhours = Math.floor(remainingTime / 3600);
    var timerminutes = -timerhours * 60 + Math.floor(remainingTime / 60);
    var timerseconds = -timerminutes * 60 - timerhours * 3600 + remainingTime;

    return (
      <div>
        <div id="timer-label">{props.sessionType}</div>
        <div>
          <h1 id="time-left">
            {clockify(remainingTime)}
            {/* {`${
              timerhours === 1
                ? `60`
                : timerminutes < 10
                ? `${0}${timerminutes}`
                : timerminutes
            }:${timerseconds < 10 ? `${0}${timerseconds}` : timerseconds}`} */}
          </h1>
        </div>
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
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownAnimation;
