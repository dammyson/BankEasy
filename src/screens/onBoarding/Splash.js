import React from 'react';
import {Text, StyleSheet, View, Image, ImageBackground} from 'react-native';
import {lightTheme} from '../../theme/colors';

import {useNavigation} from '@react-navigation/native';
import {logo} from '../../assets/images';

const Splash = () => {
  const navigation = useNavigation();

  const holdAction = () => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000);
  };

  holdAction();
  return (
    <View style={styles.container}>
      <Image
        resizeMode="resize"
        style={{height: 90, width: 250}}
        source={logo}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.WHITE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
