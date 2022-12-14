import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {Surface} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import Share from 'react-native-share';

import Colors from '@constants/colors/colors';
import Back from '@assets/icons/Back.svg';
import Save from '@assets/icons/Save.svg';
import ShareLogo from '@assets/icons/Share.svg';

import {WIDTH, HEIGHT} from '@utils/Dimensions';
import Fonts from '@constants/fonts/fonts';
import Metrics from '@constants/metrics/Metrics';

/**
 * @author Nitesh Raj Khanal
 * @function @DetailsHeader
 **/

/* A functional component that returns a view. */
const DetailsHeader = ({data}: any) => {
  console.log('Data=>', data);
  const navigation = useNavigation();

  const myCustomShare = async () => {
    const shareOptions = {
      message: 'Share via',
      url: 'https://www.google.com',
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  return (
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
              <TouchableOpacity
                onPress={() => Alert.alert('Feature coming soon')}>
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
  );
};

const styles = StyleSheet.create({
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
    fontSize: Metrics.h3,
    fontFamily: Fonts.type.montBold,
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

export default DetailsHeader;
