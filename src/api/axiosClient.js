import axios from "axios";
import queryString from "query-string";
import jwt_decode from "jwt-decode";
import axiosBase from "./axiosBase";

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const userString = window.localStorage.getItem("user");
  if (!userString) return config;
  const user = JSON.parse(userString);
  if (user && user.access) {
    const accessInfo = jwt_decode(user.access);
    const date = new Date();
    if (date.getTime() / 1000 > accessInfo.exp) {
      const refreshToken = await axiosBase.post("/token/refresh/", {
        refresh: user.refresh,
      });
      if (refreshToken.access) {
        user.access = refreshToken.access;
        window.localStorage.setItem("user", JSON.stringify(user));
      }
    }
    config.headers.Authorization = `Bearer ${user.access}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (err) => {
    //handle error
    throw err;
  }
);
export default axiosClient;
