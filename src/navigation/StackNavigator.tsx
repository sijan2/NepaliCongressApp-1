import React, {FC} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '@screens/Home/Home';
import NewsDetails from '@screens/NewsOpenPage/NewsDetails';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @StackNavigator
 **/

const StackNav = createNativeStackNavigator();

const StackNavigator: FC<IProps> = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="HomeStack"
        component={Home}
        options={{headerShown: false}}
      />
      <StackNav.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{headerShown: false}}
      />
    </StackNav.Navigator>
  );
};

export default StackNavigator;
