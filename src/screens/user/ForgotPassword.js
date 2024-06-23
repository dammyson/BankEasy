import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
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
import {textInputStyles} from '../../theme/TextInputStyle';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

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
                  onChangeText={text => setPhoneNumber(text)}
                  onSubmitEditing={() => console.warn('')}
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
              onPress={() => navigation.navigate('PhoneNumberConfirmation')}
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
