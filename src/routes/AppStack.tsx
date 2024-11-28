import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MainPageScreen from '../screens/MainPageScreen';
import { AppStackParamList } from './AppStackParamList';
import CalendarScreen from '../screens/CalendarScreen';
import PatientsScreen from '../screens/PatientsScreen';
import TreatmentListScreen from '../screens/TreatmentListScreen';

const AppStack = createStackNavigator<AppStackParamList>();

export function AppStackRoutes(){
    return (
        <AppStack.Navigator initialRouteName='MainPageScreen'>
            <AppStack.Screen name="MainPageScreen" component={MainPageScreen} options={{ headerShown: false }} />
            <AppStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            <AppStack.Screen name="NotificationsScreen" component={NotificationsScreen} options={{ headerShown: false }} />
            <AppStack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
            <AppStack.Screen name="TreatmentListScreen" component={TreatmentListScreen} options={{ headerShown: false }} />
            <AppStack.Screen name="PatientsScreen" component={PatientsScreen} options={{ headerShown: false }} />
            <AppStack.Screen name="CalendarScreen" component={CalendarScreen} options={{ headerShown: false }} />
        </AppStack.Navigator>
    );
}