import "../App.css";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

function TimeLeft(props) {
  momentDurationFormatSetup(moment);

  const { currentSessionType, timeLeft, handleStartStopClick, isStarted } =
    props;

  //whenever sessionLength changes useEffect initiates the function we indicated.
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <div className="form-container">
      <p id="timer-label">{currentSessionType}</p>
      <p id="time-left">{formattedTimeLeft}</p>

      <button id="start_stop" onClick={handleStartStopClick}>
        {isStarted ? "Stop" : "Start"}
      </button>
    </div>
  );
  //mm:ss
}

export default TimeLeft;
