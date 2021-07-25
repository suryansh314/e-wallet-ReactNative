import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../../constants/index';

export default function UserHeader() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: SIZES.padding * 2,
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={{ ...FONTS.h1 }}>Hello!</Text>
        <Text style={{ ...FONTS.body2, color: 'COLORS.gray' }}>UserName</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}>
          <Image
            source={icons.bell}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.secondary,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: -5,
              right: -5,
              height: 10,
              width: 10,
              backgroundColor: COLORS.red,
              borderRadius: 5,
            }}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
