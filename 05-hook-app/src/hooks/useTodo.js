import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("ToDoTasks")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("ToDoTasks", JSON.stringify(todos));
  }, [todos]);

  const todosCount = todos.length;

  const todosPending = todos.filter((todo) => !todo.done).length;

  const handleNewTodo = (todo) => {
    if (todo.description.length <= 1) return;
    const action = {
      type: "Add todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    const action = {
      type: "Remove todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleMarkDone = (id) => {
    dispatch({
      type: "Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    todosCount,
    todosPending,
    handleRemoveTodo,
    handleMarkDone,
    handleNewTodo,
  };
};
