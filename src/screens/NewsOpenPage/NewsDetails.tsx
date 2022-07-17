import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailHeader from '@components/CustomHeader/DetailsHeader';
import Colors from '@assets/colors/colors';
const DetailScreen = ({route}: any) => {
  return (
    <ScrollView style={styles.scroll}>
      <View>
        <DetailHeader />
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.textTitle}>{route.params?.title}</Text>
            <View style={styles.rowData}>
              <Text style={styles.text1}>{route.params?.name}</Text>
              <Text style={styles.text2}>{route.params?.date}</Text>
            </View>
            <View>
              <Image style={styles.image} source={route.params?.image} />
            </View>
            <Text style={styles.details}>{route.params?.description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  mainContainer: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  container: {
    marginHorizontal: 20,
  },
  textTitle: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Mont-SemiBold',
    color: Colors.black,
  },
  rowData: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  text1: {
    fontSize: 12,
    marginRight: 20,
    fontFamily: 'Mont-Regular',
    color: Colors.red,
  },
  text2: {
    fontSize: 12,
    fontFamily: 'Mont-Regular',
    color: Colors.red,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  details: {
    marginTop: 10,
    fontFamily: 'Mont-Regular',
    color: Colors.gray,
    fontSize: 12,
    lineHeight: 15,
  },
});

export default DetailScreen;
