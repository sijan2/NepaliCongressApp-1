import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from '@assets/images/NCLogo.png';
import {Surface} from 'react-native-paper';
import Colors from '@assets/colors/colors';
import Search from '@assets/icons/Search.svg';

const Header = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const week = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let date = new Date().getDay();
    let week_name = week[date];
    let date_number = new Date().getDate();
    let month = new Date();
    let month_name = months[month.getMonth()];
    let year = new Date().getFullYear();

    setCurrentDate(
      week_name + ', ' + month_name + ' ' + date_number + ', ' + year,
    );
  }, []);
  return (
    <SafeAreaView>
      <Surface style={styles.header}>
        <View style={styles.view}>
          <View style={styles.Logo}>
            <Image source={Logo} style={styles.image} />
          </View>
          <View style={styles.texts}>
            <Text style={styles.text}>Nepali Congress</Text>
            <Text style={styles.date}>{currentDate}</Text>
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
    height: 50,
    width: 80,
  },
  texts: {
    marginRight: 70,
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
