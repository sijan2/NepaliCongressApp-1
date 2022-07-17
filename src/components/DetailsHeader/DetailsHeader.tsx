import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {Surface} from 'react-native-paper';
import Colors from '@assets/colors/colors';
import BackLogo from '@assets/icons/Back.svg';
import Save from '@assets/icons/Save.svg';
import Share from '@assets/icons/Share.svg';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  fontColor: string;
}

/**
 * @author Nitesh Raj Khanal
 * @function @Header
 **/

const DetailsHeader: FC<IProps> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Surface style={styles.header}>
        <View style={styles.view}>
          <View style={styles.Logo}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackLogo width={25} height={25} fill="none" />
            </TouchableOpacity>
          </View>
          <View style={styles.texts}>
            <Text style={styles.text}>Nepali Congress</Text>
          </View>
          <View style={styles.search}>
            <View style={styles.icon1}>
              <TouchableOpacity>
                <Save width={25} height={25} fill="none" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Share width={25} height={25} fill="none" />
            </TouchableOpacity>
          </View>
        </View>
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginLeft: 5,
    marginRight: 5,
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
    fontWeight: 'bold',
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
