import "../App.css";
import CountdownAnimation from "./CountdownAnimation";
import moment from "moment";
import { TiArrowSortedUp } from "react-icons/ti";

import { TiArrowSortedDown } from "react-icons/ti";

function Session(props) {
  const { sessionLength, subtractFromSession, addToSession } = props;

  const sessionLengthInMinutes = moment
    .duration(sessionLength, "s")
    .asMinutes();
  return (
    <div className="form-container">
      <p id="session-label">Session</p>
      <div className="row">
        <button id="session-increment" onClick={addToSession}>
          <TiArrowSortedUp size={20} />
        </button>
        <p id="session-length">{sessionLengthInMinutes}</p>
        <button id="session-decrement" onClick={subtractFromSession}>
          <TiArrowSortedDown size={20} />
        </button>
      </div>
    </div>
  );
}

export default Session;
