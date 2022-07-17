import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Colors from '@assets/colors/colors';

interface button {
  onPress?: () => void;
  text?: string;
}
const CustomButton: FC<button> = ({text}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnActive}>
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
    marginRight: 12,
    marginTop: 20,
    height: 36,
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: '100%',
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
