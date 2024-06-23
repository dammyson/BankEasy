import {lightTheme} from './colors';
import {StyleSheet} from 'react-native';
import {font} from '../constants';
export const buttonStyles = StyleSheet.create({
  primaryButtonStyle: {
    height: 62,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme.PRIMARY_BUTTON_COLOR,
  },

  neutralButtonStyle: {
    flexDirection: 'row',
    height: 62,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    gap: 8,
    alignItems: 'center',
    backgroundColor: lightTheme.NEUTRAL_COLOR,
  },
  secondaryButtonStyle: {
    flexDirection: 'row',
    height: 62,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme.SECONDARY_COLOR,
  },
  primaryButtonTextStyle: {
    fontFamily: font.BOLD,
    fontSize: 14,
    color: lightTheme.PRIMARY_COLOR,
  },

  neutralButtonTextStyle: {
    fontFamily: font.BOLD,
    fontSize: 14,
    color: lightTheme.HEADER_MAIN,
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
    borderWidth: 2,
  },
  primaryActionButtonTextStyle: {
    fontFamily: font.BOLD,
    fontSize: 16,
    color: lightTheme.WHITE_COLOR,
  },
});
