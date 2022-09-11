const intialState = [
  {
    id: 1,
    todo: "Terminar Dark Souls",
    done: false,
  },
];

const todoReducer = (state = intialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Terminar Hanako-kun",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
