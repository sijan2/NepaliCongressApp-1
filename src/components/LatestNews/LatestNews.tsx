import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import ListNews from '@components/ListNews/ListNews';
import {latestNews} from '@models/latestData';
import Colors from '@assets/colors/colors';

const LatestNews = () => {
  const data = latestNews;
  return (
    <View style={styles.first}>
      <View style={styles.secondFlatlist}>
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
  first: {
    backgroundColor: Colors.offWhite,
    marginTop: 10,
    paddingRight: 10,
  },
  secondFlatlist: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default LatestNews;
