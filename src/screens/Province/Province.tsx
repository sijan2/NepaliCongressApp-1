/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useContext} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {province} from '@models/provience';
import Button from '@components/Button/Button';
import {FlatList} from 'react-native-gesture-handler';
import LatestNews from '@components/LatestNews/LatestNews';

import {AuthContext} from '@components/AuthContext/AuthContext';

/**
 * @author Nitesh Raj Khanal
 * @function @Province
 **/

/**
 * ProvinceScreen is a function that returns a FlatList of buttons that when pressed, sets the province
 * in the AuthContext
 * @returns A function that returns a component
 */
const ProvinceScreen = () => {
  const {setMyProvince} = useContext(AuthContext);
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
            return <Button text={item.name} onPress={setMyProvince} />;
          }}
          style={styles.container}
        />
        <LatestNews />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  container: {},
});

export default ProvinceScreen;
