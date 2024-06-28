import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  PixelRatio,
  Image,
  Alert,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font, transferHistory} from '../../constants';
import {Container, Content} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {location, monie_point, no_transaction} from '../../assets/images';
import {TransferList} from './transferList';
import {Cards} from '../../components/Card';
import {Location} from '../../assets/svgs/General';
import {getToken} from '../../utilities';
import {baseUrl, processResponse} from '../../utilities/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);

  getToken().then(value => {
    setToken(value);
  });

  useEffect(() => {
    if (token !== null) {
      getProfile();
    }
  }, [token]);

  const getProfile = useCallback(() => {
    setLoading(true);
    fetch(baseUrl() + '/auth/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(processResponse)
      .then(res => {
        const {statusCode, data} = res;
        if (statusCode === 200) {
          setLoading(false);
          AsyncStorage.setItem('user', JSON.stringify(data?.data));
          setProfile(data?.data);
        } else if (statusCode === 422) {
          setLoading(false);
          Alert.alert('Validation failed', data?.message, [{text: 'Okay'}]);
          setProfile(null);
        } else {
          setLoading(false);
          Alert.alert('Operation failed', data?.message, [{text: 'Okay'}]);
          setProfile(null);
        }
      })
      .catch(error => {
        console.log('Api call error');
        console.warn(error);
        setLoading(false);
        Alert.alert(error.message);
        setProfile(null);
      });
  }, [token]);

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
          borderWidth: 1,
          borderColor: lightTheme.BORDER_MAIN,
          marginHorizontal: 15,
          marginTop: 45,
          paddingVertical: 20,
          borderRadius: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: lightTheme.WHITE_COLOR,
            borderBottomWidth: 1,
            borderBottomColor: lightTheme.BORDER_MAIN,
          }}>
          <View
            style={{
              backgroundColor: lightTheme.WHITE_COLOR,
              marginBottom: 10,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 15,
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{fontSize: 16, fontWeight: 400}}>Welcome, </Text>
              <Text style={{fontWeight: 700, fontSize: 16}}>
                {profile?.firstName} {profile?.lastName}
              </Text>
            </View>
            <Image
              style={{height: 32, width: 32, borderRadius: 25}}
              source={monie_point}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
            marginTop: 10,
            paddingHorizontal: 15,
          }}>
          <Image style={{height: 24, width: 14}} source={location} />
          <View>
            <Text style={{fontWeight: 500, fontSize: 13}}>
              Moniepoint Microfinance Bank
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: lightTheme.NEUTRAL_MAIN,
                marginTop: 2,
              }}>
              Head Office, Oyo-Ibadan Road, Idi-Agba, Ilora, Oyo
            </Text>
          </View>
        </View>
      </View>
      <Cards card={styles.card} dark={true} />
      <View style={styles.transferContainer}>
        <View style={styles.transferHeader}>
          <Text style={{fontSize: 18, fontWeight: 600}}>Transfer History</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('TransactionHistory')}
            style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <Text
              style={{color: lightTheme.ORANGE, fontSize: 14, fontWeight: 600}}>
              See all
            </Text>
            <Icon
              active
              size={12}
              name="right"
              type="antdesign"
              color={lightTheme.ORANGE}
            />
          </TouchableOpacity>
        </View>
        <Content
          style={{
            marginTop: 15,
            borderTopWidth: 1,
            borderColor: !transferHistory
              ? 'transparent'
              : lightTheme.BORDER_MAIN,
          }}>
          {!transferHistory ? (
            <View style={styles.transferTable}>
              <Image
                style={{
                  maxWidth: 170,
                  marginHorizontal: 'auto',
                  objectFit: 'contain',
                }}
                source={no_transaction}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  color: lightTheme.NEUTRAL_MAIN,
                  lineHeight: 24,
                }}>
                Transactions history is empty. Records of all recent
                transactions will be listed here.
              </Text>
            </View>
          ) : (
            <View style={{marginBottom: 40}}>
              {transferHistory.map((item, index) => (
                <TransferList key={index} item={item} />
              ))}
            </View>
          )}
        </Content>
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  transferContainer: {
    flex: 1,
    marginHorizontal: 22,
    marginTop: 40,
  },
  transferHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transferTable: {
    borderWidth: 1,
    borderColor: lightTheme.BORDER_MAIN,
    borderRadius: 14,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 25,
    minHeight: Dimensions.get('window').height / 2.8,
  },
  card: {
    backgroundColor: '#000',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 14,
    padding: 20,
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#cacccb80',
    borderRadius: 15,
    resizeMode: 'contain',
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
