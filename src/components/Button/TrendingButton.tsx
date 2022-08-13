import React, {FC, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Colors from '@constants/colors/colors';
import {AuthContext} from '@components/ContextStore/AuthContext/AuthContext';
import Metrics from '@constants/metrics/Metrics';
import Fonts from '@constants/fonts/fonts';

/**
 * @author Nitesh Raj Khanal
 * @function @TrendingButton
 **/
interface button {
  onPress?: () => void;
  text?: string;
}
/**
 * This function is a React functional component that takes in a button prop and returns a
 * TouchableOpacity component that when pressed sets the trending state to the text prop
 * @param  - FC<button> = ({text}) => {
 * @returns A button that is being returned.
 */
const TrendingButton: FC<button> = ({text}) => {
  const {trending, setTrending} = useContext(AuthContext);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={
            trending.toLowerCase() === text?.toLowerCase()
              ? styles.btnActive
              : styles.btnInActive
          }
          onPress={() => setTrending(text)}>
          <Text
            style={
              trending.toLowerCase() === text?.toLowerCase()
                ? styles.textActive
                : styles.textInActive
            }>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 3,
    flex: 1,
    flexDirection: 'row',
  },
  btnActive: {
    marginLeft: 11,
    marginRight: 11,
    marginTop: 20,
    height: 30,
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
  btnInActive: {
    marginLeft: 11,
    marginRight: 11,
    marginTop: 20,
    height: 30,
    backgroundColor: Colors.washedGray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
  textActive: {
    fontSize: Metrics.body6,
    fontWeight: '400',
    fontFamily: Fonts.type.montRegular,
    color: Colors.white,
  },
  textInActive: {
    fontSize: Metrics.body6,
    fontWeight: '400',
    fontFamily: Fonts.type.montRegular,
    color: Colors.gray,
  },
});

export default TrendingButton;
