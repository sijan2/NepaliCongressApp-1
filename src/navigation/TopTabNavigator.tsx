import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Saved from '@screens/Saved/Saved';
import Province from '@components/Province/Province';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @TopTabNavigator
 **/

const MaterialTab = createMaterialTopTabNavigator();
const TopTabNavigator: FC<IProps> = () => {
  return (
    <MaterialTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarStyle: {
          backgroundColor: 'red',
          elevation: 0, //for android devices
          shadowOffset: {width: 0, height: 0}, //for ios devices
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'orange',
      }}>
      <MaterialTab.Screen name="Province" component={Province} />
      <MaterialTab.Screen name="Trending" component={Saved} />
    </MaterialTab.Navigator>
  );
};
export default TopTabNavigator;
