import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, incrementarCounter, decrementarCounter, resetearCounter } =
    useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter} </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => incrementarCounter(2)}>
        +2
      </button>
      <button className="btn btn-primary" onClick={() => resetearCounter()}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrementarCounter(2)}>
        -2
      </button>
    </>
  );
};
