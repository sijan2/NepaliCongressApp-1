/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import Colors from '@constants/colors/colors';
import ListNews from '@components/ListNews/ListNews';

import {btoa} from 'react-native-quick-base64';
import {BASE_URL} from '@constants/NewsConstant/NewsConstants';

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
    } catch (error) {
      console.error(error);
    }
  };

  React.useLayoutEffect(() => {
    getNews();
  }, []);
  return (
    <View style={styles.secondFlatlist}>
      <View style={styles.list}>
        <FlatList
          data={news}
          keyExtractor={(show, index) => 'key' + index}
          renderItem={(show: any) => {
            return (
              <ListNews
                id={show.item.id}
                image={BASE_URL + show.item.image}
                title={show.item.title}
                name={show.item.source_title}
                date={show.item.published_date}
                description={show.item.description}
                sourceLink={show.item.source_link}
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
    // marginTop: 10,
    width: '100%',
  },
  list: {},
});

export default TrendingNews;
