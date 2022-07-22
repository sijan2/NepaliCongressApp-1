import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
} from 'react-native';

import {Surface} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Share from 'react-native-share';

import Colors from '@assets/colors/colors';
import Back from '@assets/icons/Back.svg';
import Save from '@assets/icons/Save.svg';
import ShareLogo from '@assets/icons/Share.svg';

import scaleFontSize, {WIDTH, HEIGHT} from '@utils/Dimensions';

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
  const navigation = useNavigation();

  const initialSaved: any[] | (() => any[]) = [];
  const [saved, setSaved] = useState(initialSaved);

  const myCustomShare = async () => {
    const shareOptions = {
      message: 'Test Url',
      url: 'https://www.google.com',
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  const storeData = async (save: any) => {
    const newSaved = [...saved, save];
    AsyncStorage.setItem('savedNews', JSON.stringify(newSaved))
      .then(() => {
        setSaved(newSaved);
        console.log('Saved News =>', newSaved);
        Alert.alert('Saved Successfully');
      })
      .catch(error => {
        console.log('Error =>', error);
      });
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
                <View style={styles.icon1}>
                  <TouchableOpacity onPress={storeData}>
                    <Save width={22} height={22} fill="none" />
                  </TouchableOpacity>
                </View>
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
                <Text style={styles.textTitle}>{route.params?.title}</Text>
                <View style={styles.rowData}>
                  <Text style={styles.text1}>{route.params?.name}</Text>
                  <Text style={styles.text2}>{route.params?.date}</Text>
                </View>
                <View>
                  <Image style={styles.image} source={route.params?.image} />
                </View>
                <Text style={styles.details}>{route.params?.description}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
    fontSize: scaleFontSize(19),
    lineHeight: 28,
    fontFamily: 'Mont-Regular',
    fontWeight: '600',
    color: Colors.black,
  },
  rowData: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  text1: {
    fontSize: scaleFontSize(12),
    marginRight: 20,
    fontFamily: 'Mont-Regular',
    color: Colors.red,
  },
  text2: {
    fontSize: scaleFontSize(12),
    fontFamily: 'Mont-Regular',
    color: Colors.red,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  details: {
    marginTop: 10,
    fontFamily: 'Mont-Regular',
    color: Colors.offBlack,
    fontSize: scaleFontSize(14),
    lineHeight: 19,
    textAlign: 'justify',
    fontWeight: '500',
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
    fontSize: scaleFontSize(19),
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
});

export default DetailScreen;
