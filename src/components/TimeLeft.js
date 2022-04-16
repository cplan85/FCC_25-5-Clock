import "../App.css";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { TiMediaPlay } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";
import { TiMediaPause } from "react-icons/ti";

function TimeLeft(props) {
  momentDurationFormatSetup(moment);

  const {
    currentSessionType,
    timeLeft,
    handleStartStopClick,
    isStarted,
    reset,
  } = props;

  //whenever sessionLength changes useEffect initiates the function we indicated.
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <div className="form-container main-clock">
      <h2 id="timer-label">{currentSessionType}</h2>
      <h2 id="time-left">{formattedTimeLeft}</h2>

      <button id="start_stop" onClick={handleStartStopClick}>
        {isStarted ? <TiMediaPause size={30} /> : <TiMediaPlay size={30} />}
      </button>
      <button id="reset" onClick={reset}>
        <GrPowerReset size={30} />
      </button>
    </div>
  );
  //mm:ss
}

export default TimeLeft;
