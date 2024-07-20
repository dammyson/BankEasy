import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {dark_logo} from '../../assets/images';
import {TransferList} from './transferList';
import {baseUrl, processResponse} from '../../utilities/api';
import * as Animatable from 'react-native-animatable';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const TransactionHistory = ({route}) => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [transferHistory, setTransferHistory] = useState([]);

  const {token} = route.params;

  useEffect(() => {
    if (token !== null) {
      getTransferHistory();
    }
  }, [token]);

  const getTransferHistory = useCallback(() => {
    setLoading(true);
    fetch(baseUrl() + '/transfer/?pageNumber=1&pageSize=40', {
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
          setTransferHistory(data?.data.content);
        } else if (statusCode === 422) {
          setLoading(false);
          Alert.alert('Validation failed', data?.message, [{text: 'Okay'}]);
          setTransferHistory([]);
        } else {
          setLoading(false);
          Alert.alert('Operation failed', data?.message, [{text: 'Okay'}]);
          setTransferHistory([]);
        }
      })
      .catch(error => {
        console.log('Api call error');
        console.warn(error);
        setLoading(false);
        Alert.alert(error.message);
        setTransferHistory([]);
      });
  }, [token]);

  console.warn(transferHistory);

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
            Transaction History
          </Text>
        </View>
        <Image
          style={{height: 32, width: 32, borderRadius: 25}}
          source={dark_logo}
        />
      </View>
      <Content style={{marginTop: 20}}>
        {loading ? (
          <Animatable.View
            animation={'flash'}
            easing={'ease-in-out'}
            duration={2000}
            style={{paddingHorizontal: 20}}
            delay={1}>
            <View
              style={{
                marginVertical: 5,
                borderRadius: 5,
                backgroundColor: '#cacccb50',
                height: 100,
              }}></View>
            <View
              style={{
                marginVertical: 5,
                borderRadius: 5,
                backgroundColor: '#cacccb50',
                height: 100,
              }}></View>
            <View
              style={{
                marginVertical: 5,
                borderRadius: 5,
                backgroundColor: '#cacccb50',
                height: 100,
              }}></View>
            <View
              style={{
                marginVertical: 5,
                borderRadius: 5,
                backgroundColor: '#cacccb50',
                height: 100,
              }}></View>
            <View
              style={{
                marginVertical: 5,
                borderRadius: 5,
                backgroundColor: '#cacccb50',
                height: 90,
              }}></View>
            <View
              style={{
                marginVertical: 5,
                borderRadius: 5,
                backgroundColor: '#cacccb50',
                height: 100,
              }}></View>
          </Animatable.View>
        ) : (
          <View
            style={[
              styles.container,
              {marginBottom: 40, marginHorizontal: 20},
            ]}>
            {transferHistory?.map((item, index) => (
              <TransferList key={index} item={item} />
            ))}
          </View>
        )}
      </Content>
    </Container>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainbody: {
    flex: 1,
  },
});
