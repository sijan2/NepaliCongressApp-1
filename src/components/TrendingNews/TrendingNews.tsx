import React, {useContext} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import Colors from '@constants/colors/colors';
import ListNews from '@components/ListNews/ListNews';
import {trendingNews} from '@models/trendingData';

import {AuthContext} from '@components/ContextStore/AuthContext/AuthContext';

/**
 * @author Nitesh Raj Khanal
 * @function @TrendingNews
 **/

/**
 * It's a function that returns a view that contains a view that contains a flatlist that contains a
 * listnews component
 * @returns A view with a flatlist of trending news.
 */
const TrendingNews = () => {
  const data = trendingNews;
  const {trending} = useContext(AuthContext);
  return (
    <View style={styles.secondFlatlist}>
      <View style={styles.list}>
        <FlatList
          data={data.filter(pro => {
            return pro.for.toLowerCase() === trending.toLowerCase();
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
  );
};

const styles = StyleSheet.create({
  secondFlatlist: {
    backgroundColor: Colors.offWhite,
    marginTop: 10,
    width: '100%',
  },
  list: {},
});

export default TrendingNews;
