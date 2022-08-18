import React, {FC} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {WIDTH} from '@utils/Dimensions';

interface list {
  defaultImageSource?: any;
  source?: any;
  style?: any;
}

const ProgressiveImage: FC<list> = React.memo(function ProgressiveImage({
  defaultImageSource,
  source,
  style,
}) {
  const defaultImageAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);

  const handleDefaultImageLoad = () => {
    Animated.timing(defaultImageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        source={defaultImageSource}
        style={[style, {opacity: defaultImageAnimated}]}
        onLoad={handleDefaultImageLoad}
        blurRadius={1}
      />
      <Animated.Image
        source={source}
        style={[style, {opacity: imageAnimated}, styles.imageOverlay]}
        onLoad={handleImageLoad}
      />
    </View>
  );
});

export default ProgressiveImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    height: 100,
    borderRadius: 8,
    width: WIDTH * 0.43,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
