import React, { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (!(count === 0)) {
      setCount(count - 1);
    } else {
      setCount("Can't go below 0");
      return setTimeout(() => {
        setCount(0);
      }, 700);
    }
  };
  return (
    <>
      <div className="counter-body">
        <h1>{count}</h1>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>subtract</button>
      </div>
    </>
  );
}

export default Test;
