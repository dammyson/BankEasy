import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {buttonStyles} from '../../theme/ButtonStyle';
import {accounts, font} from '../../constants';
import {Container, Content} from 'native-base';

const ExistingAccounts = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Content>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              backgroundColor: lightTheme.WHITE_COLOR,
              marginTop: 10,
              paddingBottom: 40,
              borderBottomWidth: 1,
              borderBottomColor: lightTheme.BORDER_MAIN,
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
                Sign in
              </Text>
            </View>
          </View>

          <View style={{flex: 1}}>
            {accounts.map((account, i) => (
              <View style={styles.accountContainer}>
                <Image
                  style={{height: 35, width: 35, borderRadius: 25}}
                  source={account.img}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.accountName}>{account.name}</Text>
                  <Text style={{color: lightTheme.NEUTRAL_MAIN}}>
                    {account.type}
                  </Text>
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

          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PhoneNumberConfirmation')}
              style={[
                buttonStyles.primaryButtonStyle,
                {
                  backgroundColor: lightTheme.NEUTRAL_COLOR,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                },
              ]}>
              <Text
                style={[
                  buttonStyles.primaryActionButtonTextStyle,
                  {color: lightTheme.CHECK_BACKGROUND},
                ]}>
                Logout
              </Text>
              <Icon
                active
                name="exit-outline"
                type="ionicon"
                size={22}
                color={lightTheme.BLACK_TEXT_COLOR}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default ExistingAccounts;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 100,
    width: Dimensions.get('window').width,
    backgroundColor: '#FFF',
    position: 'relative',
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
});
