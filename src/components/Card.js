import {Icon} from '@rneui/themed';
import {Image, Text, View} from 'react-native';
import {lightTheme} from '../theme/colors';
import {DiagonalArrow, Eyes} from '../assets/svgs/General';
import {eyes, light_eye} from '../assets/images';

export const Cards = ({
  card,
  dark,
  accountType,
  walletName,
  amount,
  accountNumber,
}) => {
  return (
    <View style={card}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              color: dark ? lightTheme.CHECK_BORDER : lightTheme.NEUTRAL_MAIN,
              fontSize: 16,
            }}>
            {dark
              ? walletName
                ? `Balance . ${walletName}`
                : 'Balance'
              : accountType}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 3,
              alignItems: 'center',
              marginTop: 4,
            }}>
            <Text
              style={{
                color: dark ? '#fff' : '#000',
                fontSize: 21,
                fontWeight: 400,
              }}>
              ₦
            </Text>
            <Text
              style={{
                color: dark ? '#fff' : '#000',
                fontSize: 32,
                fontWeight: 700,
              }}>
              {amount}
            </Text>
          </View>
        </View>
        {dark ? (
          <Image style={{height: 32, width: 32}} source={eyes} />
        ) : (
          <Image style={{height: 32, width: 32}} source={light_eye} />
        )}
      </View>
      {dark ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            marginTop: 20,
          }}>
          <Text style={{color: '#fff', fontSize: 14, fontWeight: 500}}>
            Create New Account Number
          </Text>
          <DiagonalArrow />
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: lightTheme.NEUTRAL_MAIN,
              fontSize: 14,
              fontWeight: 500,
            }}>
            Account Number
          </Text>
          <Text
            style={{color: lightTheme.ORANGE, fontSize: 14, fontWeight: 500}}>
            {accountNumber}
          </Text>
        </View>
      )}
    </View>
  );
};
