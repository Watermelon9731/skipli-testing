import axios from "axios";

export const defaultAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

defaultAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

defaultAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);
