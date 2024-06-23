import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {lightTheme} from '../theme/colors';
import {Dropdown} from 'react-native-element-dropdown';
import {font} from '../constants';
import {useState} from 'react';

export const Select = ({
  data,
  placeholder,
  value,
  handleSelect,
  label,
  search,
  placeholderStyle,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = param => {
    setIsFocus(param);
  };
  return (
    <View style={{marginVertical: label ? 9 : 15}}>
      {label && (
        <Text
          style={{
            fontFamily: font.MEDIUM,
            marginBottom: 8,
            fontSize: 14,
            color: lightTheme.LABEL_TEXT,
          }}>
          {label}
        </Text>
      )}
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && {backgroundColor: lightTheme.SELECT_FOCUS},
        ]}
        placeholderStyle={placeholderStyle ?? styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={search}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        onChange={item => {
          handleSelect(item.value);
          handleFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: lightTheme.INPUT_BORDER_COLOR,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 25,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  placeholderStyle: {
    color: '#00000080',
  },
});
