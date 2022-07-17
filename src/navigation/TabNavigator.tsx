import React, {FC} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Saved from '@screens/Saved/Saved';

import Home from '@assets/icons/home.svg';
import SavedIcon from '@assets/icons/Save.svg';
import colors from '@assets/colors/colors';
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
      <Header fontColor={colors.red} />
      <TabNav.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 8,
            fontWeight: '600',
            lineHeight: 13,
            textAlign: 'center',
            fontFamily: 'Mont-Regular',
            color: colors.gray,
            marginBottom: 4.41,
            marginTop: 2.57,
          },
          tabBarIconStyle: {
            marginTop: 10.98,
          },
          tabBarStyle: {
            backgroundColor: 'rgba(34,36,40,1)',
          },
        }}>
        <TabNav.Screen
          name="Home"
          component={StackNavigator}
          options={({route}) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
            },
            tabBarIcon: () => <Home width={25} height={25} fill="none" />,
          })}
        />
        <TabNav.Screen
          name="Saved"
          component={Saved}
          options={({route}) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
            },
            tabBarIcon: () => <SavedIcon width={25} height={25} fill="none" />,
          })}
        />
      </TabNav.Navigator>
    </>
  );
};

const getTabBarVisibility = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  if (routeName === 'HomeStack') {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
