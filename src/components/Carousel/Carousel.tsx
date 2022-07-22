// /* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, FlatList, Animated} from 'react-native';
import Carouselitem from './Items';
import Colors from '@assets/colors/colors';

import scaleFontSize, {HEIGHT, WIDTH} from '@utils/Dimensions';
/**
 * @author Nitesh Raj Khanal
 * @function @Carousel
 **/
// function infiniteScroll(this: any, dataList: any) {
//   let numberOfData = dataList.length;
//   let scrollValue = 1,
//     scrolled = 0;

//   setInterval(function (this: any) {
//     scrolled++;
//     if (scrolled < numberOfData) {
//       scrollValue = scrollValue + WIDTH;
//     } else {
//       scrollValue = 1;
//       scrolled = 0;
//     }
//     this.flatlist?.scrollToOffset({offset: scrollValue, animated: true});
//   }, 3000);
// }

/* A functional component that takes data as props and returns a carousel. */
const Carousel = ({data}: any) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, WIDTH);

  // const [dataList, setDataList] = React.useState(data);

  // React.useEffect(() => {
  //   setDataList(data);
  //   infiniteScroll(dataList);
  // });

  if (data && data.length > 0) {
    return (
      <>
        <View>
          <FlatList
            data={data}
            // ref={flatlist => {
            //   this.flatlist = flatlist;
            // }}
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
    fontSize: scaleFontSize(18),
    fontFamily: 'Mont-Bold',
    color: Colors.black,
  },
});

export default Carousel;
