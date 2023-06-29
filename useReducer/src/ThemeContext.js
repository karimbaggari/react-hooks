import React, { useState, createContext } from "react";
// import { ThemeContext } from "./App";

export const ThemeContext = createContext();
export function ThemeProvider(props) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
