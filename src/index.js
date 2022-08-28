import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DBUserProvider } from './components/Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DBUserProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </DBUserProvider>
);


reportWebVitals();
