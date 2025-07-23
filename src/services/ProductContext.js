// src/services/ProductContext.js
import { createContext, useState, useEffect } from 'react';
import { fetchAllProducts } from './productService';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts()
      .then(setProducts)
      .catch((err) => console.error('API error:', err));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
