import React from "react";
import { ThemeProvider } from "./ThemeContext";
import SwitchButton from "./SwitchButton";
function App() {
  return (
    <ThemeProvider>
      <SwitchButton />
    </ThemeProvider>
  );
}

export default App;
