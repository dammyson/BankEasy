import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './profile';
import Beneficiaries from './Beneficiaries';
import BeneficiaryFields from './BeneficiaryFields';
import ResetPin from './ResetPin';

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
      <Stack.Screen name="Beneficiaries" component={Beneficiaries} />
      <Stack.Screen name="BeneficiaryFields" component={BeneficiaryFields} />
      <Stack.Screen name="ResetPin" component={ResetPin} />
    </Stack.Navigator>
  );
};

export default Route;
