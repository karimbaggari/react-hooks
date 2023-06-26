import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function SwitchButton(props) {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  console.log(darkTheme);
  return (
    <>
      <button onClick={toggleTheme}>toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}

export default SwitchButton;
