import React, { createContext, ReactNode, useState, useEffect } from 'react';

interface AccountConnectionContextType {
  AccountConnection: boolean;
  setConnection: (status: boolean) => void;
}

interface AccountConnectionProviderProps {
  children: ReactNode;
}

const AccountConnectionContext = createContext<AccountConnectionContextType>({
  AccountConnection: false,
  setConnection: () => {},
});

const AccountConnectionProvider = ({ children }: AccountConnectionProviderProps) => {
  const [AccountConnection, setAccountConnection] = useState(false);

  const setConnection = (status: boolean) => {
    setAccountConnection(status);
  };

  useEffect(() => {
    setConnection(false);
  }, []);

  return (
    <AccountConnectionContext.Provider value={{ AccountConnection, setConnection }}>
      {children}
    </AccountConnectionContext.Provider>
  );
};

export { AccountConnectionContext, AccountConnectionProvider };
