import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4001", // replace with your backend port
});

export default api;
