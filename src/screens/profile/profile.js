import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {dark_logo} from '../../assets/images';
import {List} from './list';
import {globalStyles} from '../../theme/GlobalStyle';
import CustomModal from '../../components/CustomModal';
import {Stopper} from '../../assets/svgs/General';
import {Rows} from '../home/rows';
import {getUser} from '../../utilities';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const Profile = () => {
  const deviceHeight = useWindowDimensions().height;
  const navigation = useNavigation();
  const [modal, setModal] = useState(null);
  const [user, setUser] = useState(null);

  getUser().then(value => {
    setUser(JSON.parse(value));
  });

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
      {user !== null && (
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
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
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
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 600,
              color: lightTheme.BLACK_TEXT_COLOR,
            }}>
            {user?.firstName} {user?.lastName}
          </Text>
        </View>
      )}
      <Content>
        <View style={styles.container}>
          <View style={{marginTop: 20, marginHorizontal: 20, marginBottom: 40}}>
            <View
              style={{
                backgroundColor: lightTheme.NEUTRAL_COLOR,
                borderRadius: 15,
                marginBottom: 20,
              }}>
              {items?.top.map((item, index) => (
                <List
                  key={index}
                  onPress={() => {
                    if (item.page === 'Account') {
                      setModal('account');
                    } else {
                      navigation.navigate(item.page);
                    }
                  }}
                  item={item}
                />
              ))}
            </View>
            <View
              style={{
                backgroundColor: lightTheme.NEUTRAL_COLOR,
                borderRadius: 15,
                marginBottom: 20,
              }}>
              {items?.biometric.map(item => (
                <List item={item} />
              ))}
            </View>
            <View
              style={{
                backgroundColor: lightTheme.NEUTRAL_COLOR,
                borderRadius: 15,
                marginBottom: 20,
              }}>
              {items?.last.map(item => (
                <List
                  onPress={() => navigation.navigate(item.page)}
                  item={item}
                />
              ))}
            </View>
          </View>
        </View>
        {modal === 'account' && (
          <CustomModal
            positionClass={{
              flex: 1,
              justifyContent: 'flex-end',
              backgroundColor: '#000000AA',
              width: '100%',
              alignItems: 'center',
            }}
            handleClick={() => setModal(null)}>
            <View
              style={[
                globalStyles.modalBody,
                {
                  height: deviceHeight * 0.6,
                  borderTopRightRadius: 50,
                  borderTopLeftRadius: 50,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  width: Dimensions.get('window').width,
                  paddingHorizontal: 30,
                  justifyContent: 'flex-start',
                  paddingTop: 15,
                },
              ]}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Stopper />
              </View>
              <View style={{marginVertical: 20}}>
                <Rows
                  textClass={{color: lightTheme.NEUTRAL_300}}
                  description={'BVN'}
                  boldValue={user?.client?.bvn ?? '---'}
                  height={70}
                />
                <Rows
                  textClass={{color: lightTheme.NEUTRAL_300}}
                  description={'Username'}
                  boldValue={user?.username ?? '---'}
                  height={70}
                />
                <Rows
                  textClass={{color: lightTheme.NEUTRAL_300}}
                  description={'Phone Number'}
                  boldValue={user?.phoneNumber ?? '---'}
                  height={70}
                />
                <Rows
                  textClass={{color: lightTheme.NEUTRAL_300}}
                  description={'Account Number'}
                  boldValue={user?.client?.accountNumber ?? '---'}
                  height={70}
                />
                <Rows
                  textClass={{color: lightTheme.NEUTRAL_300}}
                  description={'Account Name'}
                  boldValue={user?.firstName + ' ' + user?.lastName ?? '---'}
                  height={70}
                />
                <Rows
                  textClass={{color: lightTheme.NEUTRAL_300}}
                  description={'Account type'}
                  boldValue={'Savings account'}
                  height={70}
                />
              </View>
            </View>
          </CustomModal>
        )}
      </Content>
    </Container>
  );
};

export default Profile;

const items = {
  top: [
    // {
    //   name: 'Beneficiaries',
    //   icon_name: 'clipboard-text-outline',
    //   icon_type: 'material-community',
    //   number: '40',
    //   page: 'Beneficiaries',
    // },
    {
      name: 'Reset Pin',
      icon_name: 'lock-outline',
      icon_type: 'material',
      number: '40',
      page: 'ResetPin',
    },
    {
      name: 'Account details',
      icon_name: 'user',
      icon_type: 'feather',
      number: '35',
      page: 'Account',
    },
    {
      name: 'Generate statement',
      icon_name: 'clipboard',
      icon_type: 'entypo',
      number: '22',
      page: 'Statement',
    },
  ],
  biometric: [
    {
      name: 'Biometric login',
      icon_name: 'car-light-dimmed',
      icon_type: 'material-community',
      number: '22',
    },
    {
      name: 'Biometric transactions',
      icon_name: 'scan1',
      icon_type: 'ant-design',
      number: '22',
    },
  ],
  last: [
    {
      name: 'Support',
      icon_name: 'chat',
      icon_type: 'material',
      number: '22',
      page: 'Support',
    },
    {
      name: 'Log Out ',
      icon_name: 'exit-outline',
      icon_type: 'ionicon',
      number: '40',
      page: 'SignIn',
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
