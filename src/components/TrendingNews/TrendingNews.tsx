/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import Colors from '@constants/colors/colors';
import ListNews from '@components/ListNews/ListNews';

import {btoa} from 'react-native-quick-base64';
import {BASE_URL} from '@constants/NewsConstant/NewsConstants';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {HEIGHT, WIDTH} from '@utils/Dimensions';

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
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const user = 'congress-mobile-apiuser';
  const pass = 'N3p@l!C0ngr355@2022';
  // base-64 encryption
  const auth = btoa(`${user}:${pass}`);

  const getNews = async () => {
    try {
      const response = await fetch(
        'https://congress-api.server247.info/api/news/featured',
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        },
      );
      const responseJson = await response.json();
      setNews(responseJson.data);
      setLoading(false);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  React.useLayoutEffect(() => {
    getNews();
  }, []);

  const load = () => {
    setLoading(true);
  };

  const ItemView = ({item}: any) => {
    return (
      <ListNews
        id={item.id}
        image={BASE_URL + item.image}
        title={item.title}
        name={item.source_title}
        date={item.published_date}
        description={item.description}
        sourceLink={item.source_link}
      />
    );
  };

  return (
    <>
      {isLoading ? (
        <SkeletonPlaceholder>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              padding: 8,
              paddingTop: 0,
            }}>
            <View style={{marginTop: 0}}>
              <View style={styles.lists} />
              <View style={styles.lists} />
              <View style={styles.lists} />
              <View style={styles.lists} />
              <View style={styles.lists} />
              <View style={styles.lists} />
              <View style={styles.lists} />
            </View>
          </View>
        </SkeletonPlaceholder>
      ) : (
        <View style={styles.secondFlatlist}>
          <View style={styles.list}>
            <FlatList
              data={news}
              keyExtractor={(show, index) => 'key' + index}
              renderItem={ItemView}
              onEndReached={load}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  secondFlatlist: {
    backgroundColor: Colors.offWhite,
    minHeight: HEIGHT * 0.75,
    marginBottom: 60,
    width: '100%',
    flex: 1,
  },
  list: {
    flex: 1,
  },
  cardView: {
    width: WIDTH * 0.92,
    height: HEIGHT * 0.28,
    backgroundColor: Colors.red,
    marginHorizontal: WIDTH * 0.04,
    marginVertical: WIDTH * 0.04,
    alignItems: 'center',
    borderRadius: 8,
  },
  lists: {
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.red,
    marginRight: 10,
    width: WIDTH * 0.92,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default TrendingNews;
