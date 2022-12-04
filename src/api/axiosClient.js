import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
});

axiosClient.interceptors.request.use(async (config) => {
  // const userString = window.localStorage.getItem("user");
  // if (!userString) return config;
  // const user = JSON.parse(userString);
  // if (user && user.access) {
  // const accessInfo = jwt_decode(user.access);
  // const date = new Date();
  // if (date.getTime() / 1000 > accessInfo.exp) {
  //   const refreshToken = await axiosBase.post("/token/refresh/", {
  //     refresh: user.refresh,
  //   });
  //   if (refreshToken.access) {
  //     user.access = refreshToken.access;
  //     window.localStorage.setItem("user", JSON.stringify(user));
  //   }
  // }
  config.headers.Authorization = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJBcjk5UHd5SEZtNnNJWnVyV2t3aEVLd25QUGQydEJVbUVxM3I1YWhjLXZjIn0.eyJleHAiOjE2NzAxNjYyMzgsImlhdCI6MTY3MDE2NTkzOCwianRpIjoiNTVlMWJmMzktMzRhOC00ODg0LWIyODEtMTZlOGI5ZGI5YjQ4IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MTgwL2F1dGgvcmVhbG1zL29hdXRoMi1taWNyb3NlcnZpY2UtcmVhbG0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiN2E0OTFmOTQtOTRlOC00ZjJmLWJhN2QtN2QwNWI2YzliNzA4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic3ByaW5nLWNsb3VkLWNsaWVudCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1vYXV0aDItbWljcm9zZXJ2aWNlLXJlYWxtIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgb2ZmbGluZV9hY2Nlc3MgZW1haWwiLCJjbGllbnRJZCI6InNwcmluZy1jbG91ZC1jbGllbnQiLCJjbGllbnRIb3N0IjoiMTI3LjAuMC4xIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtc3ByaW5nLWNsb3VkLWNsaWVudCIsImNsaWVudEFkZHJlc3MiOiIxMjcuMC4wLjEifQ.DWkdOmj9S_Olh-k1sKAXwJ_Jt7aRhCBlNLUf120uJ4Yp3blpYjhNL_5lIMy8PzCEFyi46qgk8ZKSI2rwIGD-fZ1RiIYBgJafE2YsYoF3h8_86owm4tFyS05v80kiZnnb15U_zwZWWTdfwkupxlBeNicKkBFDWkTAPcjJ4GsJH6JsWBwCVT7nCWbe28P-x5WvAk5DFyn5jutnRS-XPlAtMxyTr_l4lp3CqKUk-GxUT-f5OhrqweuI78w-fUw66Ssy_W6u7ovc1vo1s3hhTAsHMF2l7zcMdDE4KdjAQcrSWHfFYLv6TRrHzUwAKliD3_am4Dh0HiGEigtSol7jXg_mag`;
  // }

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
