import React, { useState, useEffect } from "react";
import ModelExample from "./ModelExample";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <>
      <ModelExample />
    </>
  );
}

export default App;
