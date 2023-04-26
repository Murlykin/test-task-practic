import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HashRouter } from "react-router-dom";
import { App } from './components/App/App.jsx';
import './button-up';
import './index.css';
import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <HashRouter>
//       <App />
//    </HashRouter>
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-task-practic">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
