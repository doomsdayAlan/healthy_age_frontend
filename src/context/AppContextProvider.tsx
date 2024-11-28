import React, { ReactNode } from 'react';
import { DBConnectionProvider } from './DBConnectionContext';
import { AccountConnectionProvider } from './AccountConnectionContext';
import { NavigationProvider } from './NavigationContext';
import { UserProvider } from './UserContext';

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <DBConnectionProvider>
      <AccountConnectionProvider>
        <NavigationProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </NavigationProvider>
      </AccountConnectionProvider>
    </DBConnectionProvider>
  );
};

export default AppProviders;
