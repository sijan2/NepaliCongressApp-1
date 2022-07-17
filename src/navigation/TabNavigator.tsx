import React, {FC} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SavedScreen from '@screens/Saved/Saved';
import HomeScreen from '@screens/Home/Home';
import Home from '@assets/icons/home.svg';
import SavedIcon from '@assets/icons/Save.svg';
import Colors from '@assets/colors/colors';
import Header from '@components/NCHeader/Header';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @TabNavigator
 **/

const TabNav = createBottomTabNavigator();
const TabNavigator: FC<IProps> = () => {
  return (
    <>
      <Header />
      <TabNav.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 11,
            marginBottom: 10,
            color: Colors.gray,
          },

          tabBarStyle: {
            marginHorizontal: 120,
            backgroundColor: Colors.white,
            elevation: 0,
            height: 60,
          },
        }}>
        <TabNav.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <Home width={25} height={25} fill="none" />,
          }}
        />
        <TabNav.Screen
          name="Settings"
          component={SavedScreen}
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: () => <SavedIcon width={25} height={25} fill="none" />,
          }}
        />
      </TabNav.Navigator>
    </>
  );
};

export default TabNavigator;
