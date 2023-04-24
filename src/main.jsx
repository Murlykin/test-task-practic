import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import { App } from './components/App/App.jsx';
import './button-up';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HashRouter>
      <App />
   </HashRouter> */}
        <BrowserRouter basename="/Murlykin/test-task-practic">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
