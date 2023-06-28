import { useState, useEffect, useDebugValue } from "react";

function useAge(initialAge) {
  const [age, setAge] = useState(initialAge);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge((prevAge) => prevAge + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useDebugValue(age > 18 ? "Adult" : "Child"); // Custom label for debugging

  return age;
}

function App() {
  const age = useAge(5);

  return <div>{age} years old</div>;
}

export default App;
