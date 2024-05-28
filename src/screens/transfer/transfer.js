import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  PixelRatio,
  Image,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font, transfers} from '../../constants';
import {Container, Content} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {bank, mini_logo} from '../../assets/images';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const Transfer = () => {
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
      <Content>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: lightTheme.WHITE_COLOR,
              marginTop: 10,
              paddingBottom: 40,
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
                  fontFamily: font.SEMI_BOLD,
                  fontSize: 22,
                }}>
                Transfer
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 30,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TransferInputDetails', {
                    name: 'Bank easy transfer',
                    type: 'in-bank',
                  })
                }
                style={[styles.banksBlock, styles.bankEasyBlock]}>
                <Image
                  style={{height: 50, width: 50, borderRadius: 25}}
                  source={mini_logo}
                />
                <Text style={styles.bankName}>Bank easy transfer </Text>
                <Text
                  style={{color: lightTheme.NEUTRAL_MAIN, marginVertical: 6}}>
                  Transfer to other bank easy users
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 10,
                  }}>
                  <Icon
                    active
                    name="right"
                    type="antdesign"
                    size={22}
                    color={lightTheme.BLACK_TEXT_COLOR}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TransferInputDetails', {
                    name: 'Other banks transfer',
                    type: 'others',
                  })
                }
                style={[styles.banksBlock, styles.otherBanksBlock]}>
                <Image
                  style={{height: 50, width: 50, borderRadius: 25}}
                  source={bank}
                />
                <Text style={styles.bankName}>Other bank transfer </Text>
                <Text
                  style={{color: lightTheme.NEUTRAL_MAIN, marginVertical: 6}}>
                  Make a transfer to other banks users{' '}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 10,
                  }}>
                  <Icon
                    active
                    name="right"
                    type="antdesign"
                    size={22}
                    color={lightTheme.BLACK_TEXT_COLOR}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: lightTheme.BORDER_MAIN,
                paddingBottom: 20,
              }}>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                }}>
                Recent
              </Text>
            </View>
            {transfers.map((transfer, i) => (
              <View key={i} style={styles.accountContainer}>
                <Image
                  style={{height: 35, width: 35, borderRadius: 25}}
                  source={transfer.img}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.accountName}>{transfer.name}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 4,
                      alignItems: 'flex-end',
                    }}>
                    <Text style={{color: lightTheme.NEUTRAL_MAIN}}>
                      {transfer.type}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 600,
                      }}>
                      .
                    </Text>
                    <Text style={{color: lightTheme.NEUTRAL_MAIN}}>
                      {transfer.id}
                    </Text>
                  </View>
                </View>
                <Icon
                  active
                  name="right"
                  type="antdesign"
                  size={22}
                  color={lightTheme.BLACK_TEXT_COLOR}
                />
              </View>
            ))}
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
  },
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: '100%',
    backgroundColor: '#fff',
  },
  accountContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    height: 84,
    borderBottomWidth: 1,
    borderColor: lightTheme.BORDER_MAIN,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width - Dimensions.get('window').width / 3,
  },

  icon: {
    transform: [{rotate: '180deg'}],
  },

  accountName: {
    fontSize: 17,
    fontWeight: '700',
  },
  banksBlock: {
    borderRadius: 14,
    width: '49%',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  bankEasyBlock: {
    backgroundColor: lightTheme.SKY_BLUE,
  },
  otherBanksBlock: {
    backgroundColor: lightTheme.LIGHT_ORANGE,
  },

  bankName: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 14,
  },
});
