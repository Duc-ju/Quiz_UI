import React, { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";

export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  const { keycloak } = useKeycloak();
  const [token, setToken] = useState(keycloak.token);

  useEffect(() => {
    setToken(token);
    if (keycloak.token) {
      window.localStorage.setItem("access", keycloak.token);
    }
  }, [keycloak.token]);

  console.log(keycloak.token);

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
