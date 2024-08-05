import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM if you're using React 18+
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Your main app component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <App />
   
  </React.StrictMode> 

);
