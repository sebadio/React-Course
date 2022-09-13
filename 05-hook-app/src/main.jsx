import React from "react";
import ReactDOM from "react-dom/client";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import { MemoHook } from "./06-memos/MemoHook";
// import { Memorize } from "./06-memos/Memorize";
import "./index.css";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { HooksAPP } from "./HooksAPP";
// import { Layout } from "./05-useLayoutEffect/Layout";

// import "./08-useReducer/intro-reducer";
// import { ToDoApp } from "./08-useReducer/ToDoApp";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
