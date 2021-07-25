import React from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../../constants/index';

export default function UseCard(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        margin: 5,
        width: '100%',
        height: '100%'
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: '#def2f1',
          padding: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>{props.text}</Text>
          <Text>{props.icon}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
