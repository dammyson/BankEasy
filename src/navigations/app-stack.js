import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/onBoarding/Splash';
import Welcome from '../screens/onBoarding/Welcome';
import SignInCode from '../screens/user/Login';
import SignIn from '../screens/user/SignIn';
import ForgotPassword from '../screens/user/ForgotPassword';
import PhoneNumberConfirmation from '../screens/user/PhoneNumberConfirmation';
import ResetPassword from '../screens/user/ResetPassword';
import ExistingAccounts from '../screens/accounts/ExistingAccounts';
import BottomTab from '../screens/TabsNavigation';
import PasswordSetup from '../screens/user/PasswordSetup';
import NewPassword from '../screens/user/NewPassword';
import SetTransactionPin from '../screens/user/SetTransactionPin';
import AuthSuccess from '../screens/user/AuthSuccess';
import SignUp from '../screens/user/SignUp';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerTintColor: 'white',
          headerShown: false,
        }}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignInCode" component={SignInCode} />
        <Stack.Screen name="PasswordSetup" component={PasswordSetup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="AuthSuccess" component={AuthSuccess} />
        <Stack.Screen name="SetTransactionPin" component={SetTransactionPin} />
        <Stack.Screen
          name="PhoneNumberConfirmation"
          component={PhoneNumberConfirmation}
        />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ExistingAccounts" component={ExistingAccounts} />
        <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
