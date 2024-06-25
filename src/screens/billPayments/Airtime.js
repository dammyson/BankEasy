import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {airtel, dark_logo, glo, mtn, nine_mobile} from '../../assets/images';
import {Rows} from './rows';
import {List} from '../profile/list';
import {Cards} from '../../components/Card';
import {Select} from '../../components/Select';
import {CustomInput} from '../../components/CustomInput';
import {buttonStyles} from '../../theme/ButtonStyle';
import LinearGradient from 'react-native-linear-gradient';
import {textInputStyles} from '../../theme/TextInputStyle';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const Airtime = ({route}) => {
  const [index, setIndex] = useState(0);
  const [plan, setPlan] = useState('');
  const [acctNumber, setAcctNumber] = useState('');
  const navigation = useNavigation();
  const [amount, setAmount] = useState();
  const [narration, setNarration] = useState('');

  const {name} = route.params;

  const data = [
    {label: '5GB data', value: '5gb'},
    {label: '10GB data', value: '10gb'},
    {label: '2GB data', value: '2gb'},
  ];

  const getValue = param => {
    setAcctNumber(param);
  };
  const getAmount = param => {
    setAmount(param);
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
              dark={false}
              cardInfo={'Savings account'}
              accountNumber={'0800509703'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
              paddingTop: 35,
              paddingBottom: 10,
            }}>
            <Image
              style={{
                height: 87,
                width: Dimensions.get('window').width / 5,
                borderRadius: 25,
              }}
              source={mtn}
            />
            <Image
              style={{
                height: 87,
                width: Dimensions.get('window').width / 5,
                borderRadius: 25,
              }}
              source={nine_mobile}
            />
            <Image
              style={{
                height: 87,
                width: Dimensions.get('window').width / 5,
                borderRadius: 25,
              }}
              source={glo}
            />
            <Image
              style={{
                height: 87,
                width: Dimensions.get('window').width / 5,
                borderRadius: 25,
              }}
              source={airtel}
            />
          </View>
          <View style={{marginTop: 10}}>
            <CustomInput
              label={'Phone Number'}
              placeholder={'Enter Your Phone Number'}
              placeholderColor={lightTheme.PLACEHOLDER_DARK}
              value={acctNumber}
              getValue={getValue}
              icon={
                <Icon
                  name="phone-outline"
                  type="material-community"
                  color="grey"
                  size={20}
                />
              }
              iconClass={{position: 'absolute', right: 20, top: 40}}
            />
            {name === 'Airtime' ? (
              <CustomInput
                label={'Amount'}
                placeholder={'Enter Amount'}
                placeholderColor={lightTheme.PLACEHOLDER_DARK}
                value={amount}
                getValue={getAmount}
              />
            ) : (
              <Select
                data={data}
                value={plan}
                handleSelect={param => setPlan(param)}
                placeholder={'Select the plan'}
                label={'Select plan'}
                search={false}
                placeholderStyle={{
                  color: lightTheme.PLACEHOLDER_DARK,
                  fontWeight: 400,
                  fontSize: 14,
                }}
              />
            )}
            <View style={{marginVertical: 50}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TransactionConfirmation', {
                    type: name,
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

export default Airtime;

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
