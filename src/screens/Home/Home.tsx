import Header from '@components/NCHeader/Header';
import React, {FC} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
import {View} from 'react-native';

import colors from '@assets/colors/colors';
import Advertisement from '@components/AdvertisementComponent/Advertisement';
import TopTabNavigator from '@navigation/TopTabNavigator';
interface IProps {}

/**
 * @author
 * @function @Home
 **/

const Home: FC<IProps> = () => {
  // const {container} = styles;
  return (
    <View>
      <Header fontColor={colors.fontColor} />
      <Advertisement />
      <TopTabNavigator />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default Home;
