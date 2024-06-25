import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {dark_logo} from '../../assets/images';
import {Rows} from './rows';
import {List} from '../profile/list';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const TransactionDetails = ({route}) => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  const {detail} = route.params;

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
            Transaction Detail
          </Text>
        </View>
        <Image
          style={{height: 32, width: 32, borderRadius: 25}}
          source={dark_logo}
        />
      </View>
      <Content style={{marginTop: 20}}>
        <View style={[styles.container, {marginBottom: 40}]}>
          <Text style={{textAlign: 'center', color: lightTheme.NEUTRAL_MAIN}}>
            Transfer
          </Text>
          <Text
            style={{
              color:
                detail.type === 'debit'
                  ? lightTheme.TEXT_RED
                  : lightTheme.SUCCESS_COLOR,
              fontSize: 30,
              fontWeight: 700,
              marginTop: 1,
              textAlign: 'center',
              marginBottom: 30,
            }}>
            {detail.type === 'debit' ? '- ₦ ' : '+ ₦ '}
            {detail.amount}
          </Text>
          <View
            style={{borderTopWidth: 1, borderColor: lightTheme.BORDER_MAIN}}>
            <View
              style={{
                backgroundColor: lightTheme.NEUTRAL_COLOR,
                borderRadius: 15,
                marginBottom: 20,
                padding: 20,
                marginTop: 15,
              }}>
              <Rows
                description={'From'}
                boldValue={detail.sender}
                lightValue={detail.accountNumber}
              />
              <Rows description={'To'} boldValue={detail.recipient} />
              <Rows description={'Narration'} boldValue={detail.narration} />
              <Rows description={'Reference'} boldValue={'323rkkkadweqri'} />
              <Rows
                description={'Total amount'}
                boldValue={'₦' + detail.amount}
              />
            </View>
            <View
              style={{
                backgroundColor: lightTheme.NEUTRAL_COLOR,
                borderRadius: 15,
              }}>
              {items.map((item, index) => (
                <List key={index} item={item} />
              ))}
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default TransactionDetails;

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
