import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {buttonStyles} from '../../theme/ButtonStyle';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import {textInputStyles} from '../../theme/TextInputStyle';
import {CustomInput} from '../../components/CustomInput';
import {Eye, HideEye} from '../../assets/svgs/General';
import {useDispatch} from 'react-redux';
import {baseUrl, processResponse} from '../../utilities/api';
import {HIDE_LOADER, SHOW_LOADER} from '../../actions/loaderAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const SignUp = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [secureTextEntry2, setSecureTextEntry2] = useState(false);
  const [isValidMail, setIsValidMail] = useState(false);

  const dispatch = useDispatch();

  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const updateSecureTextEntry2 = () => {
    setSecureTextEntry2(!secureTextEntry2);
  };

  const validate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      setEmail(text);
      setIsValidMail(false);
      return false;
    } else {
      setEmail(text);
      setIsValidMail(true);
    }
  };

  const signUpRequest = () => {
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
        dispatch(SHOW_LOADER('Signing up'));

        let formData = JSON.stringify({
          password: password,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
          countryCode: '+234',
          role: 'ROLE_CUSTOMER',
        });

        fetch(baseUrl() + '/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: formData,
        })
          .then(processResponse)
          .then(res => {
            dispatch(HIDE_LOADER());

            const {statusCode, data} = res;
            if (statusCode === 200) {
              navigation.navigate('SignIn');
              setIsValidMail(false);
              Alert.alert('Success', 'Account creation successful', [
                {text: 'Okay', onPress: () => navigation.navigate('SignIn')},
              ]);
            } else if (statusCode === 400) {
              Alert.alert('Validation failed', data?.responseMessage, [
                {text: 'Okay'},
              ]);
              AsyncStorage.setItem('token', '');
            } else {
              Alert.alert(
                'Validation failed',
                'Please check the details you inputted',
                [{text: 'Okay'}],
              );
              AsyncStorage.setItem('token', '');
            }
          })
          .catch(error => {
            console.log('Api call error');
            console.warn(error);
            Alert(error.message);
            AsyncStorage.setItem('token', '');
            dispatch(HIDE_LOADER());
          });
      }
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
                Sign Up
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              justifyContent: 'flex-start',
              marginBottom: 40,
              marginTop: 5,
            }}>
            <Text
              style={{
                color: lightTheme.BLACK_TEXT_COLOR,
                fontFamily: font.REGULAR,
                fontSize: 16,
                marginBottom: 2,
                marginTop: 10,
              }}>
              Enjoy easy banking by signing up
            </Text>
          </View>
          <ScrollView>
            <View style={{flex: 1}}>
              <CustomInput
                mainClass={{marginVertical: 8, position: 'relative'}}
                labelClass={{
                  marginHorizontal: 20,
                  fontFamily: font.MEDIUM,
                  marginBottom: 8,
                  fontSize: 14,
                  color: lightTheme.LABEL_TEXT,
                }}
                label={'First name'}
                placeholder={'Enter first name'}
                placeholderColor={lightTheme.PRIMARY_TEXT_COLOR}
                value={firstName}
                getValue={val => setFirstName(val)}
                inputClass={styles.customInputContainer}
              />
              <CustomInput
                mainClass={{marginVertical: 8, position: 'relative'}}
                labelClass={{
                  marginHorizontal: 20,
                  fontFamily: font.MEDIUM,
                  marginBottom: 8,
                  fontSize: 14,
                  color: lightTheme.LABEL_TEXT,
                }}
                label={'Last name'}
                placeholder={'Enter last name'}
                placeholderColor={lightTheme.PRIMARY_TEXT_COLOR}
                value={lastName}
                getValue={val => setLastName(val)}
                inputClass={styles.customInputContainer}
              />
              <CustomInput
                mainClass={{marginVertical: 8, position: 'relative'}}
                labelClass={{
                  marginHorizontal: 20,
                  fontFamily: font.MEDIUM,
                  marginBottom: 8,
                  fontSize: 14,
                  color: lightTheme.LABEL_TEXT,
                }}
                label={'Email address'}
                placeholder={'Enter your email address'}
                placeholderColor={lightTheme.PRIMARY_TEXT_COLOR}
                value={email}
                getValue={val => validate(val)}
                inputClass={styles.customInputContainer}
                type={'email-address'}
              />
              <CustomInput
                mainClass={{marginVertical: 8, position: 'relative'}}
                labelClass={{
                  marginHorizontal: 20,
                  fontFamily: font.MEDIUM,
                  marginBottom: 8,
                  fontSize: 14,
                  color: lightTheme.LABEL_TEXT,
                }}
                label={'Phone number'}
                type={'number'}
                placeholder={'Enter your phone number'}
                placeholderColor={lightTheme.PRIMARY_TEXT_COLOR}
                value={phoneNumber}
                getValue={val => setPhoneNumber(val)}
                inputClass={styles.customInputContainer}
                icon={
                  <Icon
                    name="phone-outline"
                    type="material-community"
                    color="grey"
                    size={20}
                  />
                }
                iconClass={{position: 'absolute', right: 30, top: 45}}
              />
              <CustomInput
                mainClass={{marginVertical: 8, position: 'relative'}}
                labelClass={{
                  marginHorizontal: 20,
                  fontFamily: font.MEDIUM,
                  marginBottom: 8,
                  fontSize: 14,
                  color: lightTheme.LABEL_TEXT,
                }}
                label={'Password'}
                placeholder={'Enter your password'}
                placeholderColor={lightTheme.PRIMARY_TEXT_COLOR}
                value={password}
                getValue={val => setPassword(val)}
                inputClass={styles.customInputContainer}
                icon={secureTextEntry ? <Eye /> : <HideEye />}
                iconClass={{position: 'absolute', right: 30, top: 45}}
                secureTextEntry={secureTextEntry}
                onIconPress={updateSecureTextEntry}
              />
              <CustomInput
                mainClass={{marginVertical: 8, position: 'relative'}}
                labelClass={{
                  marginHorizontal: 20,
                  fontFamily: font.MEDIUM,
                  marginBottom: 8,
                  fontSize: 14,
                  color: lightTheme.LABEL_TEXT,
                }}
                label={'Confirm password'}
                placeholder={'Confirm your password'}
                placeholderColor={lightTheme.PRIMARY_TEXT_COLOR}
                value={confirmPassword}
                getValue={val => setConfirmPassword(val)}
                inputClass={styles.customInputContainer}
                icon={secureTextEntry2 ? <Eye /> : <HideEye />}
                iconClass={{position: 'absolute', right: 30, top: 45}}
                onIconPress={updateSecureTextEntry2}
                secureTextEntry={secureTextEntry2}
              />
            </View>
          </ScrollView>

          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => signUpRequest()}
              style={[buttonStyles.primaryButtonStyle]}>
              <Text style={[buttonStyles.primaryActionButtonTextStyle]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default SignUp;

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

  customInputContainer: {
    marginRight: 20,
    marginLeft: 20,
    height: 60,
    borderWidth: 1,
    borderColor: lightTheme.OFF_WHITE_COLOR,
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 10,
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
