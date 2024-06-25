import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {lightTheme} from '../theme/colors';
import {font} from '../constants';

export const Box = ({icon, title, isLast, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: lightTheme.NEUTRAL_COLOR,
        padding: 25,
        borderRadius: 16,
        width: isLast
          ? Dimensions.get('window').width - 40
          : Dimensions.get('window').width / 2.3,
        minHeight: 120,
      }}>
      <View
        style={{
          backgroundColor: lightTheme.WHITE_COLOR,
          padding: 15,
          borderRadius: 16,
          width: 56,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icon}
      </View>
      <Text style={{paddingTop: 15, fontFamily: font.SEMI_BOLD}}>{title}</Text>
    </TouchableOpacity>
  );
};
