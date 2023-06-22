import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [resourceType, setResourceType] = useState("");
  const [items, setItems] = useState([]);
  const [windowsWith, setWindowsWith] = useState(window.innerWidth);

  const handleSize = () => {
    setWindowsWith(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${resourceType}`)
      .then((response) => response.json())
      .then((json) => {
        const dataArray = Object.values(json);
        console.log(resourceType);
        setItems(dataArray);
      });
    return () => {
      console.log("return from resource changed");
    };
  }, [resourceType]);

  return (
    <>
      <div>{windowsWith}</div>
      <button onClick={() => setResourceType(1)}>first Article</button>
      <button onClick={() => setResourceType(2)}>second Article</button>
      <button onClick={() => setResourceType(3)}>third Article</button>
      <button onClick={() => setResourceType("")}>reset</button>
      {items.map((item, key) => (
        <pre key={key}>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
}

export default App;
