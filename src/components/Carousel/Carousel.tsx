/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, FlatList, Animated} from 'react-native';
import Carouselitem from './Items';
import Colors from '@constants/colors/colors';

import {HEIGHT, WIDTH} from '@utils/Dimensions';
import Metrics from '@constants/metrics/Metrics';
import Fonts from '@constants/fonts/fonts';
/**
 * @author Nitesh Raj Khanal
 * @function @Carousel
 **/

/* A functional component that takes data as props and returns a carousel. */
const Carousel = ({data}: any) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, WIDTH);

  if (data && data.length > 0) {
    return (
      <>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            renderItem={({item}) => {
              return <Carouselitem item={item} />;
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />
          <View style={styles.bar}>
            {data.map((_: any, i: any) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={i}
                  style={{
                    opacity,
                    height: HEIGHT * 0.005,
                    width: WIDTH * 0.05,
                    backgroundColor: Colors.gray,
                    margin: 8,
                    borderRadius: 10,
                  }}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.semiContainer}>
          <Text style={styles.text}>Latest News</Text>
        </View>
      </>
    );
  }
  console.log('Please Provide Images');
  return null;
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
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

export default Carousel;
