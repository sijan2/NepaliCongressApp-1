import React, {useContext} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import ListNews from '@components/ListNews/ListNews';
import {latestNews} from '@models/latestData';

import Carouselitem from '@components/Carousel/Carousel';
import {carouseldata} from '@models/caroseldata';
import {AuthContext} from '@components/AuthContext/AuthContext';

import Colors from '@constants/colors/colors';

/**
 * @author Nitesh Raj Khanal
 * @function @LatestNews
 **/

/* A functional component that is returning a view with a carousel and a flatlist. */
const LatestNews = () => {
  const data = latestNews;
  const {myProvince} = useContext(AuthContext);
  return (
    <>
      <Carouselitem data={carouseldata} />
      <View style={styles.first}>
        <View style={styles.secondFlatlist}>
          <FlatList
            data={data.filter(pro => {
              return pro.state.toLowerCase() === myProvince.toLowerCase();
            })}
            keyExtractor={(show, index) => 'key' + index}
            renderItem={(show: any) => {
              return (
                <ListNews
                  id={show.item.id}
                  image={show.item.image}
                  title={show.item.title}
                  name={show.item.name}
                  date={show.item.date}
                  description={show.item.description}
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
    marginTop: 10,
    width: '100%',
  },
  secondFlatlist: {},
});

export default LatestNews;
