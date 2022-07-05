import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./FirstApp";
import Rimuru from "./Rimuru";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Rimuru></Rimuru>
  </React.StrictMode>
);
