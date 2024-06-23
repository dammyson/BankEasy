import React from 'react';
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
import {
  ForwardedCall,
  LightBulb,
  Router,
  School,
  Store,
  VAS,
  Water,
} from '../../assets/svgs/General';
import {Box} from '../../components/Box';

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
};

const SelectBill = () => {
  const navigation = useNavigation();

  const billingOptions = [
    {label: 'Airtime', screen: 'Airtime', icon: <ForwardedCall />},
    {label: 'Data', screen: 'Airtime', icon: <Router />},
    {label: 'Electricity', screen: 'Utilities', icon: <LightBulb />},
    {label: 'Water', screen: 'Utilities', icon: <Water />},
    {label: 'School', screen: 'Industry', icon: <School />},
    {label: 'Cooperatives', screen: 'Industry', icon: <Store />},
    {label: 'Other VAS services', screen: 'OVS', icon: <VAS />},
  ];

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
            Pay bills
          </Text>
        </View>
        <Image
          style={{height: 32, width: 32, borderRadius: 25}}
          source={dark_logo}
        />
      </View>
      <Content>
        <View style={[styles.container, {marginVertical: 40}]}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
            {billingOptions.map((item, index) => {
              const isLast = billingOptions.length === index + 1;
              return (
                <Box
                  onPress={() =>
                    navigation.navigate(item.screen, {name: item.label})
                  }
                  isLast={isLast}
                  icon={item.icon}
                  title={item.label}
                  key={index}
                />
              );
            })}
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default SelectBill;

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
