import {FlatList, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {View} from 'react-native';
import TrendingNews from '@components/TrendingNews/TrendingNews';
import {trending} from '@models/trendingbutton';
import Button from '@components/Button/Button';

const TrendingScreen = () => {
  const data = trending;
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.mainContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            return <Button text={item.name} onPress={() => <TrendingNews />} />;
          }}
          style={styles.container}
        />
        <TrendingNews />
      </ScrollView>
    </View>
  );
};

export default TrendingScreen;

const styles = StyleSheet.create({
  parent: {},
  mainContainer: {},
  container: {
    marginRight: 17,
    marginLeft: 3,
  },
});
