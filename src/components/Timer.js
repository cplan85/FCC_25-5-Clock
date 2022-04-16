import "../App.css";
import CountdownAnimation from "./CountdownAnimation";
import moment from "moment";
import { TiArrowSortedUp } from "react-icons/ti";

import { TiArrowSortedDown } from "react-icons/ti";
import { TiMediaPlay } from "react-icons/ti";

import { TiMediaPause } from "react-icons/ti";

function Timer(props) {
  const { breakLength, subtractFromBreak, addToBreak } = props;

  const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();
  return (
    <div className="form-container">
      <p id="break-label">Break</p>
      <div className="row">
        <button id="break-increment" onClick={addToBreak}>
          <TiArrowSortedUp size={20} />
        </button>
        <p id="break-length">{breakLengthInMinutes}</p>
        <button id="break-decrement" onClick={subtractFromBreak}>
          <TiArrowSortedDown size={20} />
        </button>
      </div>
    </div>
  );
}

export default Timer;
