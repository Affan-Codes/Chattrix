import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true, // send cookies with the request
});

// For production
// VITE_BACKEND_URL=https://chattrix-beta.onrender.com/api
