import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {buttonStyles} from '../../theme/ButtonStyle';
import {font} from '../../constants';
import {Container, Content} from 'native-base';
import {failed, success} from '../../assets/images';
import {Info, Refresh, Save, Share} from '../../assets/svgs/General';

const AuthSuccess = ({route}) => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const {description, screen} = route.params;

  return (
    <Container>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Content>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Image
              style={{height: 120, width: 120, borderRadius: 50}}
              source={isSuccess ? success : failed}
            />
            <Text
              style={{
                color: lightTheme.HEADER_MAIN,
                fontFamily: font.EXTRA_BOLD,
                fontSize: 30,
                marginBottom: 2,
                marginTop: 20,
              }}>
              {isSuccess ? 'Success' : 'Failed'}
            </Text>
            <Text
              style={{
                color: lightTheme.NEUTRAL_MAIN,
                fontFamily: font.REGULAR,
                fontSize: 16,
                textAlign: 'center',
              }}>
              {isSuccess ? description : 'Transfer failed'}
            </Text>
          </View>
          {screen === 'transferSuccess' ? (
            <View>
              {isSuccess ? (
                <View
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('BeneficiaryFields')}
                    style={[buttonStyles.neutralButtonStyle]}>
                    <Text style={[buttonStyles.neutralButtonTextStyle]}>
                      Save beneficiary
                    </Text>
                    <Save />
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                  }}>
                  <TouchableOpacity style={[buttonStyles.neutralButtonStyle]}>
                    <Text style={[buttonStyles.neutralButtonTextStyle]}>
                      Report an issue
                    </Text>
                    <Info />
                  </TouchableOpacity>
                </View>
              )}
              {isSuccess ? (
                <View
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                  }}>
                  <TouchableOpacity style={[buttonStyles.secondaryButtonStyle]}>
                    <Text style={[buttonStyles.neutralButtonTextStyle]}>
                      Share receipt
                    </Text>
                    <Share />
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                  }}>
                  <TouchableOpacity style={[buttonStyles.secondaryButtonStyle]}>
                    <Text style={[buttonStyles.neutralButtonTextStyle]}>
                      Try again
                    </Text>
                    <Refresh />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ) : (
            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate(screen)}
                style={[buttonStyles.primaryButtonStyle]}>
                <Text style={[buttonStyles.primaryActionButtonTextStyle]}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Content>
    </Container>
  );
};

export default AuthSuccess;

const styles = StyleSheet.create({
  container: {
    height:
      Dimensions.get('window').height - Dimensions.get('window').height / 10,
    width: Dimensions.get('window').width,
    backgroundColor: '#FFF',
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
    paddingLeft: 5,
  },

  input: {
    flex: 1,
    marginLeft: 5,
  },
  inputLabel: {
    color: lightTheme.OFF_WHITE_COLOR,
    fontFamily: font.REGULAR,
    fontSize: 14,
    marginBottom: 2,
    marginTop: 2,
  },
});
