import axios from "axios";
const urlBase = "https://discordo-api.onrender.com";
export const api = axios.create({
  baseURL: urlBase,
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("@Discordo:token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
