import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';
import {useNavigation} from '@react-navigation/native';

export const TransferList = ({item}) => {
  const navigation = useNavigation();
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
        marginHorizontal: 20,
      }}>
      <View
        style={{
          borderRadius: 25,
          height: 24,
          width: 24,
          backgroundColor:
            item.type === 'debit'
              ? lightTheme.LIGHT_RED
              : lightTheme.LIGHT_SUCCESS,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          active
          name={item.icon_name}
          type={item.icon_type}
          size={16}
          color={
            item.type === 'debit'
              ? lightTheme.TEXT_RED
              : lightTheme.SUCCESS_COLOR
          }
        />
      </View>
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
          {item.type === 'debit' ? 'Transfer to' : 'Transfer from'}
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
          {item.name}
        </Text>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <Text style={{color: lightTheme.NEUTRAL_MAIN, marginVertical: 2}}>
            {item.date}
          </Text>
          <Text style={{color: lightTheme.NEUTRAL_MAIN, marginVertical: 2}}>
            .
          </Text>
          <Text style={{color: lightTheme.NEUTRAL_MAIN, marginVertical: 2}}>
            {item.time}
          </Text>
        </View>
        <Text
          style={{
            color:
              item.type === 'debit'
                ? lightTheme.TEXT_RED
                : lightTheme.SUCCESS_COLOR,
            fontSize: 18,
            fontWeight: 600,
          }}>
          {item.type === 'debit' ? '- ₦ ' : '+ ₦ '}
          {item.amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
