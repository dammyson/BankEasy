import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  TextInput,
} from 'react-native';
import {lightTheme} from '../theme/colors';
import {font} from '../constants';

export const CustomInput = ({
  label,
  extraClassName,
  placeholder,
  placeholderColor,
  extras,
  icon,
  isPhone,
  labelClass,
  value,
  getValue,
  iconClass,
}) => {
  return (
    <View style={{marginVertical: 15, position: 'relative'}}>
      {label && (
        <Text
          style={
            labelClass ?? {
              fontFamily: font.MEDIUM,
              marginBottom: 8,
              fontSize: 14,
              color: lightTheme.LABEL_TEXT,
            }
          }>
          {label}
        </Text>
      )}
      {isPhone && (
        <View
          style={{
            position: 'absolute',
            height: 50,
            width: 70,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            backgroundColor: lightTheme.PRIMARY_LIGHT_COLOR,
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: font.MEDIUM,
              color: lightTheme.PRIMARY_COLOR,
            }}>
            +234
          </Text>
        </View>
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderColor ?? '#00000080'}
        style={[styles.inputStyle, {paddingLeft: isPhone ? 45 : 25}]}
        defaultValue={value}
        onChangeText={text => getValue(text)}
      />
      {extras && (
        <Text
          style={
            extraClassName ?? {
              fontSize: 12,
              fontFamily: font.SEMI_BOLD,
              color: lightTheme.ORANGE,
              marginTop: 4,
            }
          }>
          {extras}
        </Text>
      )}
      {icon && (
        <View style={iconClass ?? {position: 'absolute', right: 20, top: 13}}>
          {icon}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  inputStyle: {
    height: 50,
    borderColor: lightTheme.INPUT_BORDER_COLOR,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },

  shadowStyle: {
    ...Platform.select({
      ios: {
        shadowColor: '#17A1FA1A',
        shadowOffset: {width: 10, height: 6},
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
