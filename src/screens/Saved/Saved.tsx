/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '@assets/colors/colors';
import scaleFontSize from '@utils/Dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @author Nitesh Raj Khanal
 * @function @SavedScreen
 **/

/**
 * It returns a View component with a Text component inside of it
 * @returns A View component with a Text component nested inside.
 */
const SavedScreen = () => {
  const initialSaved: any[] | (() => any[]) = [];
  const [saved, setSaved] = useState(initialSaved);

  const LoadSaved = async () => {
    AsyncStorage.getItem('savedNews')
      .then(data => {
        if (data !== null) {
          setSaved(JSON.parse(data));
        }
        console.log('Saved News =>', data);
      })
      .catch(error => {
        console.log('Error =>', error);
      });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={LoadSaved}>
      <Text style={styles.text}>Press Me to retrieve data</Text>
    </TouchableOpacity>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  text: {
    color: Colors.red,
    fontSize: scaleFontSize(20),
    fontFamily: 'Mont-Bold',
  },
  button: {
    marginTop: 200,
    backgroundColor: 'black',
  },
});
