import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

export const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
      // in the latest version "common" returns undefined
      // config.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);