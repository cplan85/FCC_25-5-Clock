import React, { useState, createContext } from "react";

export const SettingContext = createContext();
const SettingContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function startTimer() {
    setStartAnimate(true);
  }

  const pauseTimer = () => {
    setStartAnimate(false);
  };

  const stopTimer = () => {
    setStartAnimate(false);
  };

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
  };
  return (
    <SettingContext.Provider value={{ stopTimer }}>
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingContextProvider;
