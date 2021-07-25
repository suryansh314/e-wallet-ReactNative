import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../../constants/index';

export default function Banner() {
  return (
    <View
      style={{
        height: 120,
        borderRadius: 20,
      }}>
      <Image
        source={images.banner}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 20,
        }}
      />
    </View>
  );
}
