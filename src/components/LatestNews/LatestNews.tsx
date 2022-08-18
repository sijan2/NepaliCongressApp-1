/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {btoa} from 'react-native-quick-base64';
import ListNews from '@components/ListNews/ListNews';

import Carouselitem from '@components/Carousel/Carousel';
import {AuthContext} from '@components/ContextStore/AuthContext/AuthContext';

import Colors from '@constants/colors/colors';
import {BASE_URL} from '@constants/NewsConstant/NewsConstants';

/**
 * @author Nitesh Raj Khanal
 * @function @LatestNews
 **/

/* A functional component that is returning a view with a carousel and a flatlist. */
const LatestNews = React.memo(function LatestNews({}) {
  const [news, setNews] = React.useState([]);
  const [carouselNews, setCarouselNews] = React.useState([]);
  const user = 'congress-mobile-apiuser';
  const pass = 'N3p@l!C0ngr355@2022';
  // base-64 encryption
  const auth = btoa(`${user}:${pass}`);
  const {myProvince} = useContext(AuthContext);

  const getNews = async () => {
    try {
      const response = await fetch(
        `https://congress-api.server247.info/api/news/all-news/${myProvince}/10`,
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

  const getCarouselNews = async () => {
    try {
      const response = await fetch(
        'https://congress-api.server247.info/api/news/all-news/1/7',
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        },
      );
      const responseJson = await response.json();
      setCarouselNews(responseJson.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useLayoutEffect(() => {
    getCarouselNews();
    getNews();
  }, [myProvince]);

  return (
    <>
      <Carouselitem data={carouselNews} />
      <View style={styles.first}>
        <View style={styles.secondFlatlist}>
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
    </>
  );
});

const styles = StyleSheet.create({
  first: {
    backgroundColor: Colors.offWhite,
    marginTop: 10,
    width: '100%',
  },
  secondFlatlist: {
    marginBottom: 70,
  },
});

export default LatestNews;
