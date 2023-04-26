import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { App } from './components/App/App.jsx';
import { GlobalStyle} from './components/GlobalStyle';
import './button-up';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle/>
      <App />
   </HashRouter>
  </React.StrictMode>
);

