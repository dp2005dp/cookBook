import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";  // Ensure this file exists

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  < HashRouter>
    <App />
  </HashRouter>
);
