import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, SIZES, FONTS, icons, images } from '../constants';
import UserHeader from '../components/UserHeader/UserHeader';
import Banner from '../components/Banner/Banner';
import UseCard from '../components/UseCard/UseCard';
import { LinearGradient } from 'expo-linear-gradient';

export default function User() {
  const myIcon1 = <Icon name="shopping-cart" size={30} color="black" />;
  const myIcon2 = (
    <Icon name="american-sign-language-interpreting" size={30} color="black" />
  );
  const myIcon3 = <Icon name="cogs" size={30} color="black" />;
  const myIcon4 = <Icon name="user-circle" size={30} color="black" />;
  const myIcon5 = <Icon name="life-ring" size={30} color="black" />;

  return (
    <LinearGradient
        colors={[COLORS.emerald, COLORS.purple]}
        style={{flex: 1}}>
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}>
      
      <UserHeader />
      <Banner />
      <View>
        <View style={{ padding: SIZES.padding * 2 }}>
          <UseCard text="Orders & Bookings" icon={myIcon1} />
        </View>
        <View style={{ padding: SIZES.padding * 2 }}>
          <UseCard text="Cashback & Offers" icon={myIcon2} />
        </View>
        <View style={{ padding: SIZES.padding * 2 }}>
          <UseCard text="Settings" icon={myIcon3} />
        </View>
        <View style={{ padding: SIZES.padding * 2 }}>
          <UseCard text="Your Account" icon={myIcon4} />
        </View>
        <View style={{ padding: SIZES.padding * 2 }}>
          <UseCard text="24*7 Help & Support" icon={myIcon5} />
        </View>
      </View>
    </SafeAreaView>
      </LinearGradient>
  );
}
