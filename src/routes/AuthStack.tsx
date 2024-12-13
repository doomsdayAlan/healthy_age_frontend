import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import MailConfirmationScreen from '../screens/MailConfirmationScreen';
import NewAccountScreen from '../screens/NewAccountScreen';
import { AuthStackParamList } from './AuthStackParamList';
import MainPageScreen from '../screens/MainPageScreen';
import CalendarScreen from '../screens/CalendarScreen';
import PatientsScreen from '../screens/PatientsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TreatmentListScreen from '../screens/TreatmentListScreen';
import TreatmentListDetails from '../screens/TreatmentDetailsScreen';

const AuthStack = createStackNavigator<AuthStackParamList>();

export function AuthStackRoutes() {
  return (
    <AuthStack.Navigator initialRouteName="WelcomeScreen">
      <AuthStack.Screen name="MainPageScreen" component={MainPageScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="MailConfirmationScreen" component={MailConfirmationScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="NewAccountScreen" component={NewAccountScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="TreatmentListScreen" component={TreatmentListScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="PatientsScreen" component={PatientsScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="CalendarScreen" component={CalendarScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="TreatmentDetailsScreen" component={TreatmentListDetails} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}
