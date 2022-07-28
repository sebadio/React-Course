import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const clickedFocusButton = () => {
    inputRef.current.select();

    console.log(inputRef);
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
      />

      <button onClick={clickedFocusButton} className="btn btn-primary mt-2">
        Set Focus
      </button>
    </>
  );
};
