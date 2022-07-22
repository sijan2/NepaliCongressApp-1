import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '@assets/colors/colors';
import scaleFontSize from '@utils/Dimensions';

/**
 * @author Nitesh Raj Khanal
 * @function @SavedScreen
 **/

/**
 * It returns a View component with a Text component inside of it
 * @returns A View component with a Text component nested inside.
 */
const SavedScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Coming Soon!</Text>
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  text: {
    marginTop: 300,
    color: Colors.red,
    fontSize: scaleFontSize(20),
    fontFamily: 'Mont-Bold',
  },
});
