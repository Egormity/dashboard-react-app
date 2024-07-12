import React, { createContext, useContext, useState } from 'react';

const stateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  function setMode(mode) {
    setCurrentMode(mode);
    localStorage.setItem('themeMode', mode);
    // setThemeSettings(false);
  }

  function setColor(color) {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    // setThemeSettings(false);
  }

  function handleClick(clickedEl) {
    console.log(isClicked);
    setIsClicked({ ...initialState, [clickedEl]: true });
  }

  return (
    <stateContext.Provider
      value={{
        //--- STATE ---//
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,

        //--- FUNCTIONS ---//
        handleClick,
        setMode,
        setColor,
      }}
    >
      {children}
    </stateContext.Provider>
  );
}

export const useStateContext = () => useContext(stateContext);
