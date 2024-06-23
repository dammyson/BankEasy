import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Transfer from './transfer';
import TransactionInputDetails from './transferInputDetails';
import TransferAuthentication from './transferAuthentication';
import TransactionConfirmation from './transactionConfirmation';
import SelectBill from '../billPayments/selectBill';
import Airtime from '../billPayments/Airtime';
import Utilities from '../billPayments/Utilities';
import Industry from '../billPayments/Industry';

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
      <Stack.Screen
        name="TransferAuthentication"
        component={TransferAuthentication}
      />
      <Stack.Screen
        name="TransactionConfirmation"
        component={TransactionConfirmation}
      />
      <Stack.Screen name="SelectBill" component={SelectBill} />
      <Stack.Screen name="Airtime" component={Airtime} />
      <Stack.Screen name="Utilities" component={Utilities} />
      <Stack.Screen name="Industry" component={Industry} />
    </Stack.Navigator>
  );
};

export default Route;
