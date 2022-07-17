import React, {FC} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Colors from '@assets/colors/colors';
import {WIDTH, HEIGHT} from '@utils/Dimensions';

interface IProps {
  item: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @CarouselItem
 **/

const CarouselItem: FC<IProps> = ({item}) => {
  const navigation: any = useNavigation();
  const handleOnPress = () => {
    return navigation.navigate('DetailScreen');
  };
  const {cardView, image, textView, title, textShow, nested, text} = styles;
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={cardView}>
        <View>
          <Image style={image} source={item.image} />
          <View style={textView}>
            <Text style={title}>{item.title}</Text>
            <View style={textShow}>
              <View style={nested}>
                <Text style={text}>{item.name}</Text>
                <Text style={text}>{item.date}</Text>
                <Text style={text}>{item.state}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: WIDTH - 20,
    height: HEIGHT / 3.5,
    backgroundColor: Colors.red,
    margin: 10,
    borderRadius: 20,
  },
  textView: {
    marginHorizontal: 10,
    position: 'absolute',
    zIndex: 2,
    margin: 10,
    borderRadius: 10,
    marginTop: 100,
    opacity: 0.95,
    backgroundColor: Colors.white,
    width: '95%',
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
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '700',
    color: Colors.black,
  },
  textShow: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  text: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    fontSize: 12,
    fontWeight: '700',
    color: Colors.red,
    margin: 25,
    lineHeight: 13,
    marginBottom: 10,
  },
  nested: {
    flexDirection: 'row',
  },
  view: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
});

export default CarouselItem;
