import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import TrendingNews from '@components/TrendingNews/TrendingNews';
import {trending} from '@models/trendingbutton';
import Button from '@components/Button/Button';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Trending
 **/

const Trending: FC<IProps> = () => {
  const data = trending;
  return (
    <View style={styles.mainContainer}>
      <FlatList
        style={styles.flat}
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => {
          return <Button text={item.name} />;
        }}
      />
      <TrendingNews />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
  flat: {},
});

export default Trending;
