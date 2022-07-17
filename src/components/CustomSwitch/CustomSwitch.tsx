/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '@assets/colors/colors';

const CustomSwitch = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}: any) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updateSwitchData = (value: any) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };
  return (
    <>
      <View>
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
                fontWeight: getSelectionMode === 1 ? '800' : '600',
                fontSize: 16,
                fontFamily: 'Mont-SemiBold',
                left: 10,
              }}>
              {option1}
            </Text>
            <View
              style={{
                marginTop: 50,
                height: getSelectionMode === 1 ? 3 : 2,
                width: '100%',
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
            }}
            onPress={() => updateSwitchData(2)}>
            <Text
              style={{
                color:
                  getSelectionMode === 2 ? Colors.black : Colors.washedGray,
                fontWeight: getSelectionMode === 2 ? '800' : '600',
                fontFamily: 'Mont-SemiBold',
                fontSize: 15,
                position: 'absolute',
                left: 15,
              }}>
              {option2}
            </Text>
            <View
              style={{
                marginTop: 50,
                height: getSelectionMode === 2 ? 3 : 2,
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

export default CustomSwitch;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 44,
    marginHorizontal: 20,
    // backgroundColor: Colors.red,
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
  },
  // touch: {
  //     flex: 1,
  //     backgroundColor: getSelectionMode === 1 ? Colors.red : Colors.grey,
  //     borderRadius: 10,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  // }
});
