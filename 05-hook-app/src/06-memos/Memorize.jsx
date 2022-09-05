import React, { useState } from "react";
import { Small } from "./Small";

export const Memorize = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

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
