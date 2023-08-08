import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import draculaTheme from './styles/Theme';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={draculaTheme}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
