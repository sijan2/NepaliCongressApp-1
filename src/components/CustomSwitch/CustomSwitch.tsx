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
                fontWeight: getSelectionMode === 1 ? 'normal' : '600',
                fontSize: 16,
                fontFamily: 'Mont-Bold',
                left: 7,
              }}>
              {option1}
            </Text>
            <View
              style={{
                marginTop: 50,
                height: getSelectionMode === 1 ? 3 : 2,
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
                fontWeight: getSelectionMode === 2 ? 'normal' : '600',
                fontFamily: 'Mont-Bold',
                fontSize: 16,
                position: 'absolute',
                left: 10,
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
