import "../App.css";
import CountdownAnimation from "./CountdownAnimation";
import moment from "moment";
import { TiArrowSortedUp } from "react-icons/ti";

import { TiArrowSortedDown } from "react-icons/ti";
import { TiMediaPlay } from "react-icons/ti";

import { TiMediaPause } from "react-icons/ti";

import { GrPowerReset } from "react-icons/gr";

function Session(props) {
  const { sessionLength, subtractFromSession, addToSession } = props;

  const sessionLengthInMinutes = moment
    .duration(sessionLength, "s")
    .asMinutes();
  return (
    <div className="form-container">
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLengthInMinutes}</p>
      <button id="session-decrement" onClick={subtractFromSession}>
        -
      </button>
      <button id="session-increment" onClick={addToSession}>
        +
      </button>
    </div>
  );
}

export default Session;
