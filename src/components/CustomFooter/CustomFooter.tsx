import colors from '@constants/colors/colors';
import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HomeLogo from '@assets/icons/home.svg';
import SavedLogo from '@assets/icons/Save.svg';
import scaleFontSize from '@utils/Dimensions';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @CustomFooter
 **/

const CustomFooter: FC<IProps> = () => {
  const {container} = styles;
  const navigation = useNavigation();
  return (
    <View style={container}>
      <TouchableOpacity
        style={styles.buttonTab}
        onPress={() => navigation.goBack()}>
        <HomeLogo width={20} height={20} fill="none" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonTab}
        onPress={() => Alert.alert('Coming Soon')}>
        <SavedLogo width={20} height={20} fill="none" />
        <Text style={styles.text}>Saved</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
    marginLeft: 25,
  },
  text: {
    fontSize: scaleFontSize(12),
    fontFamily: 'Mont-Regular',
    marginTop: 3,
    color: colors.black,
  },
});

export default CustomFooter;
