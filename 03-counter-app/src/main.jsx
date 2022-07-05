import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./FirstApp";
import RimuruFunction from "./Rimuru";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App title={undefined} />
    <RimuruFunction></RimuruFunction>
  </React.StrictMode>
);
