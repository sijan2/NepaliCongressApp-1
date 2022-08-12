import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import NCLogo from '@assets/images/NCLogo.png';
import Colors from '@constants/colors/colors';
import Metrics from '@constants/metrics/Metrics';
import Fonts from '@constants/fonts/fonts';

/**
 * @author Nitesh Raj Khanal
 * @function @SplashScreen
 **/

/**
 * It returns a View component that contains a View component that contains an Image component that
 * contains a logo
 * @returns A view with a logo and text.
 */
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
    height: 100,
    width: 110,
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  text: {
    color: Colors.black,
    fontSize: Metrics.h3,
    fontFamily: Fonts.type.montBold,
  },
});
