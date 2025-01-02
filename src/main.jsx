import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App'; // Contient les layouts et les routes
import './style.scss'
import './reset.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);