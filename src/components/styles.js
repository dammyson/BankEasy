import {StyleSheet, Platform} from 'react-native';
import {lightTheme} from '../theme/colors';

export const CELL_SIZE = 50;
export const PIN_SIZE = 28;
export const CELL_BORDER_RADIUS = 8;
export const PIN_CELL_BR = 14;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const NOT_EMPTY_PIN_BG_COLOR = '#FFA900';
export const ACTIVE_PIN_BG_COLOR = '#FFA900';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 0,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  pinFieldRoot: {
    height: 28,
    marginTop: 0,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  pinCell: {
    marginHorizontal: 5,
    height: 28,
    width: 28,
    lineHeight: PIN_SIZE - 5,
    ...Platform.select({web: {lineHeight: 24}}),
    fontSize: 16,
    textAlign: 'center',
    borderRadius: PIN_CELL_BR,
    color: '#FFA900',
    backgroundColor: '#fff',
    borderColor: lightTheme.ORANGE,
    borderWidth: 1.5,

    // IOS

    shadowOffset: {
      width: 0,
      height: 1,
    },

    // Android
    elevation: 3,
  },
  cell: {
    marginHorizontal: 5,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 45}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#3759b8',
    backgroundColor: '#fff',
    borderColor: lightTheme.OFF_WHITE_COLOR,
    borderWidth: 1,

    // IOS

    shadowOffset: {
      width: 0,
      height: 1,
    },

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    padding: 20,
  },
  title: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#3557b7',
    justifyContent: 'center',
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});

export default styles;
