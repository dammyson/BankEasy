import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Text, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import HomeRouter from './home/home-stack';
import TransferRouter from './transfer/transfer-stack';
import ProfileRouter from './profile/profile-stack';
import {font} from '../constants';
import {lightTheme} from '../theme/colors';

const Tab = createBottomTabNavigator();

class AppNavigator extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarStyle: {
              height: 72,
              position: 'absolute',
              borderWidth: 1,
              borderColor: lightTheme.BORDER_MAIN,
              borderRadius: 18,
              bottom: 25,
              paddingVertical: 5,
              marginHorizontal: 50,
              ...Platform.select({
                ios: {
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                },
                android: {
                  elevation: 5,
                },
              }),
            },

            tabBarIcon: ({focused, color}) => {
              if (route.name === 'Home') {
                return (
                  <View
                    style={{
                      marginTop: 25,
                      paddingVertical: 10,
                      width: 90,
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: focused ? lightTheme.TAB_ACTIVE : '#fff',
                      borderRadius: 8,
                    }}>
                    <View
                      style={[
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                      ]}>
                      <Icon
                        active
                        focused={focused}
                        name="home"
                        type="feather"
                        color={color}
                      />
                    </View>
                    <Text
                      numberOfLines={1}
                      style={[styles.text, focused ? {color: '#000'} : null]}>
                      Home
                    </Text>
                  </View>
                );
              } else if (route.name === 'Transfer') {
                return (
                  <View
                    style={{
                      marginTop: 25,
                      paddingVertical: 10,
                      width: 90,
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 8,
                      backgroundColor: focused ? lightTheme.TAB_ACTIVE : '#fff',
                    }}>
                    <View
                      style={[
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 20,
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                      ]}>
                      <Icon
                        active
                        focused={focused}
                        name="arrow-u-right-top"
                        type="material-community"
                        color={color}
                      />
                    </View>
                    <Text
                      numberOfLines={1}
                      style={[styles.text, focused ? {color: '#000'} : null]}>
                      Transfer
                    </Text>
                  </View>
                );
              } else if (route.name === 'Profile') {
                return (
                  <View
                    style={{
                      marginTop: 25,
                      paddingVertical: 10,
                      width: 90,
                      borderRadius: 8,
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: focused ? lightTheme.TAB_ACTIVE : '#fff',
                    }}>
                    <View
                      style={[
                        {
                          width: 30,
                          height: 30,
                          borderRadius: 20,
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                      ]}>
                      <Icon
                        active
                        focused={focused}
                        name="user"
                        type="feather"
                        color={color}
                      />
                    </View>
                    <Text
                      numberOfLines={1}
                      style={[styles.text, focused ? {color: '#000'} : null]}>
                      Profile
                    </Text>
                  </View>
                );
              }
            },
          })}
          tabBarOptions={{
            initialRoute: 'Home',
            activeTintColor: '#00000', //'tomato',
            inactiveTintColor: '#00000050',
            showLabel: false,
            style: {
              height: 60,
            },
          }}>
          <Tab.Screen
            name="Home"
            component={HomeRouter}
            options={{headerShown: false}}
          />
          <Tab.Screen
            navigation={this.props.navigation}
            name="Transfer"
            component={TransferRouter}
            options={{headerShown: false}}
          />
          <Tab.Screen
            navigation={this.props.navigation}
            name="Profile"
            component={ProfileRouter}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </>
    );
  }
}

export default AppNavigator;

const styles = StyleSheet.create({
  text: {
    marginBottom: 4,
    fontSize: 12,
    fontFamily: font.BOLD,
    color: lightTheme.INACTIVE_TAB,
  },
  tabStyle: {},
});
