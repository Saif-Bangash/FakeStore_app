// src/services/productService.js
import api from './api';

export const fetchAllProducts = async () => {
  const res = await api.get('/products');
  return res.data;
};

export const fetchSingleProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};
