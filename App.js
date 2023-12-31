import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/core/theme';
import {
  StartScreen,
  LoginScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens';
import InformationScreen from './src/screens/InformationScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import ContactAdminScreen from './src/screens/ContactAdminScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false, 
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="InformationScreen" component={InformationScreen} />
          <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
          <Stack.Screen name="ContactAdminScreen" component={ContactAdminScreen} />
        </Stack.Navigator>
        
      </NavigationContainer>
    </PaperProvider>
  );
}
