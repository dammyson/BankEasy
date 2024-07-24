import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {dark_logo} from '../../assets/images';
import {buttonStyles} from '../../theme/ButtonStyle';
import PinInput from '../../components/PinInput';
import {baseUrl, processResponse} from '../../utilities/api';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const TransferAuthentication = () => {
  const [mode, setMode] = useState('new');
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pin.length === 6) setMode('confirm');
  }, [pin]);

  const processTransfer = param => {
    setLoading(true);
    let nameData = JSON.stringify({
      clientId: 0,
      accountNumber: 'string',
      amount: 0,
      narration: 'string',
      transactionPin: 'string',
      transactionReference: 'string',
    });

    fetch(baseUrl() + '/transfer/internal/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: nameData,
    })
      .then(processResponse)
      .then(res => {
        const {statusCode, data} = res;
        console.warn(res);
        if (statusCode === 200) {
          setLoading(false);
        } else if (statusCode === 422) {
          setLoading(false);
          Alert.alert('Validation failed', data?.message, [{text: 'Okay'}]);
        } else {
          setLoading(false);
          Alert.alert('Operation Failed', data?.message[{text: 'Okay'}]);
        }
      })
      .catch(error => {
        console.log('Api call error');
        console.warn(error);
        setLoading(false);
        Alert.alert(error.message);
      });
  };

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
            Authentication
          </Text>
        </View>
        <Image
          style={{height: 32, width: 32, borderRadius: 25}}
          source={dark_logo}
        />
      </View>
      <Content style={{marginTop: 20}}>
        <View style={[styles.container, {marginBottom: 0}]}>
          <View
            style={{
              flex: 1,
              height: Dimensions.get('window').height - 350,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: lightTheme.NEUTRAL_MAIN,
              }}>
              Enter transactions pin
            </Text>
            <View style={{marginTop: 20}}>
              <PinInput pin={pin} onChangeText={txt => setPin(txt)} />
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
                  description: 'Transfer successful',
                  screen: 'transferSuccess',
                })
              }
              style={[buttonStyles.primaryButtonStyle]}>
              <Text style={[buttonStyles.primaryActionButtonTextStyle]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default TransferAuthentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  mainbody: {
    flex: 1,
  },
});
