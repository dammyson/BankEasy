import {lightTheme} from './colors';
import {StyleSheet} from 'react-native';
import {font} from '../constants';

export const textInputStyles = StyleSheet.create({
  textInputContainer: {
    marginRight: 20,
    marginLeft: 20,
    height: 45,
    marginBottom: 15,
    marginTop: 5,
    borderWidth: 0.6,
    borderColor: lightTheme.TEXT_PLACEHOLDER_COLOR,
    borderRadius: 10,
    justifyContent: "center",
},
textArea: {
    justifyContent: "center",
    fontSize: 13,
    fontFamily: font.SEMI_BOLD,
    marginLeft:10,
    alignItems: 'center',
},
searchTextInputContainer:{
    flexDirection: 'row',
    height: 55,
    marginBottom: 15,
    marginTop: 5,
    borderWidth: 0.6,
    borderColor: lightTheme.TEXT_PLACEHOLDER_COLOR,
    borderRadius: 10
},
input: {
    flex: 1,
    marginLeft: 5,
},
action_text: {
    color: lightTheme.SMALL_BODY_TEXT_COLOR,
    fontFamily: font.SEMI_BOLD,
    fontSize: 15,
    marginBottom: 2,
    marginTop: 2
},
operation_icon: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
},
secondSearchTextInputContainer:{
    flexDirection: 'row',
    height: 45,
    marginBottom: 15,
    marginTop: 5,
    backgroundColor:'#F2F3F2',
    borderRadius: 5
},


textAreaContainer: {
    height: 100,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: lightTheme.TEXT_PLACEHOLDER_COLOR,
},

textAreainput:{
    height: 100,
    flex: 1,
    fontSize: 13,
    fontFamily: font.SEMI_BOLD,
    marginLeft:10,
    justifyContent: "flex-start",
    textAlignVertical: 'top',
}});