import React, { useState } from "react";

const heavyLoad = (iterations = 100) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Ahi vamos...");
  }

  return `${iterations} iteraciones realizadas`;
};

export const MemoHook = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <hr />

      <h4>{heavyLoad(5000)}</h4>

      <button
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>

      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary"
      >
        Show/Hide: {JSON.stringify(show)}
      </button>
    </>
  );
};
