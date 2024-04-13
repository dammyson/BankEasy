import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {font} from '../../constants';

export const List = ({item}) => {
  const [checkStates, setCheckStates] = useState(false);

  const handleToggleClick = () => {
    setCheckStates(!checkStates);
  };

  return (
    <View
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
          height: 55,
          width: 55,
          backgroundColor: lightTheme.WHITE_COLOR,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          active
          name={item.icon_name}
          type={item.icon_type}
          size={22}
          color={lightTheme.BLACK_TEXT_COLOR}
        />
      </View>
      <View
        style={{
          marginLeft: 20,
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          numberOfLines={1}
          style={[
            {
              color: lightTheme.BLACK_TEXT_COLOR,
              fontSize: 16,
              fontWeight: 300,
              flexShrink: 1,
            },
          ]}>
          {item.name}
        </Text>
      </View>
      {!item.name.includes('Biometric') ? (
        <Icon
          active
          name="right"
          type="antdesign"
          size={18}
          color={lightTheme.BLACK_TEXT_COLOR}
        />
      ) : (
        <TouchableOpacity onPress={() => handleToggleClick()}>
          <Icon
            active
            name={checkStates ? 'toggle-on' : 'toggle-off'}
            type="font-isto"
            size={50}
            color={checkStates ? lightTheme.ORANGE : lightTheme.TOGGLE_OFF}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
