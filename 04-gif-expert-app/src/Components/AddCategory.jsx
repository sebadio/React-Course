import React, { useState } from "react";

export const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangedInput = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;
    setCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingrese su busqueda"
        value={inputValue}
        onChange={onChangedInput}
      />
    </form>
  );
};
