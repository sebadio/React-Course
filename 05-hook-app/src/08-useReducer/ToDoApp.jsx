import React from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";

export const ToDoApp = () => {
  const {
    todos,
    todosCount,
    todosPending,
    handleRemoveTodo,
    handleMarkDone,
    handleNewTodo,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>Pendientes: {todosPending}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            handleMarkDone={handleMarkDone}
          />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
