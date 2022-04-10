import "../App.css";
import CountdownAnimation from "./CountdownAnimation";
import moment from "moment";
import { TiArrowSortedUp } from "react-icons/ti";

import { TiArrowSortedDown } from "react-icons/ti";
import { TiMediaPlay } from "react-icons/ti";

import { TiMediaPause } from "react-icons/ti";

import { GrPowerReset } from "react-icons/gr";

function Timer(props) {
  const { breakLength, subtractFromBreak, addToBreak } = props;

  const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();
  return (
    <div className="form-container">
      <p id="break-label">Break</p>
      <p id="break-length">{breakLengthInMinutes}</p>
      <button id="break-decrement" onClick={subtractFromBreak}>
        -
      </button>
      <button id="break-increment" onClick={addToBreak}>
        +
      </button>
    </div>
  );
}

export default Timer;
