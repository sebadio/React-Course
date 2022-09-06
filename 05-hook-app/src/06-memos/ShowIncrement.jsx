import React from "react";

export const ShowIncrement = ({ increment }) => {
  console.log("I re-rendered");

  return (
    <button
      onClick={() => {
        increment(5);
      }}
      className="btn btn-primary"
    >
      Incrementar
    </button>
  );
};
