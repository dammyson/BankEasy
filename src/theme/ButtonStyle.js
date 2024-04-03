import {lightTheme} from './colors';
import {StyleSheet} from 'react-native';
import {font} from '../constants';
export const buttonStyles = StyleSheet.create({
  primaryButtonStyle: {
    height: 65,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme.PRIMARY_BUTTON_COLOR,
  },
  secondaryButtonStyle: {
    height: 45,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme.SECONDARY_COLOR,
    borderColor: lightTheme.SECONDARY_COLOR,
    borderWidth: 2
  },
  primaryButtonTextStyle: {
    fontFamily: font.BOLD,
    fontSize: 14,
    color: lightTheme.PRIMARY_COLOR
  },
  primaryActionButtonStyle: {
    height: 45,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme.PRIMARY_COLOR,
    borderColor: lightTheme.PRIMARY_COLOR,
    borderWidth: 2
  },
  primaryActionButtonTextStyle: {
    fontFamily: font.BOLD,
    fontSize: 16,
    color: lightTheme.WHITE_COLOR
  }  
  });