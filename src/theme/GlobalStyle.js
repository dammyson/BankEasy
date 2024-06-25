import {Dimensions, StyleSheet, Platform} from 'react-native';
import {lightTheme} from './colors';

export const globalStyles = StyleSheet.create({
  xBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexNoJustify: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  centered: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -20}, {translateY: -28}],
  },

  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  dropdown: {
    height: 50,
    borderColor: lightTheme.SELECT_BORDER,
    borderWidth: 0.5,
    borderRadius: 50,
    paddingHorizontal: 25,
  },
  inputStyle: {
    height: 50,
    borderColor: lightTheme.SELECT_BORDER,
    borderWidth: 0.5,
    borderRadius: 50,
    paddingHorizontal: 15,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },

  modalBody: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: Dimensions.get('window').height / 1.5,
    paddingHorizontal: 15,
    paddingVertical: 30,
    borderRadius: 50,
    borderWidth: 1.2,
    borderColor: lightTheme.MODAL_BORDER,
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

  darkShadowStyle: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  sharpTopRight: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  sharpTopLeft: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  sharpBottomLeft: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
  },

  sharpBottomRight: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
  },
});
