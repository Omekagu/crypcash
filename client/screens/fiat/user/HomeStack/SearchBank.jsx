import React, { Component } from 'react';
import SearchBox from '../../../../component/SearchBox';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Beneficiary from '../../../../component/Beneficiary';
import { Ionicons } from '@expo/vector-icons';
import BankList from '../../../../component/BankList';

export default class SearchBank extends Component {
  render() {
    return (
      <SafeAreaView style={{ marginHorizontal: 10 }}>
        <SearchBox />
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>Recent</Text>
          <ScrollView horizontal="true">
            <View style={{ flexDirection: 'row' }}>
              <Beneficiary
                name={'Arofex technologies'}
                icon={<Ionicons name="person" size={24} color="black" />}
              />
              <Beneficiary
                name={'Janna P'}
                icon={<Ionicons name="person" size={24} color="black" />}
              />
              <Beneficiary
                name={'Williams P.C'}
                icon={<Ionicons name="person" size={24} color="black" />}
              />
              <Beneficiary
                name={'Rolly w'}
                icon={<Ionicons name="person" size={24} color="black" />}
              />
              <Beneficiary
                name={'Gustav O'}
                icon={<Ionicons name="person" size={24} color="black" />}
              />
              <Beneficiary
                name={'Arofex technologies'}
                icon={<Ionicons name="person" size={24} color="black" />}
              />
              <Beneficiary
                name={'Arofex technologies'}
                icon={<Ionicons name="person" size={24} color="black" />}
              />
              <Beneficiary
                name={'Arofex technologies'}
                icon={<Ionicons name="person" size={24} color="black" />}
              />
              <Beneficiary
                name={'Arofex technologies'}
                icon={<Ionicons name="person" size={24} color="black" />}
              />
              <Beneficiary
                name={'Arofex technologies'}
                icon={<Ionicons name="person" size={24} color="black" />}
              />
              <Beneficiary
                name={'Arofex technologies'}
                icon={<Ionicons name="person" size={24} color="black" />}
              />
            </View>
          </ScrollView>
        </View>
        <View style={{ margin: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>Available Bank</Text>

          <ScrollView>
            <BankList name={'Pluto Bank'} />
            <BankList name={'Wema Bank'} />
            <BankList name={'Kuda Bank'} />
            <BankList name={'Stanbic Bank'} />
            <BankList name={'Gelato Bank'} />
            <BankList name={'Kemasu Bank'} />
            <BankList name={'Scala Bank'} />
            <BankList name={'Cyfi Bank'} />
            <BankList name={'Vemo Bank'} />
            <BankList name={'Fargo Bank'} />
            <BankList name={'Santa Bank'} />
            <BankList name={'Dva Bank'} />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
