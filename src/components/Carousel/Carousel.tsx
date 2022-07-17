/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {StyleSheet, Text, View, FlatList, Animated} from 'react-native';

import {WIDTH} from '@utils/Dimensions';

import Carouselitem from './Items';
import Colors from '@assets/colors/colors';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Carousel
 **/

const Carousel: FC<IProps> = ({data}: any) => {
  const {bar, semiContainer, text} = styles;
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
          <View style={bar}>
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
                    height: 5,
                    width: 30,
                    backgroundColor: Colors.gray,
                    margin: 8,
                    borderRadius: 10,
                  }}
                />
              );
            })}
          </View>
        </View>
        <View style={semiContainer}>
          <Text style={text}>Latest News</Text>
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
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default Carousel;
