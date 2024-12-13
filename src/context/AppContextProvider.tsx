import React, { ReactNode } from 'react';
import { DBConnectionProvider } from './DBConnectionContext';
import { AccountConnectionProvider } from './AccountConnectionContext';
import { NavigationProvider } from './NavigationContext';
import { UserProvider } from './UserContext';
import ApiServices from './apiServicesContext';

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <DBConnectionProvider>
      <AccountConnectionProvider>
        <NavigationProvider>
          <UserProvider>
            <ApiServices>
              {children}
            </ApiServices>
          </UserProvider>
        </NavigationProvider>
      </AccountConnectionProvider>
    </DBConnectionProvider>
  );
};

export default AppProviders;
