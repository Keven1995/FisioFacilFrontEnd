import React, { createContext, useContext, useState, useEffect } from 'react';

// Crie o contexto
const AuthContext = createContext();

// Forneça uma função para acessar o contexto
export const useAuth = () => useContext(AuthContext);

// Componente de provedor de autenticação
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar o estado de login no início
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token); // Armazene o token
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken'); // Remova o token
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
