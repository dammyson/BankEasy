import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
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
import {mini_logo, signin} from '../../assets/images';
import {buttonStyles} from '../../theme/ButtonStyle';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import {textInputStyles} from '../../theme/TextInputStyle';
import Checkbox from '../../components/CheckBox';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl, processResponse} from '../../utilities/api';
import {useDispatch} from 'react-redux';
import {CustomLoader} from '../../components/CustomLoader';

const SignIn = ({route}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isValidMail, setIsValidMail] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const validate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      setIsValidMail(false);
      phoneValidation(text);
      return false;
    } else {
      setEmail(text);
      setIsValidMail(true);
    }
  };

  const phoneValidation = param => {
    let reg = /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?)?[\d\-.\s]{7,}$/;
    if (reg.test(param) === false) {
      setPhone(param);
      setIsValidPhone(false);
    } else {
      setPhone(param);
      setIsValidPhone(true);
    }
  };

  const signInRequest = () => {
    if (!isValidMail) {
      Alert.alert(
        'Validation failed',
        'Invalid email check the email and try again',
        [{text: 'Okay'}],
      );
      return;
    } else {
      if (password === '') {
        Alert.alert('Validation failed', 'Phone number is invalid', [
          {text: 'Okay'},
        ]);
      } else {
        setLoading(true);

        let emailData = JSON.stringify({
          email: email,
          password: password,
          appVersion: 'v2.2.1',
          fcmToken: 'fcmToken',
        });
        let phoneData = JSON.stringify({
          phoneNumber: phone,
          password: password,
          appVersion: 'v2.2.1',
          fcmToken: 'fcmToken',
        });

        fetch(baseUrl() + '/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: isValidMail ? emailData : isValidPhone ? phoneData : null,
        })
          .then(processResponse)
          .then(res => {
            const {statusCode, data} = res;
            if (statusCode === 200) {
              setLoading(false);
              setEmail('');
              setPassword('');
              setPhone('');
              AsyncStorage.setItem('token', data?.data.accessToken);
              navigation.navigate('Home');
              setIsValidMail(false);
            } else if (statusCode === 422) {
              setLoading(false);
              Alert.alert('Validation failed', data.message, [{text: 'Okay'}]);
              AsyncStorage.setItem('token', '');
            } else {
              setLoading(false);
              Alert.alert(
                data?.message,
                'Please check your email or password and retry',
                [{text: 'Okay'}],
              );
              AsyncStorage.setItem('token', '');
            }
          })
          .catch(error => {
            console.log('Api call error');
            console.warn(error);
            setLoading(false);
            Alert.alert(error.message);
            AsyncStorage.setItem('token', '');
          });
      }
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <Image
            style={{
              height: Dimensions.get('window').height / 3,
              width: Dimensions.get('window').width,
            }}
            source={signin}
          />
          <Content>
            <View style={styles.container}>
              <View
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 15,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    color: lightTheme.BLACK_TEXT_COLOR,
                    fontFamily: font.BOLD,
                    fontSize: 24,
                    marginBottom: 2,
                    marginTop: 2,
                  }}>
                  Welcome!
                </Text>
                <Text
                  style={{
                    color: lightTheme.BLACK_TEXT_COLOR,
                    fontFamily: font.REGULAR,
                    fontSize: 16,
                    marginBottom: 2,
                    marginTop: 10,
                  }}>
                  Enjoy easy banking by signing In
                </Text>
              </View>

              <View style={{flex: 1}}>
                <View
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                    justifyContent: 'flex-start',
                  }}>
                  <Text style={styles.inputLabel}>Email/Phone Number </Text>
                </View>

                <View style={styles.textInputContainer}>
                  <View style={styles.input}>
                    <TextInput
                      placeholder="Enter your Email or Phone Number "
                      placeholderTextColor={lightTheme.PRIMARY_TEXT_COLOR}
                      returnKeyType="next"
                      keyboardType="default"
                      autoCapitalize="none"
                      autoCorrect={false}
                      defaultValue={email}
                      style={{
                        flex: 1,
                        fontSize: 14,
                        color: lightTheme.PRIMARY_TEXT_COLOR,
                        fontFamily: font.REGULAR,
                      }}
                      onChangeText={text => validate(text)}
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

                <View
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                    justifyContent: 'flex-start',
                  }}>
                  <Text style={styles.inputLabel}>Password </Text>
                </View>

                <View style={styles.textInputContainer}>
                  <View style={styles.input}>
                    <TextInput
                      placeholder="Enter your Password"
                      placeholderTextColor={lightTheme.PRIMARY_TEXT_COLOR}
                      returnKeyType="next"
                      keyboardType="default"
                      autoCapitalize="none"
                      autoCorrect={false}
                      defaultValue={password}
                      style={{
                        flex: 1,
                        fontSize: 14,
                        color: lightTheme.PRIMARY_TEXT_COLOR,
                        fontFamily: font.REGULAR,
                      }}
                      onChangeText={text => setPassword(text)}
                    />
                  </View>
                  <View style={textInputStyles.operation_icon}>
                    <Icon
                      name="eye-outline"
                      type="material-community"
                      color="grey"
                      size={20}
                    />
                  </View>
                </View>
                <View
                  style={{
                    marginRight: 20,
                    marginLeft: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Checkbox
                    isChecked={checked}
                    text="Remember password"
                    onPress={() => setChecked(!checked)}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={{color: lightTheme.ORANGE, fontWeight: 500}}>
                      Forgot Password
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  marginBottom: 10,
                }}>
                <TouchableOpacity
                  onPress={() => signInRequest()}
                  style={[buttonStyles.primaryButtonStyle]}>
                  <Text style={[buttonStyles.primaryActionButtonTextStyle]}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Content>
        </>
      )}
    </Container>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    height:
      Dimensions.get('window').height - Dimensions.get('window').height / 2.8,
    width: Dimensions.get('window').width,
    backgroundColor: '#FFF',
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
