import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {Select} from '../../components/Select';
import {CustomInput} from '../../components/CustomInput';
import LinearGradient from 'react-native-linear-gradient';
import {buttonStyles} from '../../theme/ButtonStyle';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const BeneficiaryFields = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const [bank, setBank] = useState('');
  const [acctNumber, setAcctNumber] = useState('');

  const data = [
    {label: 'Access bank', value: 'access'},
    {label: 'Eco bank', value: 'eco'},
    {label: 'Fidelity bank', value: 'fidelity'},
    {label: 'Wema bank', value: 'wema'},
  ];

  const getValue = param => {
    setAcctNumber(param);
  };

  return (
    <Container style={{backgroundColor: lightTheme.WHITE_COLOR}}>
      <View style={{backgroundColor: lightTheme.NEUTRAL_100, height: 60}} />
      <StatusBar
        backgroundColor={lightTheme.NEUTRAL_100}
        barStyle="dark-content"
        translucent
      />
      <Content>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: lightTheme.NEUTRAL_100,
              paddingVertical: 25,
              paddingHorizontal: 15,
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
                Add a beneficiary
              </Text>
            </View>
          </View>
          <View style={{flex: 1, paddingHorizontal: 15}}>
            <Text
              style={{
                color: lightTheme.BLACK_TEXT_COLOR,
                fontFamily: font.REGULAR,
                fontSize: 17,
                marginTop: 15,
                marginBottom: 30,
              }}>
              Enter the account details of the Beneficiary
            </Text>
            <Select
              data={data}
              value={bank}
              handleSelect={param => setBank(param)}
              placeholder={'Select the bank'}
              label={'Select bank'}
              search={false}
            />
            <CustomInput
              label={'Account Number'}
              placeholder={'Enter account number'}
              extras={'Account number'}
              value={acctNumber}
              getValue={getValue}
            />
          </View>
        </View>
      </Content>
      <View style={{marginBottom: 90, marginHorizontal: 15}}>
        <TouchableOpacity>
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
              Enter
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default BeneficiaryFields;

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
