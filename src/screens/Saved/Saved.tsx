import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '@assets/colors/colors';

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
    fontSize: 20,
    fontFamily: 'Mont-Bold',
  },
});
