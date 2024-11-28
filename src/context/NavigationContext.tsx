import React, { createContext, useContext, useState } from 'react';
import { RootStackParamList } from '../routes/RootStackParamList';

interface NavigationContextProps {
    currentRoute: keyof RootStackParamList | null;
    previousRoute: keyof RootStackParamList | null;
    setCurrentRoute: (routeName: keyof RootStackParamList) => void;
}

const NavigationContext = createContext<NavigationContextProps>({
  currentRoute: null,
  previousRoute: null,
  setCurrentRoute: () => {},
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<keyof RootStackParamList | null>(null);
  const [previousRoute, setPreviousRoute] = useState<keyof RootStackParamList | null>(null);

  const handleRouteChange = (routeName: keyof RootStackParamList) => {
    if (currentRoute !== routeName) {
      setPreviousRoute(currentRoute);
      setCurrentRoute(routeName);
    }
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, previousRoute, setCurrentRoute: handleRouteChange }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);
