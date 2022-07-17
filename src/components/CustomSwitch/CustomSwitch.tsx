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
            color: getSelectionMode === 1 ? Colors.black : Colors.gray,
            position: 'absolute',
            fontWeight: getSelectionMode === 1 ? '800' : '600',
            fontSize: 16,
            fontFamily: 'Mont-SemiBold',
            left: 30,
          }}>
          {option1}
        </Text>
        <View
          style={{
            marginTop: 50,
            height: getSelectionMode === 1 ? 5 : 3,
            width: '100%',
            backgroundColor: getSelectionMode === 1 ? Colors.red : Colors.gray,
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
            color: getSelectionMode == 2 ? Colors.black : Colors.gray,
            fontWeight: getSelectionMode == 2 ? '800' : '600',
            fontFamily: 'Mont-SemiBold',
            fontSize: 15,
            position: 'absolute',
            left: 30,
          }}>
          {option2}
        </Text>
        <View
          style={{
            marginTop: 50,
            height: getSelectionMode === 2 ? 5 : 3,
            width: '100%',
            backgroundColor: getSelectionMode === 2 ? Colors.red : Colors.gray,
            borderRadius: 10,
          }}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    marginHorizontal: 20,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
  },
});

export default CustomSwitch;
