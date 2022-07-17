import React, {FC} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NewsDetails from '@screens/NewsOpenPage/NewsDetails';
import TabNavigator from './TabNavigator';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @StackNavigator
 **/

const StackNav = createNativeStackNavigator();

const StackNavigator: FC<IProps> = () => {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackNav.Screen name="TabNavigator" component={TabNavigator} />
      <StackNav.Screen name="DetailScreen" component={NewsDetails} />
    </StackNav.Navigator>
  );
};

export default StackNavigator;
