import "../App.css";
import Button from "./Button";
import CountdownAnimation from "./CountdownAnimation";
import React, { useState } from "react";

function SetPomodoro(title, active, onClickHandler) {
  const [newTimer, setNewTimer] = useState({
    work: 0.3,
    short: 0.2,
    long: 1,
    active: "work",
  });

  const handleChange = (input) => {
    const { name, value } = input.target;

    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;

      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
    console.log(newTimer);
  };

  const handleSubmit = (e) => {
    console.log("hi!");
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form noValidate>
        <div className="input-wrapper">
          <input
            className="input"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="input"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className="input"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        {/* <CountdownAnimation /> */}
        <Button
          title="Set Timer"
          active={"true"}
          onClickHandler={handleSubmit}
        />
      </form>
    </div>
  );
}

export default SetPomodoro;
