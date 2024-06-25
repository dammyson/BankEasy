import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SelectBill from './selectBill';
import Airtime from './Airtime';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerTintColor: 'white',
        headerShown: false,
      }}
      initialRouteName="SelectBill">
      <Stack.Screen name="SelectBill" component={SelectBill} />
      <Stack.Screen name="Airtime" component={Airtime} />
    </Stack.Navigator>
  );
};

export default Route;
