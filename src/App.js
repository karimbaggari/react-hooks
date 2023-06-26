import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "Increment",
  DECREMENT: "Decrement",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [count, setCount] = useState(0);

  function increment() {
    dispatch({ type: "Increment" });
  }

  function decrement() {
    dispatch({ type: "Decrement" });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
