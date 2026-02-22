import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  loginWithGoogle: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // On initial load or refresh, try to get the user from local storage
    const loadUserFromStorage = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        } catch (error) {
          console.error('Error parsing stored user data:', error);
          localStorage.removeItem('user');
        }
      }
    };

    loadUserFromStorage();
  }, []);

  const login = (jwtToken, userData) => {
    const userToStore = { token: jwtToken, ...userData };
    setUser(userToStore);
    localStorage.setItem('user', JSON.stringify(userToStore));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const loginWithGoogle = async (googleToken) => {
    try {
      const response = await axios.post('/api/auth/google', {
        token: googleToken,
      });

      if (response.status === 200) {
        login(response.data.jwtToken, response.data.user);
      }
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
