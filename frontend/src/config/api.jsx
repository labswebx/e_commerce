import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

axiosInstance.interceptors.request.use(async function (config) {
  const token = localStorage.getItem("token") || "";

  config.headers.Authorization = `${token}`;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default axiosInstance;

export const apiVersion = "/api/v1";
