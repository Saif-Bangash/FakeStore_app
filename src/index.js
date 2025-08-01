import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './services/ProductContext';
import { CartProvider } from './services/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
