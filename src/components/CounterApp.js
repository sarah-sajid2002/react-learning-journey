import React, { useState } from "react";
import "./counter.css";
export default function CounterApp() {
  let [counter, setCounter] = useState(0);
  let increment = () => {
    setCounter(counter + 1);
  };
  let decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };
  let reset = () => {
    setCounter(0);
  };
  return (
    <>
      <div className="parentDiv">
        <h1>counter app using react</h1>
        <div className="mainBox">
          <h1>{counter}</h1>
          <div className="button">
            <button onClick={increment} className="increment">
              increment
            </button>
            <button onClick={reset} className="reset">
              reset
            </button>
            <button onClick={decrement} className="decrement">
              decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
