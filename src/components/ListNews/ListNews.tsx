import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Colors from '@constants/colors/colors';
import {WIDTH} from '@utils/Dimensions';
import Metrics from '@constants/metrics/Metrics';
import Fonts from '@constants/fonts/fonts';
import RenderHTML from 'react-native-render-html';
import {dateFormatter} from '@utils/DayGen';

/**
 * @author Nitesh Raj Khanal
 * @function @ListNews
 **/

interface list {
  id?: any;
  image?: any;
  title?: any;
  name?: string;
  date?: string;
  description?: string;
  sourceLink?: string;
}
/**
 * The ListNews function is a functional component that takes in an object of type list as a parameter
 * and returns a TouchableOpacity component that navigates to the DetailScreen when pressed
 * @param  - id, image, title, name, date, description
 * @returns A TouchableOpacity component that navigates to the DetailScreen when pressed.
 */
const ListNews: FC<list> = React.memo(function ListNews({
  id,
  image,
  title,
  name,
  date,
  description,
  sourceLink,
}) {
  const navigation: any = useNavigation();
  const cms_title = {html: title};
  const handleOnPress = () => {
    return navigation.navigate('DetailScreen', {
      id,
      image,
      title,
      name,
      date,
      description,
      sourceLink,
    });
  };
  const mixedStyle = {
    ...styles.title,
  };

  const formattedDate = dateFormatter(date);
  const newDate = formattedDate.date;
  const newMonth = formattedDate.month;
  const newYear = formattedDate.year;

  const formatted = `${newMonth} ${newDate}, ${newYear}`;

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.mainContainer}>
        <View style={styles.list}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        </View>
        <View style={styles.textView}>
          <RenderHTML
            contentWidth={WIDTH}
            source={cms_title}
            baseStyle={mixedStyle}
          />
          <View style={styles.name}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{formatted}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default ListNews;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    height: 90,
    borderRadius: 10,
    backgroundColor: Colors.red,
    marginRight: 10,
    width: WIDTH * 0.43,
    marginLeft: 10,
  },
  image: {
    height: '100%',
    borderRadius: 10,
    width: '100%',
  },
  textView: {
    width: WIDTH * 0.46,
    marginRight: 10,
    justifyContent: 'center',
  },
  title: {
    color: Colors.black,
    fontSize: Metrics.body5,
    fontFamily: Fonts.type.montBold,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  name: {
    flexDirection: 'row',
  },
  text: {
    fontSize: Metrics.body8,
    fontFamily: 'Mont-Bold',
    textAlign: 'justify',
    marginTop: 20,
    color: Colors.red,
    marginRight: 15,
  },
});
