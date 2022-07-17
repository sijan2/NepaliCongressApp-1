import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import Colors from '@assets/colors/colors';
import {useNavigation} from '@react-navigation/native';

interface Clist {
  id?: any;
  image?: any;
  title?: string;
  name?: string;
  date?: string;
  description?: string;
  item?: any;
}

const {width, height} = Dimensions.get('window');
const Carouselitem: FC<Clist> = ({item}) => {
  const navigation: any = useNavigation();
  const handleOnPress = () => {
    return navigation.navigate('DetailScreen', {
      id: item.id,
      image: item.image,
      title: item.title,
      name: item.name,
      date: item.date,
      description: item.description,
    });
  };
  return (
    <>
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.cardView}>
          <View>
            <Image style={styles.image} source={item.image} />
            <View style={styles.textView}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.textshow}>
                <View style={styles.nested}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.date}</Text>
                  <Text style={styles.text}>{item.state}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Carouselitem;

const styles = StyleSheet.create({
  cardView: {
    width: width - 20,
    height: height / 3.5,
    backgroundColor: Colors.red,
    margin: 10,
    borderRadius: 20,
  },
  textView: {
    marginHorizontal: 10,
    position: 'absolute',
    zIndex: 2,
    margin: 10,
    borderRadius: 10,
    marginTop: 120,
    opacity: 0.95,
    backgroundColor: Colors.white,
    width: '95%',
  },
  image: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 45,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Mont-Regular',
  },
  textshow: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  text: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Mont-Regular',
    color: Colors.red,
    margin: 23,
    lineHeight: 13,
    marginBottom: 10,
  },
  nested: {
    flexDirection: 'row',
    marginTop: -10,
    marginLeft: -35,
  },
  view: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
});
