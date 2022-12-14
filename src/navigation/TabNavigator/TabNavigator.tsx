import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '@constants/colors/colors';
import Svg, {Path} from 'react-native-svg';
import Header from '@components/CustomHeader/Header';
import HomeScreen from '@screens/Home/Home';
import SavedScreen from '@screens/Saved/Saved';

import {HEIGHT, WIDTH} from '@utils/Dimensions';
const Tab = createBottomTabNavigator();

/**
 * @author Nitesh Raj Khanal
 * @function @TabNavigator
 **/

/* A function that returns a view. */
const TabNavigator = () => {
  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarStyle: {
            backgroundColor: Colors.white,
            elevation: 0,
            height: 60,
            position: 'absolute',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <View style={styles.tabBar}>
                <Svg
                  width={23}
                  fill={focused ? Colors.red : Colors.white}
                  style={styles.icon}
                  height={23}
                  stroke={Colors.red}>
                  <Path d="M3.23108 7.9142L10.7311 2.08087L18.2311 7.9142V17.0809C18.2311 17.5229 18.0555 17.9468 17.7429 18.2594C17.4304 18.5719 17.0064 18.7475 16.5644 18.7475H4.89775C4.45572 18.7475 4.03179 18.5719 3.71923 18.2594C3.40667 17.9468 3.23108 17.5229 3.23108 17.0809V7.9142Z" />
                </Svg>
                <Text style={styles.text}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SavedScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <View style={styles.tabBar1}>
                <Svg
                  width={23}
                  style={styles.icon1}
                  fill={focused ? Colors.red : Colors.white}
                  height={23}
                  stroke={Colors.red}>
                  <Path d="M16.0183 17.9142L10.1849 14.5809L4.35159 17.9142V4.58085C4.35159 4.13882 4.52719 3.7149 4.83975 3.40234C5.15231 3.08978 5.57623 2.91418 6.01826 2.91418H14.3516C14.7936 2.91418 15.2175 3.08978 15.5301 3.40234C15.8427 3.7149 16.0183 4.13882 16.0183 4.58085V17.9142Z" />
                </Svg>
                <Text style={styles.text1}>Saved</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    marginTop: HEIGHT * 0.024,
    marginLeft: WIDTH * 0.03,
    flexDirection: 'column',
    marginBottom: HEIGHT * 0.024,
  },
  tabBar1: {
    marginTop: HEIGHT * 0.024,
    marginRight: WIDTH * 0.27,
    flexDirection: 'column',
    marginBottom: HEIGHT * 0.024,
  },
  icon: {
    marginLeft: WIDTH * 0.245,
  },

  icon1: {
    marginLeft: WIDTH * 0.019,
  },
  text: {
    marginTop: 3,
    right: -90,
    fontFamily: 'Mont-Regular',
    fontSize: 12,
    color: Colors.black,
  },
  text1: {
    marginTop: 3,
    left: -3,
    fontFamily: 'Mont-Regular',
    fontSize: 12,
    color: Colors.black,
  },
});

export default TabNavigator;
