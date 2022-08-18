import React, {useState} from 'react';
import {StyleSheet, View, Image, SafeAreaView, FlatList} from 'react-native';
import Colors from '@constants/colors/colors';
import advertisement from '@assets/images/advertisement.png';
import CustomSwitch from '@components/CustomSwitch/CustomSwitch';
import ProvinceScreen from '@screens/Province/Province';
import TrendingScreen from '@screens/Trending/Trending';

/**
 * @author Nitesh Raj Khanal
 * @function @HomeScreen
 **/
/* A function that returns a view. */
const HomeScreen = () => {
  const [getTab, setGetTab] = useState(1);

  const onSelectSwitch = (value: any) => {
    setGetTab(value);
  };

  const emptyData: any = [];
  const renderNullItems: any = () => null;

  const ListComponent = (
    <>
      <View>
        <Image style={styles.adImage} source={advertisement} />
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
    </>
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={emptyData}
        showsVerticalScrollIndicator={false}
        renderItem={renderNullItems}
        ListFooterComponent={ListComponent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  container: {},
  adImage: {
    height: 50,
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
