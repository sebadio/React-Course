import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onFormReset } = useForm({
    description: "",
  });

  const onNewTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime() * 1000,
      description,
      done: false,
    };

    handleNewTodo(newTodo);
    onFormReset();
  };

  return (
    <form onSubmit={onNewTodo}>
      <input
        value={description}
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        onChange={onInputChange}
        name="description"
      />
      <button type="submit" className="btn btn-outline-primary mt-2 mx-auto">
        Agregar
      </button>
    </form>
  );
};
