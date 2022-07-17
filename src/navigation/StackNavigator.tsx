import React, {FC, useState, useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NewsDetails from '@screens/NewsOpenPage/NewsDetails';
import TabNavigator from './TabNavigator';
import SplashScreen from '@screens/SplashScreen/Splash';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @StackNavigator
 **/

const StackNav = createNativeStackNavigator();

const StackNavigator: FC<IProps> = () => {
  const [showSplashScreen, setshowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 6000);
  }, []);
  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {showSplashScreen ? (
        <StackNav.Screen name="SplashScreen" component={SplashScreen} />
      ) : null}
      <StackNav.Screen name="TabNavigator" component={TabNavigator} />
      <StackNav.Screen name="DetailScreen" component={NewsDetails} />
    </StackNav.Navigator>
  );
};

export default StackNavigator;
