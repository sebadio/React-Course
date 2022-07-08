import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./FirstApp";
import CounterApp from "./CounterApp";
import RimuruFunction from "./Rimuru";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App title="Hola Mundo" />
    {/* <RimuruFunction></RimuruFunction> */}
    {/* <CounterApp value={7}></CounterApp> */}
  </React.StrictMode>
);
