import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Transfer from './transfer';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerTintColor: 'white',
        headerShown: false,
      }}
      initialRouteName="Transfer">
      <Stack.Screen name="Transfer" component={Transfer} />
    </Stack.Navigator>
  );
};

export default Route;
