import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import DateAndDayGenerator from '@utils/DayGen';
import NCLogo from '@assets/images/NCLogo.png';
import Search from '@assets/icons/Search.svg';
import colors from '@assets/colors/colors';

import {WIDTH} from '@utils/Dimensions';

interface IProps {
  fontColor: string;
}

/**
 * @author Nitesh Raj Khanal
 * @function @Header
 **/

const Header: FC<IProps> = (props: any) => {
  const date = new Date();
  const dateAndDay = DateAndDayGenerator(date);

  const {
    container,
    headerContainer,
    imageContainer,
    logo,
    partyNameContainer,
    partyName,
    dateDay,
    dateDayText,
    searchContainer,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={headerContainer}>
        <View style={imageContainer}>
          <Image source={NCLogo} style={logo} />
        </View>
        <View style={partyNameContainer}>
          <Text style={[partyName, {color: props.fontColor}]}>
            Nepali Congress
          </Text>
          <View style={dateDay}>
            <Text
              style={
                dateDayText
              }>{`${dateAndDay.day}, ${dateAndDay.month} ${dateAndDay.date},${dateAndDay.year}`}</Text>
          </View>
        </View>
        <TouchableOpacity style={searchContainer}>
          <Search width={25} height={25} fill="none" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    position: 'absolute',
    width: WIDTH * 0.15875,
    height: 42.15,
    left: 16.09,
    top: 16,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  partyNameContainer: {
    paddingTop: 4,
    height: 42.15,
    flexDirection: 'column',
    position: 'absolute',
    top: 14,
    left: 78,
    marginLeft: 9,
  },
  partyName: {
    fontSize: 18,
    fontFamily: 'Mont-Bold',
  },
  dateDay: {},
  dateDayText: {
    fontFamily: 'Mont-Regular',
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '500',
    color: colors.fontColor,
  },
  searchContainer: {
    marginLeft: 'auto',
    marginRight: 18.55,
    top: 16,
    height: 42.15,
    justifyContent: 'center',
  },
});

export default Header;
