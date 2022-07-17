import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import Colors from '@assets/colors/colors';
import ListNews from '@components/ListNews/ListNews';
import {trendingNews} from '@models/trendingData';

const TrendingNews = () => {
  const data = trendingNews;
  return (
    <View style={styles.secondFlatlist}>
      <View style={styles.list}>
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
    marginTop: 20,
    backgroundColor: Colors.offWhite,
  },
  list: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default TrendingNews;
