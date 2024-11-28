import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackRoutes } from './AuthStack';
import { AppStackRoutes } from './AppStack';
import SetUpScreen from '../screens/SetUpScreen';
import { DBConnectionContext } from '../context/DBConnectionContext';
import { AccountConnectionContext } from '../context/AccountConnectionContext';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigationContext } from '../context/NavigationContext';
import { RootStackParamList } from './RootStackParamList';

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { dbConnection } = useContext(DBConnectionContext);
  const { AccountConnection } = useContext(AccountConnectionContext);
  const { setCurrentRoute } = useNavigationContext();

  return (
    <NavigationContainer
      onStateChange={(state) => {
        const currentRoute = state?.routes[state.index]?.name as keyof RootStackParamList;
        if (currentRoute) {
          setCurrentRoute(currentRoute);
        }
      }}
    >
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!dbConnection ? (
          <RootStack.Screen name="SetUpScreen" component={SetUpScreen} />
        ) : (
          AccountConnection ? (
            <RootStack.Screen name="AppStack" component={AppStackRoutes} />
          ) : (
            <RootStack.Screen name="AuthStack" component={AuthStackRoutes} />
          )
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
