import React, {FC, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '@assets/colors/colors';

/**
 * @author Nitesh Raj Khanal
 * @function @CustomButton
 **/

import {AuthContext} from '@components/AuthContext/AuthContext';
interface button {
  onPress?: () => void;
  text?: string;
}
/**
 * A function that returns a view with a button that when pressed sets the province to the text passed
 * in.
 * @param  - FC<button> = ({text}) => {
 * @returns A custom button component that takes in a text prop and returns a button with the text prop
 * as the text.
 */
const CustomButton: FC<button> = ({text}) => {
  const {setMyProvince} = useContext(AuthContext);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnActive}
          onPress={() => setMyProvince(text)}>
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
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Mont-Regular',
    color: Colors.white,
  },
  textInActive: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.gray,
  },
});

export default CustomButton;
