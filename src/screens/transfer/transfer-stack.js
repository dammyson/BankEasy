import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Transfer from './transfer';
import TransactionInputDetails from './transferInputDetails';

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
      <Stack.Screen
        name="TransferInputDetails"
        component={TransactionInputDetails}
      />
    </Stack.Navigator>
  );
};

export default Route;
