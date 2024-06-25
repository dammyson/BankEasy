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

const NewPassword = ({route}) => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
                New Password
              </Text>
            </View>
          </View>

          <View style={{flex: 1}}>
            <Text
              style={{
                color: lightTheme.BLACK_TEXT_COLOR,
                fontFamily: font.REGULAR,
                fontSize: 16,
                marginBottom: 20,
                marginTop: 30,
                marginLeft: 20,
                marginRight: 20,
              }}>
              Choose a very strong password that is easy for you to remember but
              hard for others to guess.
            </Text>
            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
                justifyContent: 'flex-start',
              }}>
              <Text style={styles.inputLabel}>Create Password </Text>
            </View>

            <View style={styles.textInputContainer}>
              <View style={styles.input}>
                <TextInput
                  placeholder="Create a new password"
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
                marginLeft: 20,
                marginRight: 20,
                justifyContent: 'flex-start',
              }}>
              <Text style={styles.inputLabel}>Confirm Password </Text>
            </View>

            <View style={styles.textInputContainer}>
              <View style={styles.input}>
                <TextInput
                  placeholder="Confirm your new password"
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
                  onChangeText={text => setConfirmPassword(text)}
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
          </View>

          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AuthSuccess', {
                  description:
                    'Great! New account password has been created successfully',
                  screen: 'SetTransactionPin',
                })
              }
              style={[buttonStyles.primaryButtonStyle]}>
              <Text style={[buttonStyles.primaryActionButtonTextStyle]}>
                Create New Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    height:
      Dimensions.get('window').height - Dimensions.get('window').height / 10,
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
