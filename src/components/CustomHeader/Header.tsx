import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Logo from '@assets/images/NCLogo.png';
import {Surface} from 'react-native-paper';
import Colors from '@assets/colors/colors';
import Search from '@assets/icons/Search.svg';

import DateAndDayGenerator from '@utils/DayGen';
import {HEIGHT, WIDTH} from '@utils/Dimensions';

const Header = () => {
  const date = new Date();
  const dateAndDay = DateAndDayGenerator(date);
  return (
    <SafeAreaView>
      <Surface style={styles.header}>
        <View style={styles.view}>
          <View style={styles.Logo}>
            <Image source={Logo} style={styles.image} />
          </View>
          <View style={styles.texts}>
            <Text style={styles.text}>Nepali Congress</Text>
            <Text style={styles.date}>{`${dateAndDay.day}, ${
              dateAndDay.month
            } ${dateAndDay.date},${' '}${dateAndDay.year}`}</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.search}>
              <Search width={22} height={22} fill="none" />
            </View>
          </TouchableOpacity>
        </View>
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  view: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Logo: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    width: WIDTH * 0.15,
    height: HEIGHT * 0.055,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  texts: {
    marginLeft: 4,
    marginRight: WIDTH * 0.22,
  },
  text: {
    fontSize: 19,
    color: Colors.black,
    fontFamily: 'Mont-Bold',
    width: WIDTH * 0.434,
  },
  date: {
    marginTop: 4,
    fontSize: 11,
    color: Colors.gray,
    fontFamily: 'Mont-Regular',
  },
  search: {},
});

export default Header;
