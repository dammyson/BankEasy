import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  PixelRatio,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';
import {Container} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

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
      <View style={{backgroundColor: lightTheme.WHITE_COLOR, height: 30}} />
      <StatusBar
        backgroundColor={lightTheme.WHITE_COLOR}
        barStyle="dark-content"
        translucent
      />
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          marginHorizontal: 20,
          backgroundColor: lightTheme.WHITE_COLOR,
          marginTop: 25,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 5,
            marginRight: 5,
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              borderRadius: 30,
              shadowColor: 'gray',
              backgroundColor: '#cacccb50',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              active
              name="user"
              type="antdesign"
              size={22}
              color={lightTheme.BLACK_TEXT_COLOR}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: lightTheme.WHITE_COLOR,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            flex: 1,
          }}>
          <Text style={{fontFamily: 'Sacramento-Regular', fontSize: 40}}>
            Hylla-fakjdja
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: '100%',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#cacccb80',
    borderRadius: 15,
  },
  logo_sm: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    resizeMode: 'contain',
    borderWidth: 2,
    borderRadius: 15,
  },
  mainbody: {
    flex: 1,
  },
  boxWithShadow: {
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 6, //yoza.ova@ yoza4242
  },
  title: {
    fontFamily: font.BOLD,
    marginBottom: 10,
    fontSize: 16,
  },
  active: {
    backgroundColor: lightTheme.WHITE_COLOR,
    flex: 1,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activetext: {
    color: lightTheme.PRIMARY_COLOR,
    fontSize: 14,
    textAlign: 'left',
    fontFamily: font.BOLD,
  },
  inactivetext: {
    color: lightTheme.BLACK_TEXT_COLOR,
    fontSize: 14,
    textAlign: 'left',
    fontFamily: font.BOLD,
  },

  numberContainer: {
    borderRadius: 20,
    marginLeft: 10,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  numtext: {
    fontSize: 14,
    textAlign: 'left',
    fontFamily: font.BOLD,
  },
  fab: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    height: 60,
    // width: 60,
    borderRadius: 200,
    position: 'absolute',
    bottom: PixelRatio.get() === 3 ? 90 : 40,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme.PRIMARY_COLOR,
  },
});
