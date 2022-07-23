/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '@assets/colors/colors';
import scaleFontSize from '@utils/Dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSaved} from '@components/SavedProvider/SavedProvider';
import {useNavigation} from '@react-navigation/native';
import SavedNews from '@components/SavedNews/SavedNews';

/**
 * @author Nitesh Raj Khanal
 * @function @SavedScreen
 **/

/**
 * It returns a View component with a Text component inside of it
 * @returns A View component with a Text component nested inside.
 */

const reversedData = (data: any) => {
  return data.sort((a: any, b: any) => {
    const aInt = parseInt(a.time);
    const bInt = parseInt(b.time);
    if (aInt < bInt) {
      return 1;
    }
    if (aInt === bInt) {
      return 0;
    }
    if (aInt > bInt) {
      return -1;
    }
  });
};

const SavedScreen = () => {
  const {saved, findSaved} = useSaved();
  const navigation = useNavigation();
  const LoadSaved = async () => {
    console.log('Saved', saved);
    return await findSaved();
  };
  const openSaved = (saved: any) => {
    navigation.navigate('NewsOpenPage', {saved});
  };
  const reversedNews = reversedData(saved);
  return <SavedNews data={reversedNews} />;
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
