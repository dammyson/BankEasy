import React, {useState} from 'react';
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
import {List} from './list';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const Profile = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

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
            My account
          </Text>
        </View>
        <Image
          style={{height: 32, width: 32, borderRadius: 25}}
          source={dark_logo}
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              backgroundColor: lightTheme.CREAM,
              width: 120,
              height: 120,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 60,
            }}>
            <Text
              style={{
                color: lightTheme.ORANGE,
                fontSize: 60,
                fontWeight: 500,
              }}>
              DA
            </Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 400,
            marginTop: 15,
          }}>
          You are signed in as
        </Text>
        <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 600}}>
          Deji Adeyemi
        </Text>
      </View>
      <Content>
        <View style={styles.container}>
          <View style={{marginTop: 20, marginHorizontal: 20, marginBottom: 40}}>
            <View
              style={{
                backgroundColor: lightTheme.NEUTRAL_COLOR,
                borderRadius: 15,
                marginBottom: 20,
              }}>
              {items.top.map(item => (
                <List item={item} />
              ))}
            </View>
            <View
              style={{
                backgroundColor: lightTheme.NEUTRAL_COLOR,
                borderRadius: 15,
                marginBottom: 20,
              }}>
              {items.biometric.map(item => (
                <List item={item} />
              ))}
            </View>
            <View
              style={{
                backgroundColor: lightTheme.NEUTRAL_COLOR,
                borderRadius: 15,
                marginBottom: 20,
              }}>
              {items.last.map(item => (
                <List item={item} />
              ))}
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Profile;

const items = {
  top: [
    {
      name: 'Beneficiaries',
      icon_name: 'clipboard-text-outline',
      icon_type: 'material-community',
      number: '40',
      page: 'Plan',
    },
    {
      name: 'Reset Pin',
      icon_name: 'lock-outline',
      icon_type: 'material',
      number: '40',
      page: 'EditProfile',
    },
    {
      name: 'Account details',
      icon_name: 'user',
      icon_type: 'feather',
      number: '35',
      page: 'Support',
    },
    {
      name: 'Generate statement',
      icon_name: 'clipboard',
      icon_type: 'entypo',
      number: '22',
      page: 'Privacy',
    },
  ],
  biometric: [
    {
      name: 'Biometric login',
      icon_name: 'car-light-dimmed',
      icon_type: 'material-community',
      number: '22',
      page: 'Terms',
    },
    {
      name: 'Biometric transactions',
      icon_name: 'scan1',
      icon_type: 'ant-design',
      number: '22',
      page: 'Delete',
    },
  ],
  last: [
    {
      name: 'Support',
      icon_name: 'chat',
      icon_type: 'material',
      number: '22',
      page: 'Delete',
    },
    {
      name: 'Log Out ',
      icon_name: 'exit-outline',
      icon_type: 'ionicon',
      number: '40',
      page: 'Login',
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainbody: {
    flex: 1,
  },
});
