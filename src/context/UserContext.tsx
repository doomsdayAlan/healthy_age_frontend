import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  pin: string;
  birthDate: string;
  phoneNumber: string;
  profileImage?: ImageSourcePropType;
}

interface UserContextType {
  user: User | null;
  setUser: (userData: User) => void;
  registerUser: (userData: User) => void;
  validateUser: (email: string, pin: string) => boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  registerUser: () => {},
  validateUser: () => false,
});

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const registerUser = (userData: User) => {
    setUser(userData);
  };

  const validateUser = (email: string, pin: string) => {
    return user?.email === email && user?.pin === pin;
  };

  return (
    <UserContext.Provider value={{ user, setUser, registerUser, validateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
export const useUser = () => useContext(UserContext);
