import React, {FC, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Colors from '@assets/colors/colors';
import {AuthContext} from '@components/AuthContext/AuthContext';
import scaleFontSize from '@utils/Dimensions';

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
  const {setTrending} = useContext(AuthContext);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnActive}
          onPress={() => setTrending(text)}>
          <Text style={styles.textActive}>{text}</Text>
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
    marginHorizontal: 5,
    marginTop: 20,
    height: 36,
    backgroundColor: Colors.washedGray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '20%',
    alignSelf: 'center',
  },
  textActive: {
    fontSize: scaleFontSize(12),
    fontWeight: '400',
    fontFamily: 'Mont-Regular',
    color: Colors.white,
  },
  textInActive: {
    fontSize: scaleFontSize(12),
    fontWeight: '400',
    color: Colors.gray,
  },
});

export default TrendingButton;
