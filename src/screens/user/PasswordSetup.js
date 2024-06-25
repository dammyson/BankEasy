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
import {logo, user_check, user_rate} from '../../assets/images';
import {buttonStyles} from '../../theme/ButtonStyle';
import {font} from '../../constants';
import {Container, Body, Button, Left, Content} from 'native-base';
import CodeInput from '../../components/CodeInput';
import {textInputStyles} from '../../theme/TextInputStyle';
import {Rows} from '../home/rows';
import {ChevronRight, Key} from '../../assets/svgs/General';

const PasswordSetup = ({route}) => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [code, setCode] = useState('');

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
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: lightTheme.HEADER_MAIN,
                  fontFamily: font.BOLD,
                  fontSize: 24,
                  marginBottom: 2,
                }}>
                Password Setup
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
                color: lightTheme.HEADER_MAIN,
                fontFamily: font.BOLD,
                fontSize: 28,
                marginBottom: 2,
                marginTop: 2,
              }}>
              Almost there!
            </Text>
            <Text
              style={{
                color: lightTheme.NEUTRAL_MAIN,
                fontFamily: font.REGULAR,
                fontSize: 16,
                marginBottom: 2,
                marginTop: 10,
              }}>
              Review account details and setup a secure password.
            </Text>
            <View
              style={{
                backgroundColor: lightTheme.NEUTRAL_COLOR,
                borderRadius: 15,
                marginBottom: 20,
                padding: 20,
                marginTop: 20,
              }}>
              <Rows description={'First Name'} boldValue={'Deji'} />
              <Rows description={'Last Name'} boldValue={'Adeyemi'} />
              <Rows
                noBorder
                description={'Phone Number'}
                boldValue={'08062382748'}
              />
            </View>
            <View
              style={{
                backgroundColor: lightTheme.NEUTRAL_COLOR,
                borderRadius: 15,
                marginBottom: 20,
                padding: 15,
                marginTop: 15,
              }}>
              <Text
                style={{
                  color: lightTheme.NEUTRAL_MAIN,
                  fontSize: 16,
                  fontFamily: font.REGULAR,
                }}>
                To secure your account, set a new password by selecting the
                option below.
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('NewPassword')}
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderBottomWidth: 1,
                  borderBottomColor: lightTheme.BORDER_MAIN,
                  padding: 10,
                }}>
                <View
                  style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                  <Key />
                  <Text
                    style={{
                      fontFamily: font.BOLD,
                      color: lightTheme.HEADER_MAIN,
                      fontSize: 16,
                    }}>
                    Set Password
                  </Text>
                </View>
                <ChevronRight />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default PasswordSetup;

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
