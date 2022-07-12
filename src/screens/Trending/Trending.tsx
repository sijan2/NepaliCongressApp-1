import colors from '@assets/colors/colors';
import Header from '@components/NCHeader/Header';
import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Trending
 **/

const Trending: FC<IProps> = () => {
  const {container} = styles;
  return (
    <View>
      <Header fontColor={colors.red} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Trending;
