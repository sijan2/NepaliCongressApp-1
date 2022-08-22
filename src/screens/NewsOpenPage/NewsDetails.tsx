import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Linking,
} from 'react-native';

import {Surface} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Share from 'react-native-share';

import Colors from '@constants/colors/colors';
import Back from '@assets/icons/Back.svg';
import Save from '@assets/icons/Save.svg';
import ShareLogo from '@assets/icons/Share.svg';

import {WIDTH, HEIGHT} from '@utils/Dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSaved} from '@components/ContextStore/SavedProvider/SavedProvider';
import colors from '@constants/colors/colors';
import Metrics from '@constants/metrics/Metrics';
import Fonts from '@constants/fonts/fonts';
import RenderHtml from 'react-native-render-html';
import {dateFormatter} from '@utils/DayGen';

/**
 * @author Nitesh Raj Khanal
 * @function @DetailsScreen
 **/

/**
 * The DetailScreen function is a functional component that returns a SafeAreaView
 * @param {any}  -
 * @returns A function component that returns a view with a scrollview
 */
const DetailScreen = ({route}: any) => {
  const parsedTitle = route.params.title;
  const cms_title = {html: parsedTitle};
  const navigation = useNavigation();
  const myCustomShare = async () => {
    const shareOptions = {
      message: `${route.params.title}\n`,
      url: `${route.params.sourceLink}`,
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  const {saved, setSaved} = useSaved();
  const {id, title, description, date, image, name, sourceLink} = route.params;
  const saveNews = () => {
    const save = {id, title, description, date, image, name, sourceLink};
    const updatedNews = [...saved, save];
    setSaved(updatedNews);
    AsyncStorage.setItem('saved', JSON.stringify(updatedNews));
    Alert.alert(
      'Saved Successfully',
      'You can view your saved news in the Saved tab',
    );
  };

  const removeNews = () => {
    const updatedNews = saved.filter((item: any) => item.id !== id);
    setSaved(updatedNews);
    AsyncStorage.setItem('saved', JSON.stringify(updatedNews));
    Alert.alert(
      'Removed Successfully',
      'You can view your saved news in the Saved tab',
    );
  };

  const savedNews = saved.find((item: any) => item.id === id);
  const source = {html: route.params?.description};
  const mixedStyle = {
    ...styles.details,
  };
  const titleStyle = {
    ...styles.textTitle,
  };

  const HtmlContentWidth = WIDTH * 0.9;

  const formattedDate = dateFormatter(route.params.date);
  const newDate = formattedDate.date;
  const newMonth = formattedDate.month;
  const newYear = formattedDate.year;

  const formatted = `${newMonth} ${newDate}, ${newYear}`;

  const redirectToUrl = () => {
    const url = route.params.sourceLink;
    Linking.openURL(url);
  };

  return (
    <>
      <SafeAreaView style={styles.parent}>
        <SafeAreaView>
          <Surface style={styles.header}>
            <View style={styles.view}>
              <View style={styles.Logo}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Back width={22} height={22} fill="none" />
                </TouchableOpacity>
              </View>
              <View style={styles.texts}>
                <Text style={styles.text}>Nepali Congress</Text>
              </View>
              <View style={styles.search}>
                {savedNews ? (
                  <View style={styles.icon1}>
                    <TouchableOpacity onPress={removeNews}>
                      <Save width={22} height={22} fill={colors.red} />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.icon1}>
                    <TouchableOpacity onPress={saveNews}>
                      <Save width={22} height={22} fill="none" />
                    </TouchableOpacity>
                  </View>
                )}

                <View style={styles.icon2}>
                  <TouchableOpacity onPress={myCustomShare}>
                    <ShareLogo width={22} height={22} fill="none" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Surface>
        </SafeAreaView>
        <ScrollView style={styles.scroll}>
          <View>
            <View style={styles.mainContainer}>
              <View style={styles.container}>
                <RenderHtml
                  contentWidth={WIDTH}
                  source={cms_title}
                  baseStyle={titleStyle}
                />
                <View style={styles.rowData}>
                  <Text style={styles.text1}>{route.params?.name}</Text>
                  <Text style={styles.text2}>{formatted}</Text>
                </View>
                <RenderHtml
                  contentWidth={HtmlContentWidth}
                  source={source}
                  baseStyle={mixedStyle}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={redirectToUrl}
            style={styles.redirectButton}>
            <Text style={styles.redirectButtonText}>Read Full news</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  scroll: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  mainContainer: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  container: {
    marginHorizontal: 20,
  },
  textTitle: {
    marginTop: 15,
    fontSize: Metrics.h3,
    lineHeight: 28,
    letterSpacing: 0.4,
    fontFamily: Fonts.type.montRegular,
    fontWeight: '600',
    color: Colors.black,
  },
  rowData: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  text1: {
    fontSize: Metrics.body6,
    marginRight: 20,
    fontFamily: Fonts.type.montRegular,
    color: Colors.red,
  },
  text2: {
    fontSize: Metrics.body6,
    fontFamily: Fonts.type.montRegular,
    color: Colors.red,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  details: {
    marginTop: 10,
    fontFamily: Fonts.type.montRegular,
    color: Colors.offBlack,
    fontSize: Metrics.body4,
    lineHeight: 19,
    letterSpacing: 0.4,
    textAlign: 'justify',
    fontWeight: '600',
  },
  header: {
    height: HEIGHT * 0.075,
    width: WIDTH,
    flexDirection: 'row',
    backgroundColor: Colors.offWhite,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view: {
    width: WIDTH,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Logo: {
    marginLeft: WIDTH * 0.04722,
    alignItems: 'center',
    flexDirection: 'row',
  },
  texts: {
    marginLeft: 0.191 * WIDTH,
  },
  text: {
    fontSize: Metrics.h2_5,
    fontFamily: 'Mont-Bold',
    color: Colors.black,
  },
  search: {
    flexDirection: 'row',
    marginRight: WIDTH * 0.04722,
    marginLeft: WIDTH * 0.09,
  },
  icon1: {
    marginRight: 15,
  },
  icon2: {},
  footer: {
    height: HEIGHT * 0.075,
    width: WIDTH,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redirectButton: {
    backgroundColor: Colors.offWhite,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: HEIGHT * 0.05,
    width: WIDTH * 0.4,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  redirectButtonText: {
    fontSize: Metrics.body3,
    fontFamily: 'Mont-Bold',
    color: Colors.red,
    textAlign: 'center',
  },
});

export default DetailScreen;
