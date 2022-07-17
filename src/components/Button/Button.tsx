import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Colors from '@assets/colors/colors';

interface IProps {
  text: string;
}

/**
 * @author Nitesh Raj Khanal
 * @function @CustomButton
 **/

const CustomButton: FC<IProps> = ({text}) => {
  const {container, btnActive, textActive} = styles;
  return (
    <>
      <View style={container}>
        <TouchableOpacity style={btnActive}>
          <Text style={textActive}>{text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
  },
  btnActive: {
    marginLeft: 10,
    marginRight: 10,
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
    color: Colors.white,
  },
  textInActive: {
    fontSize: 13,

    fontWeight: '400',
    color: Colors.gray,
  },
});

export default CustomButton;
