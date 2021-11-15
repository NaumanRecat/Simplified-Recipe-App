import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Splash } from '../screens/Splash';
import {Login} from '../screens/Login';
import { Signup } from '../screens/Signup';
import { Profile } from '../screens/Profile';
import { Friend } from '../screens/Friend';



const Stack = createNativeStackNavigator();

export const ScreenNavigator =()=>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Friend" component={Friend}  options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={Profile}  options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
      <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}