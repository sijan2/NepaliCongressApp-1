import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Surface} from 'react-native-paper';

import DateAndDayGenerator from '@utils/DayGen';
import NCLogo from '@assets/images/NCLogo.png';
import Search from '@assets/icons/Search.svg';
import colors from '@assets/colors/colors';

// import {WIDTH} from '@utils/Dimensions';

interface IProps {
  fontColor: string;
}

/**
 * @author Nitesh Raj Khanal
 * @function @Header
 **/

const Header: FC<IProps> = () => {
  const date = new Date();
  const dateAndDay = DateAndDayGenerator(date);

  const {header, view, Logo, image, texts, text, dateDayText, search} = styles;
  return (
    <SafeAreaView>
      <Surface style={header}>
        <View style={view}>
          <View style={Logo}>
            <Image source={NCLogo} style={image} />
          </View>
          <View style={texts}>
            <Text style={text}>Nepali Congress</Text>
            <Text
              style={
                dateDayText
              }>{`${dateAndDay.day}, ${dateAndDay.month} ${dateAndDay.date},${dateAndDay.year}`}</Text>
          </View>
          <TouchableOpacity style={search}>
            <Search width={25} height={25} fill="none" />
          </TouchableOpacity>
        </View>
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
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
    marginRight: 80,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  dateDayText: {
    fontSize: 14,
    color: colors.gray,
  },
  search: {
    marginRight: 10,
  },
});

export default Header;
