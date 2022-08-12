import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

import ListNews from '@components/ListNews/ListNews';

import Colors from '@constants/colors/colors';
import Metrics from '@constants/metrics/Metrics';
import Fonts from '@constants/fonts/fonts';

/**
 * @author Nitesh Raj Khanal
 * @function @LatestNews
 **/

/* A functional component that is returning a view with a carousel and a flatlist. */
const SavedNews = (data: any) => {
  const test = data;
  return (
    <>
      <View style={styles.semiContainer}>
        <Text style={styles.text}>Saved News</Text>
      </View>
      <View style={styles.first}>
        <View style={styles.secondFlatlist}>
          <FlatList
            data={test.data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <ListNews
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  name={item.name}
                  date={item.date}
                  description={item.description}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  first: {
    backgroundColor: Colors.offWhite,
    marginTop: 5,
    width: '100%',
  },
  secondFlatlist: {},
  semiContainer: {
    marginHorizontal: 20,
  },
  text: {
    marginTop: 10,
    fontSize: Metrics.h3,
    fontFamily: Fonts.type.montBold,
    color: Colors.black,
  },
});

export default SavedNews;
