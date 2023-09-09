import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoreComp from '../../../component/MoreComp';
import Beneficiary from '../../../component/Beneficiary';
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import MoreCompExt from '../../../component/MoreCompExt';
import ListHeaderTitle from '../../../component/ListHeaderTitle';

const Pay = () => {
  const [input, setInput] = useState(false);

  const showInputBox = () => {
    setInput(!input);
  };
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'flex-end',
          zIndex: 100,
          backgroundColor: '#fff',
          paddingTop: 30,
          paddingRight: 10,
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 700 }}>Pay</Text>
        <Text style={{ marginLeft: '36%' }}>
          {' '}
          <Ionicons
            onPress={showInputBox}
            name="search-circle-outline"
            size={30}
            color="black"
          />
        </Text>
      </View>
      <ScrollView>
        <View style={{ margin: 5, marginTop: 50 }}>
          <View>
            {input ? (
              <TextInput
                placeholder="Search.."
                style={{
                  height: 60,
                  backgroundColor: '#fff',
                  paddingLeft: 5,
                  borderColor: '#808080',
                  elevation: 2,
                  borderRadius: 20,
                }}
              />
            ) : null}
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginHorizontal: 10,
            }}
          >
            <View style={{ marginRight: 'auto' }}>
              <ListHeaderTitle title={'Beneficiary'} />
            </View>
            <ListHeaderTitle style={{ color: '#008000' }} title={'View all'} />
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: 'row',
                overflow: 'scroll',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                width: '100%',
                paddingBottom: 10,
              }}
            >
              <Beneficiary
                icon={
                  <FontAwesome name="user-circle-o" size={50} color="#808080" />
                }
                name={'ebuka omekagu'}
              />
              {/*  */}
            </View>
          </ScrollView>
          <View style={{ marginBottom: 40 }}>
            <ListHeaderTitle title={'send money'} />

            <MoreComp
              image={<FontAwesome name="bank" size={24} color="black" />}
              title={'send money to @username'}
              text={'send to any PLUTO account'}
            />
            <MoreComp
              image={<FontAwesome name="send" size={24} color="#008000" />}
              title={'send money to bank account'}
              text={'send to a local bank account'}
            />
            <ListHeaderTitle title={'pay bills'} />
            <MoreComp
              image={<Feather name="phone-call" size={24} color="#0000FF" />}
              title={'Buy airtime '}
              text={'recharge any phone easily'}
            />
            <MoreComp
              image={
                <FontAwesome5 name="money-bill-alt" size={24} color="#008000" />
              }
              title={'pay a bill'}
              text={'airtime, data and utilities'}
            />
            <MoreComp
              image={
                <MaterialIcons name="card-giftcard" size={24} color="#0000FF" />
              }
              title={'gift cards'}
              text={'shop around the world online'}
            />
            <MoreComp
              image={
                <MaterialCommunityIcons
                  name="credit-card-off"
                  size={24}
                  color="#FFA500"
                />
              }
              title={'cardless payments'}
              text={'make payments without a card'}
            />

            <MoreCompExt
              icon={<Ionicons name="md-timer" size={24} color="#0000FF" />}
              title={'Scheduled payments'}
              text={'future payments and outstanding'}
              input={'Pending'}
            />
          </View>
          <ListHeaderTitle title={'friends on pluto'} />
          <MoreCompExt
            title={'Sync your Contacts'}
            text={'free payments to contacts'}
            input={'connect'}
            style={{ backgroundColor: 'blue', color: '#fff' }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pay;
