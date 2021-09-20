import React, { useState, createContext } from "react";

export const SettingContext = createContext();
const SettingContextProvider = (props) => {
  return (
    <SettingContext.Provider value={{}}>
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingContextProvider;
