import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import UtilityComp from '../../../../component/Utility/UtilityComp';
import {
  Feather,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function UtilityOption() {
  return (
    <SafeAreaView
      style={{ backgroundColor: '#fff', height: '100%', padding: 19 }}
    >
      <Text style={{ fontSize: 13, fontWeight: 'bold', marginLeft: 26 }}>
        Essentials
      </Text>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <UtilityComp
          icon={<Feather name="phone-call" size={24} color="#e89938" />}
          name={'Airtime'}
        />
        <UtilityComp
          icon={<FontAwesome name="wifi" size={24} color="#e85238" />}
          name={'Internet'}
        />
        <UtilityComp
          icon={<MaterialIcons name="live-tv" size={24} color="#38e8d6" />}
          name={'Tv'}
        />
        <UtilityComp
          icon={<Foundation name="lightbulb" size={24} color="#38e855" />}
          name={'Electricity'}
        />
      </View>
      <Text style={{ fontSize: 13, fontWeight: 'bold', marginLeft: 26 }}>
        Cardless Payments
      </Text>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <UtilityComp
          icon={<AntDesign name="scan1" size={24} color="black" />}
          name={'PayID'}
        />
        <UtilityComp
          icon={<FontAwesome name="hashtag" size={24} color="black" />}
          name={'USSD'}
        />
        <UtilityComp
          icon={
            <Fontisto name="shopping-pos-machine" size={24} color="black" />
          }
          name={'POS'}
        />
        <UtilityComp
          icon={<FontAwesome name="credit-card-alt" size={24} color="black" />}
          name={'ATM'}
        />
      </View>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <UtilityComp
          icon={<FontAwesome5 name="business-time" size={24} color="black" />}
          name={'Business'}
        />
        <UtilityComp
          icon={
            <MaterialCommunityIcons
              name="wallet-giftcard"
              size={24}
              color="black"
            />
          }
          name={'Redeem Giftcards'}
        />
        <UtilityComp
          icon={
            <MaterialCommunityIcons
              name="credit-card-sync-outline"
              size={24}
              color="black"
            />
          }
          name={'Redeem Airtime'}
        />
      </View>
      <Text style={{ fontSize: 13, fontWeight: 'bold', marginLeft: 26 }}>
        Lifestyle
      </Text>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <UtilityComp
          icon={
            <MaterialCommunityIcons name="cards-club" size={24} color="black" />
          }
          name={'Betting'}
        />
        <UtilityComp
          icon={
            <MaterialCommunityIcons
              name="wallet-giftcard"
              size={24}
              color="black"
            />
          }
          name={'Gift Cards'}
        />
        <UtilityComp
          icon={
            <MaterialIcons
              name="emoji-transportation"
              size={24}
              color="black"
            />
          }
          name={'Transport'}
        />
        <UtilityComp
          icon={<FontAwesome name="book" size={24} color="black" />}
          name={'Education'}
        />
      </View>
    </SafeAreaView>
  );
}

export default UtilityOption;
