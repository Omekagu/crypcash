import axios from 'axios';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BalanceComp from '../../../component/BalanceComp';
import CryptoPrice from '../../../component/CryptoPrice';
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import InputComponent from '../../../component/InputComponent';
import CustomButton from '../../../component/CustomButton';

const CryptoDashboard = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: '#fff', height: '100%', paddingHorizontal: 10 }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 10,
          borderBottomWidth: 1,
          borderTopWidth: 1,
          padding: 5,
          borderRadius: 100,
        }}
      >
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <MaterialIcons name="notifications-active" size={35} color="orange" />
          <Text
            style={{
              position: 'absolute',
              zIndex: 100,
              fontSize: 15,
              fontWeight: '900',
              marginLeft: 18,
              backgroundColor: '#fff',
              padding: 1,
              borderRadius: 50,
            }}
          >
            19+
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <BalanceComp
          currency={'btc'}
          balance={'1,000,000,000'}
          time={'10 secs ago'}
          icon={<Octicons name="arrow-switch" size={24} color="black" />}
        />
      </View>
      <Text
        style={{
          textTransform: 'capitalize',
          padding: 5,
          fontWeight: 'bold',
          // color: 'gray',
          fontSize: 15,
        }}
      >
        Quick access
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <CustomButton
          text={'Airtime'}
          icon={<Feather name="phone-call" size={24} color="#0000FF" />}
        />
        <CustomButton
          text={'Bills'}
          icon={
            <FontAwesome5 name="money-bill-alt" size={24} color="#007780" />
          }
        />
        <CustomButton
          text={'Cardless'}
          icon={
            <MaterialCommunityIcons
              name="credit-card-off"
              size={24}
              color="#FFA500"
            />
          }
        />
      </View>
      {/* <View>
        <InputComponent />
      </View> */}
      <View
        style={{
          borderTopWidth: 0.4,
          borderRightWidth: 0.4,
          borderLeftWidth: 0.4,
          borderRadius: 5,
          paddingBottom: 10,
          marginTop: 10,
        }}
      >
        <CryptoPrice
          name={'plutouSDT 🔥'}
          price={'891.01'}
          pChange={'$891.01'}
          percentage={'+100.0%'}
          bgColor={{ backgroundColor: '#0fbf21' }}
        />
        <CryptoPrice
          name={'bnbuSDT 🔥'}
          price={'213.5'}
          pChange={'$213.5'}
          percentage={'-7.23%'}
          bgColor={{ backgroundColor: '#e84d4a' }}
        />
        <CryptoPrice
          name={'aLIBABAuSDT 🔥'}
          price={'1,636.56'}
          pChange={'$1,636.56'}
          percentage={'+9.23%'}
          bgColor={{ backgroundColor: '#0fbf21' }}
        />
        <CryptoPrice
          name={'cyfiuSDT 🔥'}
          price={'1,636.56'}
          pChange={'$1,636.56'}
          percentage={'-5.23%'}
          bgColor={{ backgroundColor: '#e84d4a' }}
        />
        <CryptoPrice
          name={'aLIBABAuSDT 🔥'}
          price={'1,636.56'}
          pChange={'$1,636.56'}
          percentage={'+8.23%'}
          bgColor={{ backgroundColor: '#0fbf21' }}
        />
        <CryptoPrice
          name={'dangoteuSDT'}
          price={'1,636.56'}
          pChange={'$1,636.56'}
          percentage={'+8.23%'}
          bgColor={{ backgroundColor: '#0fbf21' }}
        />
        <CryptoPrice
          name={'GBPJPY'}
          price={'1,636.56'}
          pChange={'$1,636.56'}
          percentage={'+8.23%'}
          bgColor={{ backgroundColor: '#0fbf21' }}
        />

        <View style={{ marginRight: 13 }}>
          <Text
            style={{
              textAlign: 'right',
              color: 'orange',
              fontSize: 13,
              fontWeight: 'bold',
            }}
          >
            View more
            {/* <Entypo
              style={{ textAlign: 'center' }}
              name="chevron-small-right"
              size={24}
              color="black"
            /> */}
          </Text>
        </View>
      </View>

      <View></View>
    </SafeAreaView>
  );
};

export default CryptoDashboard;
