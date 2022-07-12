import React, {FC} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import AdBanner from '@assets/images/advertisement.jpeg';
import {WIDTH} from '@utils/Dimensions';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Advertisement
 **/

const Advertisement: FC<IProps> = () => {
  const {container, banner, bannerImage} = styles;
  return (
    <View style={container}>
      <View style={banner}>
        <Image source={AdBanner} style={bannerImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 71.94,
    height: 50,
    alignItems: 'center',
  },
  banner: {
    height: 50,
    width: WIDTH * 0.9095,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});

export default Advertisement;
