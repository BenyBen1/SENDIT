import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

// Fetch all orders
export const fetchOrders = () => axios.get(`${API_BASE_URL}/orders`);

// Add a new order
export const addOrder = (order) => axios.post(`${API_BASE_URL}/orders`, order);

// Update an existing order
export const updateOrder = (id, updatedOrder) =>
  axios.put(`${API_BASE_URL}/orders/${id}`, updatedOrder);

// Delete an order
export const deleteOrder = (id) => axios.delete(`${API_BASE_URL}/orders/${id}`);

// Fetch user details
export const fetchUser = () => axios.get(`${API_BASE_URL}/accounts/1`); // Assuming a single account for now

// Update user details
export const updateUser = (user) =>
  axios.put(`${API_BASE_URL}/accounts/1`, user); // Adjust endpoint if multiple accounts
