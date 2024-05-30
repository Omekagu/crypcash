import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MoreComp from '../../../../component/MoreComp';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class TransferOpt extends Component {
  render() {
    return (
      <SafeAreaView>
        <MoreComp
          image={<FontAwesome name="bank" size={30} color="black" />}
          title={'To Bank Account'}
          text={'Local transfer to banks in Nigeria'}
        />
        <MoreComp
          image={<FontAwesome name="qrcode" size={30} color="black" />}
          title={'scan QR code'}
          text={'Scan Qr code and pay instantly'}
        />
        <MoreComp
          image={<Fontisto name="persons" size={30} color="black" />}
          title={'Bulk Transfer'}
          text={'Transfer To multiple options'}
        />
        <MoreComp
          image={
            <MaterialCommunityIcons
              name="bank-transfer"
              size={30}
              color="black"
            />
          }
          title={'International transfer'}
          text={'send money to other countries'}
        />
        <MoreComp
          image={<MaterialIcons name="schedule-send" size={30} color="black" />}
          title={'Scheduled transfer'}
          text={'send money at an estimatimated time'}
        />
      </SafeAreaView>
    );
  }
}
