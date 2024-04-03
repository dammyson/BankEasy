import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from '../screens/onBoarding/Splash';
import Welcome from '../screens/onBoarding/Welcome';
import SignInCode from '../screens/user/Login';
import SignIn from '../screens/user/SignIn';


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
          initialRouteName="SignInCode">

          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignInCode" component={SignIn} />


     

        </Stack.Navigator>
      </NavigationContainer>

  );
}


export default Route;