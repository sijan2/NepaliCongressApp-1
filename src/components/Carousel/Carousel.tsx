/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, FlatList, Animated} from 'react-native';
import React from 'react';
import Carouselitem from './Items';
import Colors from '@assets/colors/colors';
import {WIDTH} from '@utils/Dimensions';

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
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: scrollX}}},
            ])}
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
                    height: 4.43,
                    width: 20,
                    backgroundColor: Colors.gray,
                    margin: 8,
                    borderRadius: 19,
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
    fontSize: 18,
    fontFamily: 'Mont-Bold',
    color: Colors.black,
  },
});

export default Carousel;
