import "../App.css";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { TiMediaPlay } from "react-icons/ti";

import { TiMediaPause } from "react-icons/ti";

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
        {isStarted ? <TiMediaPause size={30} /> : <TiMediaPlay size={30} />}
      </button>
    </div>
  );
  //mm:ss
}

export default TimeLeft;
