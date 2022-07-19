import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '@assets/colors/colors';
import {WIDTH} from '@utils/Dimensions';
interface list {
  id?: any;
  image?: any;
  title?: string;
  name?: string;
  date?: string;
  description?: string;
}
const ListNews: FC<list> = ({id, image, title, name, date, description}) => {
  const navigation: any = useNavigation();
  const handleOnPress = () => {
    return navigation.navigate('DetailScreen', {
      id,
      image,
      title,
      name,
      date,
      description,
    });
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.mainContainer}>
        <View style={styles.list}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.name}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListNews;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.red,
    marginRight: 10,
    width: WIDTH * 0.43,
    marginLeft: 10,
  },
  image: {
    height: '100%',
    borderRadius: 10,
    width: '100%',
  },
  textView: {
    width: WIDTH * 0.46,
    marginRight: 10,
    justifyContent: 'center',
  },
  title: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: 'Mont-Bold',
  },
  name: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 10,
    fontFamily: 'Mont-Bold',
    marginTop: 20,
    color: Colors.red,
    marginRight: 15,
  },
});
