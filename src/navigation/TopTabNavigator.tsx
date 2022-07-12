import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@screens/Home/Home';
import Saved from '@screens/Saved/Saved';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @TopTabNavigator
 **/

const MaterialTab = createMaterialTopTabNavigator();
const TopTabNavigator: FC<IProps> = () => {
  return (
    <MaterialTab.Navigator>
      <MaterialTab.Screen name="Province" component={Home} />
      <MaterialTab.Screen name="Trending" component={Saved} />
    </MaterialTab.Navigator>
  );
};
export default TopTabNavigator;
