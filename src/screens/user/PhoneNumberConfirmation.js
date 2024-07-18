import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {buttonStyles} from '../../theme/ButtonStyle';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import CodeInput from '../../components/CodeInput';

const PhoneNumberConfirmation = ({route}) => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [counterId, setCounterId] = useState(null);

  const {phoneNumber} = route.params;

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
                  fontSize: 20,
                  marginBottom: 2,
                }}>
                Confirm your Phone Number
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
              An OTP has been sent to your number ending in{' '}
              {`*${phoneNumber.slice(-4)}`} enter it to reset your password
            </Text>
          </View>

          <View style={{flex: 1}}>
            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
                justifyContent: 'flex-start',
                marginBottom: 5,
              }}>
              <Text style={styles.inputLabel}>Enter code </Text>
            </View>
            <View style={{}}>
              <CodeInput onChangeText={txt => setCode(txt)} />
            </View>
            <View
              style={{
                marginRight: 20,
                marginLeft: 20,
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => setCounterId(2 * Math.random())}>
                <Text
                  style={{
                    color: lightTheme.ORANGE,
                    fontWeight: 500,
                    textDecorationLine: 'underline',
                  }}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#DADADA', fontWeight: 500, fontSize: 16}}>
                  Expires in
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginLeft: 20, marginRight: 20, marginBottom: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ResetPassword')}
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

export default PhoneNumberConfirmation;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 100,
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
