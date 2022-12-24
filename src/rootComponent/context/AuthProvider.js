import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    // JSON.parse(window.localStorage.getItem("user"))
    {
      id: "1",
    }
  );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
