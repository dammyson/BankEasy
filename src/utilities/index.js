
const env = 'PROD';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";


export const showTopNotification = (type, message, duration = 2) => {
  showMessage({
    message: message,
    type: type,
    duration: duration * 1000,
    icon: type
  });
}

