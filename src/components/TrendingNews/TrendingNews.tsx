import React, {FC} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import Colors from '@assets/colors/colors';
import ListNews from '@components/ListNews/ListNews';

import {trendingNews} from '@models/trending';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @TrendingNews
 **/

const TrendingNews: FC<IProps> = () => {
  const {secondFlatlist, list} = styles;
  const data = trendingNews;
  return (
    <View style={secondFlatlist}>
      <View style={list}>
        <FlatList
          data={data}
          keyExtractor={(show, index) => 'key' + index}
          renderItem={(show: any) => {
            return (
              <ListNews
                id={show.item.id}
                image={show.item.image}
                title={show.item.title}
                name={show.item.name}
                date={show.item.date}
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
    marginTop: 20,
    backgroundColor: Colors.washedGray,
  },
  list: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default TrendingNews;
