import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from './Component/ThemeContext/themeContext';
import store from "./Component/Store";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Provider store = {store}>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </Provider>

  //</React.StrictMode>
);

reportWebVitals();
