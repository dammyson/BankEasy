import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './profile';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerTintColor: 'white',
        headerShown: false,
      }}
      initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Route;
