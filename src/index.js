import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/shop.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './pages/ScrollTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

