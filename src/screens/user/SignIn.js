import React from 'react'
import { Text, StyleSheet, Image, View, TextInput, TouchableOpacity, Dimensions, StatusBar } from 'react-native'
import { lightTheme } from '../../theme/colors'
import { useNavigation, } from '@react-navigation/native';
import { Icon } from '@rneui/themed'
import { logo, signin, user_check, user_rate } from '../../assets/images';
import { buttonStyles } from '../../theme/ButtonStyle';
import { font } from '../../constants';
import { Container, Body, Button, Left, Content, } from 'native-base';
import CodeInput from '../../components/CodeInput';
import { textInputStyles } from '../../theme/TextInputStyle';


const SignIn = ({ route }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />

      <Image style={{ height: Dimensions.get('window').height / 3, width: Dimensions.get('window').width }} source={signin} />
      <Content>
        <View style={styles.container}>



          <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 15, marginTop: 20 }}>
            <Text style={{ color: lightTheme.BLACK_TEXT_COLOR, fontFamily: font.BOLD, fontSize: 24, marginBottom: 2, marginTop: 2 }}>Welcome!</Text>
            <Text style={{ color: lightTheme.BLACK_TEXT_COLOR, fontFamily: font.REGULAR, fontSize: 16, marginBottom: 2, marginTop: 10 }}>Enjoy easy banking by signing In</Text>
          </View>

          <View style={{ flex: 1, }}>

            <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'flex-start',}}>
              <Text style={styles.inputLabel}>Email/Phone Number </Text>
            </View>

            <View style={styles.textInputContainer}>
              <View style={styles.input}>
                <TextInput
                  placeholder="Enter your Email or Phone Number "
                  placeholderTextColor={lightTheme.PRIMARY_TEXT_COLOR}
                  returnKeyType="next"
                  keyboardType='default'
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ flex: 1, fontSize: 14, color: lightTheme.PRIMARY_TEXT_COLOR, fontFamily: font.REGULAR, }}
                  onChangeText={(text) => setFirstName(text)}
                  onSubmitEditing={() => console.warn("")}
                />
              </View>
              <View style={textInputStyles.operation_icon}>
                <Icon
                  name="phone-outline"
                  type='material-community'
                  color="grey"
                  size={20}
                />
              </View>

            </View>

            <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'flex-start', }}>
              <Text style={styles.inputLabel}>Password </Text>
            </View>

            <View style={styles.textInputContainer}>
              <View style={styles.input}>
                <TextInput
                  placeholder="Enter your Password"
                  placeholderTextColor={lightTheme.PRIMARY_TEXT_COLOR}
                  returnKeyType="next"
                  keyboardType='default'
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ flex: 1, fontSize: 14, color: lightTheme.PRIMARY_TEXT_COLOR, fontFamily: font.REGULAR, }}
                  onChangeText={(text) => setFirstName(text)}
                  onSubmitEditing={() => console.warn("")}
                />
              </View>
              <View style={textInputStyles.operation_icon}>
                <Icon
                  name="eye-outline"
                  type='material-community'
                  color="grey"
                  size={20}
                />
              </View>

            </View>


          </View>
         
          <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 10, }}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={[buttonStyles.primaryButtonStyle,]}>
              <Text style={[buttonStyles.primaryActionButtonTextStyle]}>Sign Up</Text>
            </TouchableOpacity>


          </View>

        </View>
      </Content>
    </Container>
  )
}

export default SignIn


const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
    backgroundColor: '#FFF'
  },
  textInputContainer: {
    marginRight: 20,
    marginLeft: 20,
    height: 60,
    marginBottom: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: lightTheme.OFF_WHITE_COLOR,
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 5

  },

  input: {
    flex: 1,
    marginLeft: 5
  },
  inputLabel: {
    color: lightTheme.OFF_WHITE_COLOR,
    fontFamily: font.REGULAR,
    fontSize: 14,
    marginBottom: 2,
    marginTop: 2
  }
});