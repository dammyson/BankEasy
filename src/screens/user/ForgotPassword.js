import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Alert,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {buttonStyles} from '../../theme/ButtonStyle';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import {textInputStyles} from '../../theme/TextInputStyle';
import {baseUrl, processResponse} from '../../utilities/api';
import {useDispatch} from 'react-redux';
import {HIDE_LOADER, SHOW_LOADER} from '../../actions/loaderAction';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);
  const dispatch = useDispatch();

  const phoneValidation = param => {
    let reg = /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?)?[\d\-.\s]{7,}$/;
    if (reg.test(param) === false) {
      setPhoneNumber(param);
      setIsValidPhone(false);
    } else {
      setPhoneNumber(param);
      setIsValidPhone(true);
    }
  };

  const forgotPasswordRequest = () => {
    if (!isValidPhone) {
      Alert.alert('Validation failed', 'Enter a valid phone number', [
        {text: 'Okay'},
      ]);
      return;
    } else {
      dispatch(SHOW_LOADER('Checking phone number'));

      let payload = JSON.stringify({
        phoneNumber: phoneNumber,
        verificationType: 'phoneNumber',
      });

      fetch(baseUrl() + '/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: payload,
      })
        .then(processResponse)
        .then(res => {
          dispatch(HIDE_LOADER());

          const {statusCode, data} = res;
          console.warn(res);
          if (statusCode === 200) {
            navigation.navigate('PhoneNumberConfirmation', {
              phoneNumber: phoneNumber,
            });
          } else if (statusCode === 422) {
            Alert.alert('Validation failed', data.message, [{text: 'Okay'}]);
          } else {
            Alert.alert('Operation failed', data.message, [{text: 'Okay'}]);
          }
        })
        .catch(error => {
          console.log('Api call error');
          console.warn(error);
          Alert(error.message);
          dispatch(HIDE_LOADER());
        });
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Content>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              marginHorizontal: 20,
              backgroundColor: lightTheme.WHITE_COLOR,
              marginTop: 10,
            }}>
            <View
              style={{
                justifyContent: 'center',
                paddingRight: 5,
                marginRight: 5,
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{justifyContent: 'center', width: 30}}>
                <Icon
                  active
                  name="left"
                  type="antdesign"
                  size={22}
                  color={lightTheme.BLACK_TEXT_COLOR}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: lightTheme.BLACK_TEXT_COLOR,
                  fontFamily: font.BOLD,
                  fontSize: 22,
                  marginBottom: 2,
                }}>
                Forgot password
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              justifyContent: 'flex-start',
              marginBottom: 15,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: lightTheme.BLACK_TEXT_COLOR,
                fontFamily: font.REGULAR,
                fontSize: 16,
                marginBottom: 2,
                marginTop: 10,
              }}>
              Enter the phone number tied to your account to reset your password
            </Text>
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
                justifyContent: 'flex-start',
              }}>
              <Text style={styles.inputLabel}>Phone Number </Text>
            </View>

            <View style={styles.textInputContainer}>
              <View style={styles.input}>
                <TextInput
                  placeholder="Enter your Phone Number "
                  placeholderTextColor={lightTheme.PRIMARY_TEXT_COLOR}
                  returnKeyType="next"
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{
                    flex: 1,
                    fontSize: 14,
                    color: lightTheme.PRIMARY_TEXT_COLOR,
                    fontFamily: font.REGULAR,
                  }}
                  onChangeText={text => phoneValidation(text)}
                />
              </View>
              <View style={textInputStyles.operation_icon}>
                <Icon
                  name="phone-outline"
                  type="material-community"
                  color="grey"
                  size={20}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => forgotPasswordRequest()}
              style={[buttonStyles.primaryButtonStyle]}>
              <Text style={[buttonStyles.primaryActionButtonTextStyle]}>
                Enter
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 100,
    width: Dimensions.get('window').width,
    backgroundColor: '#FFF',
    position: 'relative',
  },
  textInputContainer: {
    marginRight: 20,
    marginLeft: 20,
    height: 60,
    marginBottom: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: lightTheme.OFF_WHITE_COLOR,
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 5,
  },

  input: {
    flex: 1,
    marginLeft: 5,
  },
  inputLabel: {
    color: lightTheme.OFF_WHITE_COLOR,
    fontFamily: font.REGULAR,
    fontSize: 14,
    marginBottom: 2,
    marginTop: 2,
  },
});
