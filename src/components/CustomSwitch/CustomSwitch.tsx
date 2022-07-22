/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Colors from '@assets/colors/colors';

import {AuthContext} from '@components/AuthContext/AuthContext';
import scaleFontSize from '@utils/Dimensions';

/**
 * @author Nitesh Raj Khanal
 * @function @CustomSwitch
 **/

/* A custom switch component. */
const CustomSwitch = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}: any) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const {setColor} = useContext(AuthContext);
  const updateSwitchData = (value: any) => {
    setSelectionMode(value);
    onSelectSwitch(value);
    if (value === 2) {
      setColor(Colors.red);
    } else {
      setColor(Colors.black);
    }
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => updateSwitchData(1)}>
            <Text
              style={{
                color:
                  getSelectionMode === 1 ? Colors.black : Colors.washedGray,
                position: 'absolute',
                fontSize: scaleFontSize(16),
                fontFamily: 'Mont-Bold',
                left: 2,
                letterSpacing: 0.5,
              }}>
              {option1}
            </Text>
            <View
              style={{
                marginTop: 50,
                height: getSelectionMode === 1 ? 2 : 2,
                width: '120%',
                backgroundColor:
                  getSelectionMode === 1 ? Colors.red : Colors.washedGray,
                borderRadius: 10,
              }}></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}
            onPress={() => updateSwitchData(2)}>
            <Text
              style={{
                color:
                  getSelectionMode === 2 ? Colors.black : Colors.washedGray,
                fontFamily: 'Mont-Bold',
                fontSize: scaleFontSize(16),
                position: 'absolute',
                left: 6,
                letterSpacing: 0.5,
              }}>
              {option2}
            </Text>
            <View
              style={{
                marginTop: 50,
                height: getSelectionMode === 2 ? 2 : 2,
                width: '100%',
                backgroundColor:
                  getSelectionMode === 2 ? Colors.red : Colors.washedGray,
                borderRadius: 10,
              }}></View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 2,
            zIndex: -1,
            height: 3,
            width: '90%',
            backgroundColor: Colors.washedGray,
            borderRadius: 10,
          }}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    marginTop: 10,
    height: 44,
    marginHorizontal: 30,
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
  },
});

export default CustomSwitch;
