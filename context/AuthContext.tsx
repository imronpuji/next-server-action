'use client';
import { createContext, useEffect, useState } from 'react';

type AuthContextType = {
  userProfile: {
    name: string;
    email: string;
  };
  token: string;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  userProfile: {
    name: 'imron',
    email: 'imronpublic@gmail.com',
  },
  token: '',
  handleLogout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userProfile, setUserProfile] = useState({
    name: 'imron',
    email: 'imronpublic@gmail.com',
  });

  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setToken(token);
      if (window.location.pathname === '/login') {
        window.location.href = '/dashboard';
      }
    } else if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }

    return () => {
      setToken('');
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUserProfile({
      name: 'imron',
      email: 'imronpublic@gmail.com',
    });
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ userProfile, token, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
