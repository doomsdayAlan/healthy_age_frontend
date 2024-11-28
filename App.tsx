import React from 'react';
import AppProviders from './src/context/AppContextProvider';
import RootNavigator from './src/routes/RootNavigation';

export default function App() {
  return (
    <AppProviders>
      <RootNavigator/>
    </AppProviders>
  );
}
