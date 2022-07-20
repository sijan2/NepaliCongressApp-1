import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ProvinceScreen from '@screens/Province/Province';
import TrendingScreen from '@screens/Trending/Trending';

import Colors from '@assets/colors/colors';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @TopTabNavigator
 **/

/* Creating a tab navigator. */
const MaterialTab = createMaterialTopTabNavigator();
const TopTabNavigator: FC<IProps> = () => {
  return (
    <MaterialTab.Navigator
      initialRouteName="Provinces"
      screenOptions={{
        tabBarStyle: {
          marginRight: 80,
          elevation: 0,
          borderBottomColor: Colors.red,
        },
        tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15},
        tabBarIndicatorStyle: {
          backgroundColor: Colors.red,
          borderColor: Colors.red,
          borderWidth: 2,
        },
      }}>
      <MaterialTab.Screen name="Provinces" component={ProvinceScreen} />
      <MaterialTab.Screen name="Trending" component={TrendingScreen} />
    </MaterialTab.Navigator>
  );
};
export default TopTabNavigator;
