import { useState } from "react";

export const useCounter = (initialValue = 10, value) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementarCounter = (value = 1) => {
    setCounter(counter + value);
  };

  const decrementarCounter = (value = 1) => {
    counter !== 0 && setCounter(counter - value);
  };

  const resetearCounter = () => {
    setCounter(counter - counter);
  };

  return {
    counter,
    incrementarCounter,
    decrementarCounter,
    resetearCounter,
  };
};
