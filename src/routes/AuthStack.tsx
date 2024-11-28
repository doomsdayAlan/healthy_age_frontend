import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import MailConfirmationScreen from '../screens/MailConfirmationScreen';
import NewAccountScreen from '../screens/NewAccountScreen';
import { AuthStackParamList } from './AuthStackParamList';
import MainPageScreen from '../screens/MainPageScreen';

const AuthStack = createStackNavigator<AuthStackParamList>();

export function AuthStackRoutes() {
  return (
    <AuthStack.Navigator initialRouteName="WelcomeScreen">
      <AuthStack.Screen name="MainPageScreen" component={MainPageScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="MailConfirmationScreen" component={MailConfirmationScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="NewAccountScreen" component={NewAccountScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}
