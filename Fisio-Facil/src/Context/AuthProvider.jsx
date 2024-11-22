import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUserName = localStorage.getItem('userName');
    if (token && storedUserName) {
      setIsAuthenticated(true);
      setUserName(storedUserName);
    }
  }, []);

  const login = (token, name) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userName', name);
    setIsAuthenticated(true);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName'); 
    setIsAuthenticated(false);
    setUserName("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
