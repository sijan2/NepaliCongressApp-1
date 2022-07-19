/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useRef, useState} from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import {View} from 'react-native';
import TrendingNews from '@components/TrendingNews/TrendingNews';
import {trending} from '@models/trendingbutton';
import Button from '@components/Button/TrendingButton';

import {AuthContext} from '@components/AuthContext/AuthContext';
const TrendingScreen = () => {
  const {setTrending} = useContext(AuthContext);
  const data = trending;
  const ref = useRef<FlatList>(null);
  const [index] = useState(0);
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.mainContainer}>
        <FlatList
          ref={ref}
          data={data}
          initialScrollIndex={index}
          contentContainerStyle={{
            paddingHorizontal: 0,
          }}
          keyExtractor={(item, indexes) => 'key' + indexes}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            return <Button text={item.name} onPress={setTrending} />;
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
