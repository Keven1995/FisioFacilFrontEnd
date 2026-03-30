import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AUTH_STORAGE_KEYS } from "../config/api.js";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem(AUTH_STORAGE_KEYS.TOKEN);
    const storedUserName = localStorage.getItem(AUTH_STORAGE_KEYS.USER_NAME);

    if (token && storedUserName) {
      setIsAuthenticated(true);
      setUserName(storedUserName);
    }
  }, []);

  const login = (token, name) => {
    localStorage.setItem(AUTH_STORAGE_KEYS.TOKEN, token);
    localStorage.setItem(AUTH_STORAGE_KEYS.USER_NAME, name);
    setIsAuthenticated(true);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEYS.TOKEN);
    localStorage.removeItem(AUTH_STORAGE_KEYS.USER_NAME);
    setIsAuthenticated(false);
    setUserName("");
  };

  const contextValue = useMemo(
    () => ({ isAuthenticated, userName, login, logout }),
    [isAuthenticated, userName]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
