"use client";
// context/AppContext.js
import { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from '@clerk/nextjs';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { userId, getToken, isLoaded, isSignedIn } = useAuth();
  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setUser(isSignedIn ? { id: userId } : null); // Or fetch more user data
      setAuthLoaded(true);
    }
  }, [userId, isSignedIn, isLoaded]);

  return (
    <AppContext.Provider value={{ user, authLoaded }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);