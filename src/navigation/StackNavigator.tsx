import React, {FC, useState, useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NewsDetails from '@screens/NewsOpenPage/NewsDetails';
import TabNavigator from './TabNavigator';
import SplashScreen from '@screens/SplashScreen/Splash';
import SavedScreen from '@screens/Saved/Saved';
interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @StackNavigator
 **/

const StackNav = createNativeStackNavigator();

/**
 * We are using the useState hook to set the showSplashScreen state to true. We are using the useEffect
 * hook to set the showSplashScreen state to false after 2 seconds. We are using the StackNavigator
 * component to render the SplashScreen component if the showSplashScreen state is true
 * @returns A StackNavigator component
 */
const StackNavigator: FC<IProps> = () => {
  const [showSplashScreen, setshowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 2000);
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
      <StackNav.Screen name="SavedScreen" component={SavedScreen} />
    </StackNav.Navigator>
  );
};

export default StackNavigator;
