import { CountdownCircleTimer } from "react-countdown-circle-timer";
import moment from "moment";

const CountdownAnimation = (props) => {
  const clockify = (remainingTime) => {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  };

  const renderTime = ({ remainingTime }) => {
    const remainingTimeInMinutes = moment
      .duration(props.remainingTime, "s")
      .asMinutes();
    return (
      <div>
        {/* <div id="timer-label"> {props.sessionType}</div> */}
        <div>
          <h1>
            {clockify(remainingTimeInMinutes * 60)}
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
      {/* <CountdownCircleTimer
        // sessionType={props.sessionType}
        isPlaying={props.isPlaying}
        key={props.timeKey}
        duration={props.time}
        initialRemainingTime={props.time}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
        // onComplete={
        //   props.onCompleteHandler
        //   //return [false, 1500]; // repeat animation in 1.5 seconds
        // }
      >
        {renderTime}
      </CountdownCircleTimer> */}
    </div>
  );
};

export default CountdownAnimation;
