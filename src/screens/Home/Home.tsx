import {StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '@assets/colors/colors';
import ad from '@assets/images/advertisement.png';
import CustomSwitch from '@components/CustomSwitch/CustomSwitch';
import ProvinceScreen from '@screens/Province/Province';
import TrendingScreen from '@screens/Trending/Trending';

const HomeScreen = () => {
  const [getTab, setGetTab] = useState(1);

  const onSelectSwitch = (value: any) => {
    setGetTab(value);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View>
          <Image style={styles.adImage} source={ad} />
        </View>
        <CustomSwitch
          selectionMode={1}
          option1="Provinces"
          option2="Trending"
          onSelectSwitch={onSelectSwitch}
        />
        <View>
          {getTab === 1 && <ProvinceScreen />}
          {getTab === 2 && <TrendingScreen />}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  container: {},
  adImage: {
    height: 60,
    width: '90%',
    marginHorizontal: 20,
  },
  line: {
    marginTop: -4,
    padding: 2,
    width: '100%',
    backgroundColor: Colors.washedGray,
    zIndex: -1,
  },
});

export default HomeScreen;
