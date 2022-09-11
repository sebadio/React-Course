import React from "react";

export const TodoItem = ({ tarea, onRemoveTodo, handleMarkDone }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onClick={() => {
          handleMarkDone(tarea.id);
        }}
        className={`align-self-center ${
          tarea.done ? "text-decoration-line-through" : ""
        }`}
      >
        {tarea.description}
      </span>
      <button onClick={() => onRemoveTodo(tarea.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};
