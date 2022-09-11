import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onRemoveTodo, handleMarkDone }) => {
  return (
    <ul className="list-group">
      {todos.map((tarea) => (
        <TodoItem
          key={tarea.id}
          tarea={tarea}
          onRemoveTodo={onRemoveTodo}
          handleMarkDone={handleMarkDone}
        />
      ))}
    </ul>
  );
};
