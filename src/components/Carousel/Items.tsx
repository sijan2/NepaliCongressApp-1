import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {FC} from 'react';
import Colors from '@constants/colors/colors';
import {useNavigation} from '@react-navigation/native';
import {dateFormatter} from '@utils/DayGen';
/**
 * @author Nitesh Raj Khanal
 * @function @Items
 **/
interface Ilist {
  id?: any;
  image?: any;
  title?: string;
  name?: string;
  date?: string;
  description?: string;
  item?: any;
  index?: any;
  sourceLink?: string;
}

import {WIDTH, HEIGHT} from '@utils/Dimensions';
import Fonts from '@constants/fonts/fonts';
import Metrics from '@constants/metrics/Metrics';
import {titleCharactersCounter} from '@utils/titleCharCounter';
import RenderHTML from 'react-native-render-html';
import {BASE_URL} from '@constants/NewsConstant/NewsConstants';

/**
 * The Carouselitem function is a functional component that takes in an item as a prop and returns a
 * TouchableOpacity component that navigates to the DetailScreen when pressed
 * @param  - FC<Ilist> = ({item}) => {
 * @returns A TouchableOpacity component that navigates to the DetailScreen when pressed.
 */
const Carouselitem: FC<Ilist> = ({item}) => {
  const navigation: any = useNavigation();
  const cms_title = {html: item.title};
  const handleOnPress = () => {
    return navigation.navigate('DetailScreen', {
      id: item.id,
      image: item.image,
      title: item.title,
      name: item.source_title,
      date: item.published_date,
      description: item.description,
      sourceLink: item.source_link,
    });
  };

  const formattedDate = dateFormatter(item.published_date);
  const newDate = formattedDate.date;
  const newMonth = formattedDate.month;
  const newYear = formattedDate.year;

  const mixedStyle = {
    ...styles.title,
    fontSize: titleCharactersCounter(item.title) > 70 ? Metrics.h6 : Metrics.h5,
  };
  const formatted = `${newMonth} ${newDate}, ${newYear}`;
  const imageUri = BASE_URL + item.image;
  return (
    <>
      <TouchableOpacity onPress={handleOnPress}>
        <ImageBackground
          style={[styles.image, styles.cardView]}
          source={{uri: imageUri}}>
          <View style={styles.textView}>
            <RenderHTML
              contentWidth={WIDTH}
              source={cms_title}
              baseStyle={mixedStyle}
            />
            <View style={styles.detailsContainer}>
              <View style={styles.nested}>
                <Text style={styles.text}>{item.source_title}</Text>
                <Text style={styles.text}>{formatted}</Text>
                <Text style={styles.text}>{item.state}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: WIDTH * 0.92,
    height: HEIGHT * 0.28,
    backgroundColor: Colors.red,
    marginHorizontal: WIDTH * 0.04,
    marginVertical: WIDTH * 0.04,
    alignItems: 'center',
  },
  textView: {
    position: 'absolute',
    borderRadius: 10,
    marginTop: HEIGHT * 0.14,
    opacity: 0.87,
    backgroundColor: Colors.white,
    width: '94.5%',
  },
  image: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    flex: 1,
    overflow: 'hidden',
  },
  title: {
    marginHorizontal: 10,
    marginTop: 20,
    lineHeight: 17,
    letterSpacing: 0.4,
    color: Colors.black,
    fontFamily: Fonts.type.montBold,
    fontWeight: 'bold',
  },
  detailsContainer: {},
  text: {
    flexDirection: 'row',
    fontSize: Metrics.body7,
    fontFamily: Fonts.type.montBold,
    color: Colors.red,
    marginTop: 15,
    lineHeight: 13,
    marginBottom: 10,
  },
  nested: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 55,
  },
});

export default Carouselitem;
