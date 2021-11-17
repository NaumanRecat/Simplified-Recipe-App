import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {DashboardDrawer} from '../screens/dashboard/DashboardDrawer';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {List} from '../screens/list';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Recipe} from '../screens/Recipe';
import {Profile} from '../screens/Profile';
import { RecipeDes } from '../screens/RecipeDes';
import {Friend} from '../screens/Friend';
import {Login} from '../screens/Login';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'silver',
        labelStyle: {
          fontSize: h('1.8%'),
        },
      }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />

<Tab.Screen
        name="RecipeDes"
        component={RecipeDes}
        options={{
          headerShown: false,
          tabBarLabel: 'RecipeDes',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />

<Tab.Screen
        name="Friend"
        component={Friend}
        options={{
          headerShown: false,
          tabBarLabel: 'Friend',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />

<Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarLabel: 'Login',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />

<Tab.Screen
        name="Recipe"
        component={Recipe}
        options={{
          headerShown: false,
          tabBarLabel: 'Recipe',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />

      
    </Tab.Navigator>
  );
};