import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoreComp from '../../../../component/MoreComp';
import Header from '../../../../component/Header';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const GetHelp = () => {
  return (
    <SafeAreaView>
      <Header headerTitle={'get help'} />
      <MoreComp
        title={'call us'}
        text={'contact call center'}
        image={<Feather name="phone-call" size={24} color="#007780" />}
      />
      <MoreComp
        title={'chat with us'}
        text={'send an in app chat'}
        image={
          <MaterialCommunityIcons name="wechat" size={24} color="#4bd6e5" />
        }
      />
      <MoreComp
        style={{ textTransform: 'uppercase' }}
        title={'FAQS'}
        text={'Frequently asked questons'}
        image={
          <MaterialCommunityIcons
            name="account-question"
            size={24}
            color="#e6e153"
          />
        }
      />
    </SafeAreaView>
  );
};

export default GetHelp;
