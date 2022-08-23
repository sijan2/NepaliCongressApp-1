/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Animated,
  TextInput,
  Easing,
} from 'react-native';

import Logo from '@assets/images/NCLogo.png';
import Colors from '@constants/colors/colors';
import Search from '@assets/icons/Search.svg';
import Back from '@assets/icons/back-arrow.svg';

import {AuthContext} from '@components/ContextStore/AuthContext/AuthContext';

import DateAndDayGenerator from '@utils/DayGen';
import {HEIGHT, WIDTH} from '@utils/Dimensions';
import Metrics from '@constants/metrics/Metrics';
import Fonts from '@constants/fonts/fonts';
import SearchList from '@components/ListNews/SearchList';

/**
 * @author Nitesh Raj Khanal
 * @function @Header
 **/

/* A functional component that returns a view. */

interface Props {
  news?: any;
}

const Header: React.FC<Props> = () => {
  const date = new Date();
  const dateAndDay = DateAndDayGenerator(date);
  const {color} = useContext(AuthContext);
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState('');
  const inputRef = useRef<TextInput>(null);

  // animation initial value
  const inputTranslateX = useRef(new Animated.Value(WIDTH)).current;
  const backButtonOpacity = useRef(new Animated.Value(0)).current;
  const contentTranslateY = useRef(new Animated.Value(HEIGHT)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;

  const handleClear = () => {
    setValue('');
  };

  const handleBlur = () => {
    setFocused(false);
    const inputTranslateXConfig = {
      toValue: WIDTH,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };
    const backButtonOpacityConfig = {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const contentTranslateYConfig = {
      toValue: HEIGHT,
      duration: 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const contentOpacityConfig = {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    Animated.parallel([
      Animated.timing(inputTranslateX, inputTranslateXConfig),
      Animated.timing(backButtonOpacity, backButtonOpacityConfig),
      Animated.timing(contentTranslateY, contentTranslateYConfig),
      Animated.timing(contentOpacity, contentOpacityConfig),
    ]).start();

    inputRef.current?.blur();
  };

  const handleFocus = () => {
    setFocused(true);
    const inputTranslateXConfig = {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };
    const backButtonOpacityConfig = {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const contentTranslateYConfig = {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    const contentOpacityConfig = {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    };

    Animated.parallel([
      Animated.timing(inputTranslateX, inputTranslateXConfig),
      Animated.timing(backButtonOpacity, backButtonOpacityConfig),
      Animated.timing(contentTranslateY, contentTranslateYConfig),
      Animated.timing(contentOpacity, contentOpacityConfig),
    ]).start();
    inputRef.current?.focus();
  };

  return (
    <>
      <SafeAreaView style={styles.header_safe}>
        <View style={styles.header}>
          <View style={styles.view}>
            <View style={styles.Logo}>
              <Image source={Logo} style={styles.image} />
            </View>
            {color ? (
              <View style={styles.texts}>
                <Text style={[styles.text, {color}]}>Nepali Congress</Text>
                <Text style={styles.date}>{`${dateAndDay.day}, ${
                  dateAndDay.month
                } ${dateAndDay.date},${' '}${dateAndDay.year}`}</Text>
              </View>
            ) : (
              <View style={styles.texts}>
                <Text style={styles.text}>Nepali Congress</Text>
                <Text style={styles.date}>{`${dateAndDay.day}, ${
                  dateAndDay.month
                } ${dateAndDay.date},${' '}${dateAndDay.year}`}</Text>
              </View>
            )}
            <TouchableOpacity onPress={handleFocus}>
              <View style={styles.search}>
                <Search width={25} height={25} fill="none" />
              </View>
            </TouchableOpacity>
            <Animated.View
              style={[
                styles.input,
                {transform: [{translateX: inputTranslateX}]},
              ]}>
              <Animated.View style={{opacity: backButtonOpacity}}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.back_icon}
                  onPress={handleBlur}>
                  <Back width={28} height={28} fill="#000" />
                </TouchableOpacity>
              </Animated.View>
              <TextInput
                ref={inputRef}
                placeholder="Enter title, description or date of news"
                placeholderTextColor="#000"
                clearButtonMode="while-editing"
                onFocus={handleFocus}
                value={value}
                onChangeText={text => {
                  setValue(text);
                }}
                style={styles.input_text}
              />
              <TouchableOpacity
                onPress={handleClear}
                style={styles.clearButton}>
                <Text style={styles.clear}>X</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: contentOpacity,
            transform: [{translateY: contentTranslateY}],
          },
        ]}>
        <SafeAreaView style={styles.content_safe}>
          <View style={styles.content_inner}>
            <View style={styles.separator} />
            <SearchList searchPhrase={value} />
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  header_safe: {
    zIndex: 1000,
  },
  header: {
    height: HEIGHT * 0.087,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  view: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  Logo: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    width: WIDTH * 0.15,
    height: HEIGHT * 0.055,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  texts: {
    marginLeft: 4,
    marginRight: WIDTH * 0.155,
  },
  text: {
    fontSize: Metrics.h3,
    color: Colors.black,
    fontFamily: Fonts.type.montBold,
    width: WIDTH * 0.5,
  },
  date: {
    marginTop: 4,
    fontSize: Metrics.body7,
    color: Colors.black,
    fontFamily: 'Mont-Regular',
  },
  search: {
    width: 35,
    height: 35,
    right: 20,
    borderRadius: 80,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: HEIGHT * 0.087,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.white,
    width: WIDTH - 32,
  },
  back_icon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    transform: [{rotate: '180deg'}],
  },
  input_text: {
    flex: 1,
    height: 37,
    backgroundColor: '#e4e6e8',
    borderRadius: 80,
    paddingHorizontal: 16,
    fontSize: 13,
    color: Colors.black,
  },
  input_text1: {
    flex: 1,
    height: 37,
    backgroundColor: '#e4e6e8',
    borderRadius: 80,
    paddingHorizontal: 16,
    fontSize: 13,
  },
  content: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
    left: 0,
    bottom: 0,
    zIndex: 999,
  },
  content_safe: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content_inner: {
    flex: 1,
    paddingTop: HEIGHT * 0.087,
  },
  separator: {
    height: 1,
    marginTop: 5,
    backgroundColor: '#e6e4eb',
  },
  search_results: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16,
  },
  clearButton: {
    width: 30,
    height: 30,
    borderRadius: 80,
    marginLeft: 10,
    backgroundColor: Colors.red,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clear: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: 'bold',
  },
});

export default Header;
