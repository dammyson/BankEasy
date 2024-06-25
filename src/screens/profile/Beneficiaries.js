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
import {beneficiaries, font} from '../../constants';
import {Container, Content} from 'native-base';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {dark_logo} from '../../assets/images';
import {CustomInput} from '../../components/CustomInput';
import {Plus, Search, Trash} from '../../assets/svgs/General';
import LinearGradient from 'react-native-linear-gradient';
import {buttonStyles} from '../../theme/ButtonStyle';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const tabs = ['Transfers', 'Bill Payments'];

const Beneficiaries = () => {
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [show, setShow] = useState(Array(beneficiaries?.length).fill(false));

  const handleClick = index => {
    const newShowStates = [...show];
    newShowStates[index] = !show[index];
    setShow(newShowStates);
  };

  const getSearch = param => {
    setSearch(param);
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
            Beneficiaries
          </Text>
        </View>
        <Image
          style={{height: 32, width: 32, borderRadius: 25}}
          source={dark_logo}
        />
      </View>
      <View>
        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 25,
            marginBottom: 15,
          }}>
          {tabs.map(tab => {
            return (
              <TouchableOpacity
                onPress={() => setActiveTab(tab)}
                style={{
                  paddingBottom: 5,
                  borderBottomWidth: activeTab === tab ? 3.5 : 0,
                  borderBottomColor:
                    activeTab === tab ? lightTheme.ORANGE : null,
                }}>
                <Text
                  style={{
                    fontFamily: font.BOLD,
                    color:
                      activeTab === tab
                        ? lightTheme.BLACK_TEXT_COLOR
                        : lightTheme.CHECK_BORDER,
                  }}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{paddingHorizontal: 20}}>
          <CustomInput
            placeholder={'Search Beneficiaries'}
            placeholderColor={lightTheme.PLACEHOLDER_DARK}
            value={search}
            getValue={getSearch}
            icon={<Search />}
          />
        </View>
      </View>
      <Content>
        <View style={styles.container}>
          <View style={{flex: 1, marginBottom: 60}}>
            <View style={{paddingHorizontal: 10}}>
              {beneficiaries.map((Beneficiaries, i) => (
                <View
                  key={i}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: lightTheme.BORDER_MAIN,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      handleClick(i);
                    }}
                    style={styles.accountContainer}>
                    <View
                      style={{
                        backgroundColor: lightTheme.NEUTRAL_COLOR,
                        width: 52,
                        height: 52,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 60,
                      }}>
                      <Text
                        style={{
                          color: lightTheme.BLACK_TEXT_COLOR,
                          fontSize: 24,
                          fontWeight: 400,
                        }}>
                        {Beneficiaries.first_name.charAt(0)}
                        {Beneficiaries.last_name.charAt(0)}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.accountName}>
                        {Beneficiaries.first_name} {Beneficiaries.last_name}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 4,
                          alignItems: 'flex-end',
                        }}>
                        <Text style={{color: lightTheme.NEUTRAL_MAIN}}>
                          {Beneficiaries.type}
                        </Text>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: 600,
                          }}>
                          .
                        </Text>
                        <Text style={{color: lightTheme.NEUTRAL_MAIN}}>
                          {Beneficiaries.id}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  {show[i] && (
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center',
                        paddingVertical: 10,
                      }}>
                      <View
                        style={{
                          backgroundColor: lightTheme.NEUTRAL_COLOR,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                          borderRadius: 10,
                          height: 51,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: Dimensions.get('window').width / 2.8,
                        }}>
                        <Text
                          style={{fontFamily: font.SEMI_BOLD, fontSize: 16}}>
                          Edit
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: lightTheme.SECONDARY_COLOR,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                          borderRadius: 10,
                          height: 51,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: Dimensions.get('window').width / 2.8,
                        }}>
                        <Text
                          style={{fontFamily: font.SEMI_BOLD, fontSize: 16}}>
                          Transfer
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: lightTheme.LIGHT_RED,
                          paddingHorizontal: 15,
                          borderRadius: 10,
                          paddingVertical: 10,
                          height: 51,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Trash />
                      </View>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
      </Content>
      <View style={{marginHorizontal: 20, marginBottom: 90}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BeneficiaryFields')}>
          <LinearGradient
            colors={['#4A463C', '#232323']}
            useAngle={true}
            style={{
              height: 62,
              borderRadius: 10,
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            angle={45}>
            <Text style={[buttonStyles.primaryActionButtonTextStyle]}>
              <Plus />
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Beneficiaries;

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
    height: 84,
    flexDirection: 'row',
    gap: 12,
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
