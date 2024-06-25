import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {dark_logo} from '../../assets/images';
import {Rows} from './rows';
import {List} from '../profile/list';
import {buttonStyles} from '../../theme/ButtonStyle';
import CodeInput from '../../components/CodeInput';
import PinInput from '../../components/PinInput';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const SetTransactionPin = () => {
  const [mode, setMode] = useState('new');
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  useEffect(() => {
    if (pin.length === 6) setMode('confirm');
  }, [pin]);

  return (
    <Container style={{backgroundColor: lightTheme.WHITE_COLOR}}>
      <View style={{backgroundColor: lightTheme.CREAM, height: 60}} />
      <StatusBar
        backgroundColor={lightTheme.CREAM}
        barStyle="dark-content"
        translucent
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: lightTheme.CREAM,
          paddingVertical: 20,
          paddingHorizontal: 20,
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
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text
            style={{
              color: lightTheme.BLACK_TEXT_COLOR,
              fontFamily: font.SEMI_BOLD,
              fontSize: 22,
            }}>
            Set Transactions PIN
          </Text>
        </View>
        <Image
          style={{height: 32, width: 32, borderRadius: 25}}
          source={dark_logo}
        />
      </View>
      <Content style={{marginTop: 20}}>
        <View style={[styles.container, {marginBottom: 40}]}>
          <View
            style={{
              flex: 1,
              height: Dimensions.get('window').height - 270,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: lightTheme.NEUTRAL_MAIN,
              }}>
              {mode === 'new'
                ? 'Enter new transactions PIN below'
                : 'Confirm new PIN'}
            </Text>
            <View style={{marginTop: 20}}>
              {mode === 'new' ? (
                <PinInput pin={pin} onChangeText={txt => setPin(txt)} />
              ) : (
                <PinInput
                  pin={confirmPin}
                  onChangeText={txt => setConfirmPin(txt)}
                />
              )}
            </View>
          </View>
          {mode === 'confirm' && (
            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('AuthSuccess', {
                    description:
                      'Well done! Transactions PIN has been created successfully',
                    screen: 'SignIn',
                  })
                }
                style={[buttonStyles.primaryButtonStyle]}>
                <Text style={[buttonStyles.primaryActionButtonTextStyle]}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Content>
    </Container>
  );
};

export default SetTransactionPin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  mainbody: {
    flex: 1,
  },
});

const items = [
  {
    name: 'Share receipt',
    icon_name: 'sharealt',
    icon_type: 'ant-design',
    number: '40',
  },
  {
    name: 'Report an issue',
    icon_name: 'info-outline',
    icon_type: 'material',
    number: '40',
  },
];
