// src/api.js
import axios from "axios";

const API_URL = "http://localhost:4000/student";

export const loginStudent = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const registerStudent = (data) => {
  return axios.post(`${API_URL}/register`, data);
};
