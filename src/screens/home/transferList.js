import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {Incoming, Outgoing} from '../../assets/svgs/General';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

export const TransferList = ({item}) => {
  const navigation = useNavigation();
  dayjs.extend(advancedFormat);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('TransactionDetails', {detail: item})}
      style={{
        flexDirection: 'row',
        marginVertical: 6,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: lightTheme.BORDER_MAIN,
        height: 85,
      }}>
      {item.type === 'FUND_TRANSFER_DEBIT' ? <Outgoing /> : <Incoming />}
      <View
        style={{
          marginLeft: 20,
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: lightTheme.NEUTRAL_300,
            fontWeight: 500,
            marginBottom: 2,
          }}>
          {item.type === 'FUND_TRANSFER_DEBIT'
            ? 'Transfer to'
            : 'Transfer from'}
        </Text>
        <Text
          numberOfLines={1}
          style={[
            {
              color: lightTheme.BLACK_TEXT_COLOR,
              fontSize: 16,
              fontWeight: 600,
              flexShrink: 1,
            },
          ]}>
          {item.type === 'FUND_TRANSFER_DEBIT'
            ? item.toAccount + '' + item.toBank
            : item.fromAccount + '' + item.fromBank}
        </Text>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <Text style={{color: lightTheme.NEUTRAL_MAIN, marginVertical: 2}}>
            {dayjs(item.dateCreated).format('Do MMM, YYYY . h:mm A')}
          </Text>
        </View>
        <Text
          style={{
            color:
              item.type === 'FUND_TRANSFER_DEBIT'
                ? lightTheme.TEXT_RED
                : lightTheme.SUCCESS_COLOR,
            fontSize: 18,
            fontWeight: 600,
          }}>
          {item.type === 'FUND_TRANSFER_DEBIT' ? '- ₦ ' : '+ ₦ '}
          {item.amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
