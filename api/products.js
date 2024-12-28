const { API_URL } = require("./apiConfig");
import axios from "axios";
export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return await response.data.json();
};

export const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return await response.data.json();
};
