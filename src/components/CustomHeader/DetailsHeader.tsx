import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import Colors from '@assets/colors/colors';
import {useNavigation} from '@react-navigation/native';
import Back from '@assets/icons/Back.svg';
import Save from '@assets/icons/Save.svg';
import Share from '@assets/icons/Share.svg';

const DetailsHeader = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Surface style={styles.header}>
        <View style={styles.view}>
          <View style={styles.Logo}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back width={20} height={20} fill="none" />
            </TouchableOpacity>
          </View>
          <View style={styles.texts}>
            <Text style={styles.text}>Nepali Congress</Text>
          </View>
          <View style={styles.search}>
            <View style={styles.icon1}>
              <TouchableOpacity>
                <Save width={20} height={20} fill="none" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Share width={20} height={20} fill="none" />
            </TouchableOpacity>
          </View>
        </View>
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.offWhite,
  },
  view: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Logo: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 80,
  },
  texts: {
    marginRight: 40,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Mont-Bold',
    color: Colors.black,
  },
  date: {
    fontSize: 14,
    color: Colors.gray,
  },
  search: {
    flexDirection: 'row',
    marginRight: 10,
  },
  icon1: {
    marginRight: 20,
  },
});

export default DetailsHeader;
