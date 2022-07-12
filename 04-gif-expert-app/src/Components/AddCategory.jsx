import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangedInput = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    // Prevenimos el default
    e.preventDefault();

    // Creamos una variable con el input
    const newInputValue = inputValue.trim();

    // Chequeamos el input
    if (newInputValue.length <= 1) return;

    // Creamos la nueva categoria y reseteamos el value
    onNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Ingrese su busqueda"
        value={inputValue}
        onChange={onChangedInput}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
