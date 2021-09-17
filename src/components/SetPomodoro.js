import "./App.css";
import Button from './Button'
import React, { useState } from 'react'

function SetPomodoro(title, active, onClickHandler) {
  const [newTimer, setNewTimer] = useState({
    work: 0.3,
    short: 0.2,
    long: 1,
    active: 'work'
  })
  return (
    <div className="form-container">
      <form noValidate>
    <div className="input-wrapper">
      <input className="input" name="work" onChange={handleChange} value={}/>
      <input className="input" name="shortBreak" onChange={handleChange} value={}/>
      <input className="input" name="longBreak" onChange={handleChange} value={}/>
    </div>
      <Button title="Set Timer" onClickHandler={handleSubmit}/>
      </form>
    </div>
  );
}

export default SetPomodoro;
