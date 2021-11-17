import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Splash } from '../screens/Splash';
import {Login} from '../screens/Login';
import { Signup } from '../screens/Signup';
import { Profile } from '../screens/Profile';
import { Friend } from '../screens/Friend';
import {Recipe} from '../screens/Recipe';
import { RecipeDes } from '../screens/RecipeDes';
import { TabNavigator } from './TabNavigator';
import {Cooking} from '../screens/Cooking';
import { RecipeUpload } from '../screens/RecipeUpload';
import {Recipeuploadfinal} from '../screens/Recipeuploadfinal';



const Stack = createNativeStackNavigator();

export const ScreenNavigator =()=>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
      <Stack.Screen name="Recipeuploadfinal" component={Recipeuploadfinal}  options={{headerShown:false}} />
      <Stack.Screen name="RecipeUpload" component={RecipeUpload}  options={{headerShown:false}} />
      <Stack.Screen name="Cooking" component={Cooking}  options={{headerShown:false}} />
      <Stack.Screen name="TabNavigator" component={TabNavigator}  options={{headerShown:false}} />
      <Stack.Screen name="RecipeDes" component={RecipeDes}  options={{headerShown:false}} />
      <Stack.Screen name="Recipe" component={Recipe}  options={{headerShown:false}} />
      <Stack.Screen name="Friend" component={Friend}  options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={Profile}  options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}} />
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}