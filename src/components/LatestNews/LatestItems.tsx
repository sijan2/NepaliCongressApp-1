import React, {FC} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import Colors from '@assets/colors/colors';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @LatestNews
 **/

const LatestNews: FC<IProps> = ({item}: any) => {
  const {mainContainer, imageShow, image, title} = styles;
  return (
    <View style={mainContainer}>
      <View style={imageShow}>
        <Image style={image} source={{uri: item.image}} />
      </View>
      <Text style={title}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 20,
  },
  imageShow: {
    height: '20%',
    width: '45%',
    backgroundColor: Colors.red,
    borderRadius: 10,
  },

  image: {},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LatestNews;
