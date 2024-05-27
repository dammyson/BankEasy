import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {lightTheme} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {logo, user_check, user_rate} from '../../assets/images';
import {buttonStyles} from '../../theme/ButtonStyle';
import {font} from '../../constants';
import {Container, Body, Button, Left, Content} from 'native-base';

const Welcome = ({route}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Content>
        <View style={styles.container}>
          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              justifyContent: 'flex-start',
              marginBottom: 15,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: lightTheme.BLACK_TEXT_COLOR,
                fontFamily: font.BOLD,
                fontSize: 32,
                marginBottom: 2,
                marginTop: 2,
              }}>
              Get Started
            </Text>
            <Text
              style={{
                color: lightTheme.BLACK_TEXT_COLOR,
                fontFamily: font.REGULAR,
                fontSize: 20,
                marginBottom: 2,
                marginTop: 2,
              }}>
              Choose from the options below to log in to your account
            </Text>
          </View>

          <View style={{flex: 1}}>
            <View
              style={{
                height: 1,
                backgroundColor: '#ECECEC',
                marginVertical: 20,
              }}
            />
            <View
              style={{
                backgroundColor: lightTheme.WHITE_COLOR,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 20,
              }}>
              <View
                style={{
                  backgroundColor: lightTheme.WHITE_COLOR,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    backgroundColor: '#4A4A4A',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    marginRight: 8,
                    paddingHorizontal: 7,
                  }}>
                  <Image style={{height: 40, width: 40}} source={user_check} />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SignIn')}
                  style={{
                    backgroundColor: '#FCF998',
                    flex: 1,
                    flexDirection: 'row',
                    paddingVertical: 40,
                    borderRadius: 25,
                    borderColor: lightTheme.BORDER_MAIN,
                    borderWidth: 1,
                  }}>
                  <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={{fontFamily: font.BOLD, fontSize: 16}}>
                      Already have an account?
                    </Text>
                    <Text style={{fontFamily: font.REGULAR, fontSize: 14}}>
                      Track items effortlessly
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 10,
                    }}>
                    <Icon
                      name="right"
                      color={lightTheme.BLACK_TEXT_COLOR}
                      size={20}
                      type="antdesign"
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  backgroundColor: lightTheme.WHITE_COLOR,
                  flexDirection: 'row',
                  marginTop: 20,
                }}>
                <View
                  style={{
                    backgroundColor: '#4A4A4A',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    marginRight: 8,
                    paddingHorizontal: 7,
                  }}>
                  <Image style={{height: 40, width: 40}} source={user_rate} />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SignInCode')}
                  style={{
                    backgroundColor: '#E9F8F1',
                    flex: 1,
                    flexDirection: 'row',
                    paddingVertical: 40,
                    borderRadius: 25,
                    borderWidth: 1,
                    borderColor: lightTheme.BORDER_MAIN,
                  }}>
                  <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={{fontFamily: font.BOLD, fontSize: 16}}>
                      First time sign in?
                    </Text>
                    <Text style={{fontFamily: font.REGULAR, fontSize: 14}}>
                      Use invitation code
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 10,
                    }}>
                    <Icon
                      name="right"
                      color={lightTheme.BLACK_TEXT_COLOR}
                      size={20}
                      type="antdesign"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: '#ECECEC',
                marginVertical: 20,
              }}
            />
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 100,
    width: Dimensions.get('window').width,
    backgroundColor: '#FFF',
  },
});
