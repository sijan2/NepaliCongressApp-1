import React, {FC, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Colors from '@assets/colors/colors';
import Advertisement from '@assets/images/advertisement.png';
import CustomSwitch from '@components/CustomSwitch/CustomSwitch';
import ProvinceScreen from '@screens/Province/Province';
import TrendingNews from '@components/TrendingNews/TrendingNews';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Home
 **/

const Home: FC<IProps> = () => {
  const {mainContainer, container, adImage} = styles;
  const [getTab, setGetTab] = useState(1);

  const onSelectSwitch = (value: any) => {
    setGetTab(value);
  };
  return (
    <View style={mainContainer}>
      <ScrollView style={container}>
        <View>
          <Image style={adImage} source={Advertisement} />
        </View>
        <CustomSwitch
          selectionMode={1}
          option1="Province"
          option2="Trending"
          onSelectSwitch={onSelectSwitch}
        />
        <View>
          {getTab === 1 && <ProvinceScreen />}
          {getTab === 2 && <TrendingNews />}
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

export default Home;
