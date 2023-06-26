import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [name, setName] = useLocalStorage("name","");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
