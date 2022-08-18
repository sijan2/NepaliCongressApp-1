/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext} from 'react';
import {StyleSheet, FlatList, View, TouchableOpacity, Text} from 'react-native';
import {btoa} from 'react-native-quick-base64';
import ListNews from '@components/ListNews/ListNews';

import Carouselitem from '@components/Carousel/Carousel';
import {AuthContext} from '@components/ContextStore/AuthContext/AuthContext';

import Colors from '@constants/colors/colors';
import {BASE_URL} from '@constants/NewsConstant/NewsConstants';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {HEIGHT, WIDTH} from '@utils/Dimensions';
import Fonts from '@constants/fonts/fonts';

/**
 * @author Nitesh Raj Khanal
 * @function @LatestNews
 **/

/* A functional component that is returning a view with a carousel and a flatlist. */
const LatestNews = React.memo(function LatestNews({}) {
  const [loading, setLoading] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [news, setNews] = React.useState([]);
  const [carouselNews, setCarouselNews] = React.useState([]);
  const [page, setPage] = React.useState(10);
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
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getMoreNews = async () => {
    try {
      const response = await fetch(
        `https://congress-api.server247.info/api/news/all-news/${myProvince}/${page}`,
        {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        },
      );
      const responseJson = await response.json();
      setNews(responseJson.data);
      setPage(page + 5);
      setLoading(false);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getCarouselNews = async () => {
    try {
      const response = await fetch(
        'https://congress-api.server247.info/api/news/breaking',
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

  React.useEffect(() => {
    getMoreNews();
  }, []);

  const loadMore = () => {
    setLoading(true);
  };

  const ItemView = ({item}: any) => {
    return (
      // Flat List Item
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
            style={{flexDirection: 'column', alignItems: 'center', padding: 8}}>
            <View style={styles.cardView} />
            <View style={{marginTop: 20}}>
              <View style={styles.list} />
              <View style={styles.list} />
            </View>
          </View>
        </SkeletonPlaceholder>
      ) : (
        <>
          <Carouselitem data={carouselNews} />
          <View style={styles.first}>
            <View style={styles.secondFlatlist}>
              <FlatList
                data={news}
                keyExtractor={(show, index) => 'key' + index}
                renderItem={ItemView}
                onEndReached={loadMore}
              />
              {loading && (
                <View style={styles.footer}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={getMoreNews}
                    //On Click of button calling getData function to load more data
                    style={styles.loadMoreBtn}>
                    <Text style={styles.btnText}>Load More</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </>
      )}
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
    marginBottom: 60,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  btnText: {
    fontFamily: Fonts.type.montBold,
    color: Colors.red,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 1,
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
  list: {
    height: 90,
    borderRadius: 10,
    backgroundColor: Colors.red,
    marginRight: 10,
    width: WIDTH * 0.92,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default LatestNews;
