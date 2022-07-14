import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./01-useState/CounterApp";
import { HooksAPP } from "./HooksAPP";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksAPP /> */}
    <CounterApp />
  </React.StrictMode>
);
