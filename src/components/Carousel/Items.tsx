import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Colors from '@assets/colors/colors';
import {useNavigation} from '@react-navigation/native';

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
}

import scaleFontSize, {WIDTH, HEIGHT} from '@utils/Dimensions';

/**
 * The Carouselitem function is a functional component that takes in an item as a prop and returns a
 * TouchableOpacity component that navigates to the DetailScreen when pressed
 * @param  - FC<Ilist> = ({item}) => {
 * @returns A TouchableOpacity component that navigates to the DetailScreen when pressed.
 */
const Carouselitem: FC<Ilist> = ({item}) => {
  const navigation: any = useNavigation();
  const handleOnPress = () => {
    return navigation.navigate('DetailScreen', {
      id: item.id,
      image: item.image,
      title: item.title,
      name: item.name,
      date: item.date,
      description: item.description,
    });
  };
  return (
    <>
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.cardView}>
          <View>
            <Image style={styles.image} source={item.image} />
            <View style={styles.textView}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.detailsContainer}>
                <View style={styles.nested}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.date}</Text>
                  <Text style={styles.text}>{item.state}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: WIDTH * 0.92,
    height: HEIGHT * 0.29,
    backgroundColor: Colors.red,
    marginHorizontal: WIDTH * 0.04,
    marginVertical: WIDTH * 0.04,
    borderRadius: 20,
  },
  textView: {
    marginHorizontal: 10,
    position: 'absolute',
    zIndex: 2,
    margin: 10,
    borderRadius: 10,
    marginTop: HEIGHT * 0.14,
    opacity: 0.95,
    backgroundColor: Colors.white,
    width: '94.5%',
  },
  image: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 20,
    fontSize: scaleFontSize(13),
    lineHeight: 17,
    letterSpacing: 0.4,
    color: Colors.black,
    fontFamily: 'Mont-Bold',
  },
  detailsContainer: {},
  text: {
    flexDirection: 'row',
    fontSize: scaleFontSize(11),
    fontFamily: 'Mont-Bold',
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
