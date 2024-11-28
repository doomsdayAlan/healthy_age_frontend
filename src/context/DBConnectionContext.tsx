import React, { createContext, ReactNode, useState, useEffect } from 'react';

interface DBConnectionContextType {
  dbConnection: boolean;
  CheckConnection: () => void;
}

interface ConnectionProviderProps {
  children: ReactNode;
}

const DBConnectionContext = createContext<DBConnectionContextType>({
  dbConnection: false,
  CheckConnection: () => {},
});

const DBConnectionProvider = ({ children }: ConnectionProviderProps) => {
  const [dbConnection, setDbConnection] = useState(false);

  const CheckConnection = () => {
    setDbConnection(true);
  };

  useEffect(() => {
    CheckConnection();
  }, []);

  return (
    <DBConnectionContext.Provider value={{ dbConnection, CheckConnection }}>
      {children}
    </DBConnectionContext.Provider>
  );
};

export { DBConnectionContext, DBConnectionProvider };
