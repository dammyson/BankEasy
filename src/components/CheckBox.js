import {Icon} from '@rneui/themed';
import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Animated} from 'react-native';
import {lightTheme} from '../theme/colors';

const Checkbox = ({
  text,
  onPress,
  isChecked,
  containerStyle,
  textStyle,
  checkboxStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={[
          styles.checkbox,
          isChecked && styles.checkboxSelected,
          checkboxStyle,
        ]}>
        <View>
          {isChecked && (
            <Icon name="check" size={18} color={'#fff'} type="antdesign" />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.checkboxText, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderColor: lightTheme.CHECK_BORDER,
    borderWidth: 1,
    borderRadius: 5,
    height: 20,
    width: 20,
  },
  checkboxSelected: {
    backgroundColor: lightTheme.CHECK_BACKGROUND,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Checkbox;
