import React, {useEffect, useMemo, useState} from 'react';
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
import {Cards} from '../../components/Card';
import {Select} from '../../components/Select';
import {CustomInput} from '../../components/CustomInput';
import {buttonStyles} from '../../theme/ButtonStyle';
import LinearGradient from 'react-native-linear-gradient';
import {formatAmount, getUser} from '../../utilities';
import {baseUrl, processResponse} from '../../utilities/api';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const TransactionInputDetails = ({route}) => {
  const [bank, setBank] = useState('');
  const [acctNumber, setAcctNumber] = useState('');
  const navigation = useNavigation();
  const [amount, setAmount] = useState();
  const [narration, setNarration] = useState('');
  const [user, setUser] = useState(null);
  const [banks, setBanks] = useState([]);
  const [loadingBanks, setLoadingBanks] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [loadingName, setLoadingName] = useState(false);
  const {name, type, token} = route.params;

  getUser().then(value => {
    setUser(JSON.parse(value));
  });

  useEffect(() => {
    if (token !== null) {
      getBanks();
    }
  }, [token]);

  const getValue = param => {
    if (param.length === 10 && type === 'others') {
      getAccountName(param);
    }
    setAcctNumber(param);
  };
  const getAmount = param => {
    setAmount(param);
  };

  const getBanks = () => {
    setLoadingBanks(true);
    fetch(baseUrl() + '/transfer/get-bank-codes', {
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
          setLoadingBanks(false);
          setBanks(data?.data);
        } else if (statusCode === 422) {
          setLoadingBanks(false);
          Alert.alert('Validation failed', data?.message, [{text: 'Okay'}]);
        } else {
          setLoadingBanks(false);
          Alert.alert('Operation failed', data?.message, [{text: 'Okay'}]);
        }
      })
      .catch(error => {
        console.log('Api call error');
        console.warn(error);
        setLoadingBanks(false);
        Alert.alert(error.message);
      });
  };

  const data = useMemo(() => {
    const banksData = banks?.map(bank => ({
      label: bank.name,
      value: bank.bankCode,
    }));
    return banksData;
  }, [banks]);

  const getAccountName = param => {
    setLoadingName(true);
    let nameData = JSON.stringify({
      accountNumber: param,
      bankCode: bank,
    });

    fetch(baseUrl() + '/transfer/name-enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: nameData,
    })
      .then(processResponse)
      .then(res => {
        const {statusCode, data} = res;
        console.warn(res);
        if (statusCode === 200) {
          setLoadingName(false);
        } else if (statusCode === 422) {
          setLoadingName(false);
          Alert.alert('Validation failed', data?.message, [{text: 'Okay'}]);
        } else {
          setLoadingName(false);
          Alert.alert('Operation Failed', data?.message[{text: 'Okay'}]);
        }
      })
      .catch(error => {
        console.log('Api call error');
        console.warn(error);
        setLoadingName(false);
        Alert.alert(error.message);
      });
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
            {name}
          </Text>
        </View>
        <Image
          style={{height: 32, width: 32, borderRadius: 25}}
          source={dark_logo}
        />
      </View>
      <Content>
        <View style={[styles.container, {marginBottom: 40}]}>
          <View style={{marginTop: 20}}>
            <Cards
              card={styles.card}
              amount={formatAmount(user?.client.balance) ?? 0.0}
              dark={false}
              accountType={'Savings account'}
              accountNumber={user?.client.accountNumber}
            />
          </View>
          <View style={{marginTop: 10}}>
            {type === 'others' && (
              <Select
                data={data}
                value={bank}
                handleSelect={param => setBank(param)}
                placeholder={'Select the bank'}
                label={'Select bank'}
                search={true}
              />
            )}
            <CustomInput
              label={'Account Number'}
              placeholder={'Enter account number'}
              extras={loadingName ? '...' : accountName ? accountName : ''}
              value={acctNumber}
              getValue={getValue}
              editable={type === 'others' ? (bank === '' ? false : true) : true}
              maxLength={10}
            />
            <CustomInput
              label={'Amount'}
              placeholder={'Enter Amount'}
              value={amount}
              getValue={getAmount}
            />
            <CustomInput
              label={'Narration'}
              placeholder={'Enter Narration'}
              value={narration}
              getValue={text => setNarration(text)}
            />
            <View style={{marginVertical: 50}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TransactionConfirmation', {
                    type: type,
                    accountNumber: acctNumber,
                    amount: parseInt(amount),
                    narration: narration,
                    bankCode: bank,
                    beneficiaryName: accountName,
                    clientId: user?.client.id,
                    personalAccount: user?.client.accountNumber,
                  })
                }>
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
                    Proceed
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default TransactionInputDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  mainbody: {
    flex: 1,
  },
  card: {
    backgroundColor: lightTheme.NEUTRAL_100,
    marginTop: 10,
    borderRadius: 14,
    padding: 20,
  },
});
