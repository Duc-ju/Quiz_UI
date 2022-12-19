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
  config.headers.Authorization = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJBcjk5UHd5SEZtNnNJWnVyV2t3aEVLd25QUGQydEJVbUVxM3I1YWhjLXZjIn0.eyJleHAiOjE2NzEwODA3MjMsImlhdCI6MTY3MTA4MDQyMywianRpIjoiZTljMjIyNzctNjY5OC00M2ViLThkN2UtOWI5N2MyOTYxMmQ5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MTgwL2F1dGgvcmVhbG1zL29hdXRoMi1taWNyb3NlcnZpY2UtcmVhbG0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiN2E0OTFmOTQtOTRlOC00ZjJmLWJhN2QtN2QwNWI2YzliNzA4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic3ByaW5nLWNsb3VkLWNsaWVudCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1vYXV0aDItbWljcm9zZXJ2aWNlLXJlYWxtIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InNwcmluZy1jbG91ZC1jbGllbnQiOnsicm9sZXMiOlsidW1hX3Byb3RlY3Rpb24iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgb2ZmbGluZV9hY2Nlc3MgZW1haWwiLCJjbGllbnRJZCI6InNwcmluZy1jbG91ZC1jbGllbnQiLCJjbGllbnRIb3N0IjoiMTI3LjAuMC4xIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtc3ByaW5nLWNsb3VkLWNsaWVudCIsImNsaWVudEFkZHJlc3MiOiIxMjcuMC4wLjEifQ.ptPgd6HFRjurW8n-Ezzds8vX5AteXImXqC3MHJaeOyhZU2I3P2z9VpS_W0IAvCuz4eQr-0MptE-kLflcHKCtvMfKd117KKis4EeeuBrQAOaRyWNt6RCeT5n7Dk5RDkM_rjEjX5BcdFtEW5_tZkhTZizV1W3_2GjvJq30DuQataFRIALXC0eYURvzy1uFJ8wvMQPgAc2U84H2w_cpbwYQcLKlu4mKlXhDe4hjS-iwjgccjq0miZUYMJVTmkKk9LQczIsKJuwq2S6-pozuywOGbG_eIB4J695dUuSEmCVmFJV56VhdrR8ZEOYYLY8VbWJqV7-tqXc9SXBjnONtT6YPzA`;
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
