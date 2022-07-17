import React, {FC} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import ListNews from '@components/ListNews/ListNews';
import {latestNews} from '@models/latestNews';

import Colors from '@assets/colors/colors';

interface IProps {}

/**
 * @author
 * @function @LatestNews
 **/

const LatestNews: FC<IProps> = () => {
  const {first, secondFlatlist} = styles;
  const data = latestNews;
  return (
    <View style={first}>
      <View style={secondFlatlist}>
        <FlatList
          data={data}
          keyExtractor={(show, index) => 'key' + index}
          renderItem={(show: any) => {
            return (
              <ListNews
                id={show.item.id}
                image={show.item.image}
                title={show.item.title}
                name={show.item.name}
                date={show.item.date}
                description={show.item.description}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  first: {
    backgroundColor: Colors.gray,
    marginTop: 10,
  },
  secondFlatlist: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: Colors.gray,
  },
});

export default LatestNews;
