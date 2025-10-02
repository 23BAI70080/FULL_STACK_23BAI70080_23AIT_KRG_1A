import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("Maximum limit reached");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    }
  };

  return (
    <div >
      <h2>Counter: {count}</h2>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={increment} >
        Increment
      </button>
      <div>{message}</div>
    </div>
  );
}

export default Counter;
