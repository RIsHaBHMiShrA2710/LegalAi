import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
      }
    }
  }, []);
  const login = (jwtToken, userData) => {
    setUser({
      token: jwtToken,
      user: userData,
    });
    localStorage.setItem('user', JSON.stringify({ token: jwtToken, user: userData }));
  };
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };
  

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
