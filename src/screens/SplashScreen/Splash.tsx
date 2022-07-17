import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NCLogo from '@assets/images/NCLogo.png';
import Colors from '@assets/colors/colors';

const SplashScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.splash}>
        <Image source={NCLogo} style={styles.logo} />
      </View>
      <Text style={styles.text}>Nepali Congress</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 110,
  },
  logo: {
    height: 50,
    width: 100,
  },
  text: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: 'Mont-Bold',
  },
});
