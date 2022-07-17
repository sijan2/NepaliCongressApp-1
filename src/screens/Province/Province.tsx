/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {province} from '@models/provience';
import Button from '@components/Button/Button';
import {FlatList} from 'react-native-gesture-handler';
import Carouselitem from '@components/Carousel/Carousel';
import {carouseldata} from '@models/caroseldata';
import LatestNews from '@components/LatestNews/LatestNews';

const ProvinceScreen = () => {
  const data = province;
  const ref = useRef<FlatList>(null);
  const [index] = useState(0);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <FlatList
          ref={ref}
          initialScrollIndex={index}
          data={data}
          contentContainerStyle={{
            paddingHorizontal: 0,
          }}
          keyExtractor={(item, indexes) => 'key' + indexes}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            return <Button text={item.name} onPress={() => <LatestNews />} />;
          }}
        />
        <Carouselitem data={carouseldata} />
        <LatestNews />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginRight: 10,
  },
});

export default ProvinceScreen;