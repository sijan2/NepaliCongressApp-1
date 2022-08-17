import React, {FC, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '@constants/colors/colors';

/**
 * @author Nitesh Raj Khanal
 * @function @CustomButton
 **/

import {AuthContext} from '@components/ContextStore/AuthContext/AuthContext';
import Metrics from '@constants/metrics/Metrics';
import Fonts from '@constants/fonts/fonts';
interface button {
  onPress?: () => void;
  text: string;
  provinceCode: string;
}
/**
 * A function that returns a view with a button that when pressed sets the province to the text passed
 * in.
 * @param  - FC<button> = ({text}) => {
 * @returns A custom button component that takes in a text prop and returns a button with the text prop
 * as the text.
 */
const CustomButton: FC<button> = ({text, provinceCode}) => {
  const {myProvince, setMyProvince} = useContext(AuthContext);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          key={0}
          style={
            myProvince.toLowerCase() === provinceCode?.toLowerCase()
              ? styles.btnActive
              : styles.btnInActive
          }
          onPress={() => {
            setMyProvince(provinceCode);
          }}>
          <Text
            style={
              myProvince.toLowerCase() === provinceCode?.toLowerCase()
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
    color: Colors.white,
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

export default CustomButton;
