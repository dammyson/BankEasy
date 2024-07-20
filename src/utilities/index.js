const env = 'PROD';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage, hideMessage} from 'react-native-flash-message';

export const showTopNotification = (type, message, duration = 2) => {
  showMessage({
    message: message,
    type: type,
    duration: duration * 1000,
    icon: type,
  });
};

export const getToken = async () => {
  let token = await AsyncStorage.getItem('token');
  return token;
};

export const getUser = async () => {
  let user = await AsyncStorage.getItem('user');
  return user;
};

export const formatAmount = (num = '', separator = ',') => {
  if (num) {
    const formattedNum = parseFloat(num).toFixed(2);

    const withSeparator = formattedNum.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      separator,
    );

    return `${withSeparator}`;
  }
  return '0.00';
};
