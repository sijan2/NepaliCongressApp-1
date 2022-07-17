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
              <Search width={20} height={20} fill="none" />
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    width: '100%',
  },
  view: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Logo: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 40,
    width: 60,
  },
  texts: {
    marginRight: 95,
  },
  text: {
    fontSize: 20,
    color: Colors.black,
    fontFamily: 'Mont-Bold',
  },
  date: {
    marginTop: 2,
    fontSize: 14,
    color: Colors.gray,
    fontFamily: 'Mont-Regular',
  },
  search: {
    marginRight: 10,
  },
});

export default Header;
