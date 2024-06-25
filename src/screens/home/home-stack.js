import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import TransactionHistory from './allTransferHistories';
import TransactionDetails from './TransactionDetail';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerTintColor: 'white',
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
      <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
    </Stack.Navigator>
  );
};

export default Route;
