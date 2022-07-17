import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Colors from '@assets/colors/colors';

interface IProps {
  id?: any;
  image?: any;
  title?: string;
  name?: string;
  date?: string;
  description?: string;
}

/**
 * @author Nitesh Raj Khanal
 * @function @ListNews
 **/

const ListNews: FC<IProps> = ({id, image, title, name, date, description}) => {
  const {
    mainContainer,
    list,
    imageStyle,
    textView,
    titleStyle,
    nameStyle,
    text,
  } = styles;
  const navigation: any = useNavigation();
  const handleOnPress = () => {
    return navigation.navigate('DetailScreen', {
      id,
      image,
      title,
      name,
      date,
      description,
    });
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={mainContainer}>
        <View style={list}>
          <Image style={imageStyle} source={image} />
        </View>
        <View style={textView}>
          <Text style={titleStyle}>{title}</Text>
          <View style={nameStyle}>
            <Text style={text}>{name}</Text>
            <Text style={text}>{date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  list: {
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.red,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    width: '45%',
  },
  imageStyle: {
    height: '100%',
    borderRadius: 10,
    width: '100%',
  },
  textView: {
    marginTop: 10,
    width: '57%',
  },
  titleStyle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nameStyle: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 20,
    margin: 3,
  },
});

export default ListNews;
