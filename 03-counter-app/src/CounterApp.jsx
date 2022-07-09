import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const reduceValue = () => {
    setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <div className="buttons">
        <button onClick={addValue}>+1</button>
        <button onClick={reduceValue}>-1</button>
        <button onClick={resetValue}>Reset</button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;
