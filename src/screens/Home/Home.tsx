import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import TopTabNavigator from '@navigation/TopTabNavigator';

import Advertisement from '@assets/images/advertisement.png';
interface IProps {}

/**
 * @author
 * @function @Home
 **/

const Home: FC<IProps> = () => {
  const {advertise} = styles;
  return (
    <View>
      <ScrollView>
        <View>
          <Image source={Advertisement} style={advertise} />
        </View>
        <TopTabNavigator />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  advertise: {
    height: 60,
    width: '100%',
  },
});

export default Home;
