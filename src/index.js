import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App/App.jsx";
import { BrowserRouter } from "react-router-dom";
import './button-up';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-task-practic">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
