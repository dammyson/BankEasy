import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import {Container, Content} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';
import {dark_logo} from '../../assets/images';
import {Rows} from '../home/rows';
import LinearGradient from 'react-native-linear-gradient';
import {buttonStyles} from '../../theme/ButtonStyle';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const TransactionConfirmation = ({route}) => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  const {type} = route.params;

  const detail = {
    category:
      type === 'in-bank'
        ? 'Bank easy transfer'
        : type === 'others'
        ? 'Other bank transfer'
        : type,
    name: 'Kingfisher Ogunedo-057',
    date: '23rd dec, 2022',
    time: '8:00am',
    amount: '1,000,000',
    bank: 'UBA bank',
    icon_name: 'arrow-down-left',
    icon_type: 'feather',
    sender: 'Deji Adeyemi',
    accountNumber: '0800509703',
    commission: '8,000',
    recipient: 'Bunmi Felix',
    narration: 'Reimbursement',
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
            Confirm transaction
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
            Transaction amount
          </Text>
          <Text
            style={{
              color: lightTheme.HEADER_MAIN,
              fontSize: 30,
              fontWeight: 700,
              marginTop: 1,
              textAlign: 'center',
              marginBottom: 30,
            }}>
            ₦ {detail.amount}
          </Text>
          <View
            style={{borderTopWidth: 1, borderColor: lightTheme.BORDER_MAIN}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 25,
              }}>
              <View>
                <Text
                  style={{
                    color: lightTheme.NEUTRAL_MAIN,
                    fontSize: 14,
                    fontFamily: font.MEDIUM,
                  }}>
                  From
                </Text>
                <Text
                  style={{
                    color: lightTheme.HEADER_MAIN,
                    fontSize: 17,
                    fontFamily: font.BOLD,
                    marginVertical: 2,
                  }}>
                  3446573800
                </Text>
                <Text
                  style={{
                    color: lightTheme.NEUTRAL_MAIN,
                    fontSize: 15,
                    fontFamily: font.REGULAR,
                  }}>
                  Savings account
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'right',
                    color: lightTheme.NEUTRAL_MAIN,
                    fontSize: 14,
                    fontFamily: font.MEDIUM,
                  }}>
                  To
                </Text>
                <Text
                  style={{
                    color: lightTheme.HEADER_MAIN,
                    fontSize: 17,
                    fontFamily: font.BOLD,
                    textAlign: 'right',
                    marginVertical: 2,
                  }}>
                  3445373800
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    color: lightTheme.NEUTRAL_MAIN,
                    fontSize: 15,
                    fontFamily: font.REGULAR,
                  }}>
                  Tom Brady Johnson
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: lightTheme.NEUTRAL_COLOR,
                borderRadius: 15,
                marginBottom: 20,
                padding: 20,
              }}>
              <Rows
                description={'Source account'}
                boldValue={detail.accountNumber}
                textClass={{
                  color: lightTheme.NEUTRAL_MAIN,
                  fontFamily: font.REGULAR,
                }}
              />
              <Rows
                textClass={{
                  color: lightTheme.NEUTRAL_MAIN,
                  fontFamily: font.REGULAR,
                }}
                description={'Category'}
                boldValue={detail.category}
              />
              {type === 'others' ||
                (type === 'in-bank' && (
                  <>
                    <Rows
                      textClass={{
                        color: lightTheme.NEUTRAL_MAIN,
                        fontFamily: font.REGULAR,
                      }}
                      description={'Bank'}
                      boldValue={detail.bank}
                    />
                    <Rows
                      textClass={{
                        color: lightTheme.NEUTRAL_MAIN,
                        fontFamily: font.REGULAR,
                      }}
                      description={'Commission'}
                      boldValue={'₦' + detail.commission}
                    />
                  </>
                ))}
              <Rows
                textClass={{
                  color: lightTheme.NEUTRAL_MAIN,
                  fontFamily: font.REGULAR,
                }}
                description={'Total amount'}
                boldValue={'₦' + detail.amount}
                noBorder
              />
            </View>
          </View>
        </View>
      </Content>
      <View style={{marginHorizontal: 20, marginBottom: 100}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TransferAuthentication')}>
          <LinearGradient
            colors={['#4A463C', '#232323']}
            useAngle={true}
            style={{
              height: 62,
              borderRadius: 10,
              marginTop: 10,
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            angle={45}>
            <Text style={[buttonStyles.primaryActionButtonTextStyle]}>
              {type === 'Airtime' || type === 'Data'
                ? `Buy ${type}`
                : type === 'others' || type === 'in-bank'
                ? 'Make Transfer'
                : `Pay bill`}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default TransactionConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  mainbody: {
    flex: 1,
  },
});
