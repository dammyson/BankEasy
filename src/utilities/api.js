import {showMessage, hideMessage} from 'react-native-flash-message';

const env = 'PROD';
const authHost =
  env == 'ENV'
    ? 'https://safe-taiga-11178-7858f8c289ac.herokuapp.com/bankeasy-core-web/api'
    : 'https://safe-taiga-11178-7858f8c289ac.herokuapp.com/bankeasy-core-web/api';

export const baseUrl = () => {
  return authHost;
};

export const showTopNotification = (type, message, duration = 2) => {
  showMessage({
    message: message,
    type: type,
    duration: duration * 1000,
    icon: type,
  });
};

export const processResponse = response => {
  const statusCode = response.status;
  const data = response.json();
  return Promise.all([statusCode, data]).then(res => ({
    statusCode: res[0],
    data: res[1],
  }));
};
