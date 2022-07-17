import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Colors from '@assets/colors/colors';

const LatestNewsItem = ({item}: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageShow}>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
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
    backgroundColor: Colors.red,
    borderRadius: 10,
  },

  image: {},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LatestNewsItem;
