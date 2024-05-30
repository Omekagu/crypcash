import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoreComp from '../../../component/MoreComp';
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { StatusBar, View } from 'react-native';
import Header from '../../../component/Header';

const More = ({ navigation }) => {
  const { navigate } = navigation;
  const profile = () => {
    navigate('profile');
  };
  const statement = () => {
    navigate('statements');
  };
  const getHelp = () => {
    navigate('getHelp');
  };
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>
      <Header headerTitle={'more'} />
      <View>
        <MoreComp
          onpress={profile}
          image={<Entypo name="user" size={20} color="black" />}
          title={'cYFI Dev'}
          text={'Account details'}
        />
        <MoreComp
          image={<Entypo name="megaphone" size={20} color="black" />}
          title={'Get CYFI'}
        />
        <MoreComp
          onpress={statement}
          image={<FontAwesome name="address-book-o" size={20} color="green" />}
          title={'Statements & reports'}
          text={'Download monthly statements'}
        />
        <MoreComp
          image={<FontAwesome name="credit-card" size={20} color="blue" />}
          title={'Saved Cards'}
          text={'Manage connected cards'}
        />
        <MoreComp
          onpress={getHelp}
          image={<Ionicons name="help-circle" size={20} color="red" />}
          title={'Get Help'}
          text={'Get support or send feedback'}
        />
        <MoreComp
          image={
            <MaterialCommunityIcons
              name="server-security"
              size={20}
              color="black"
            />
          }
          title={'Security'}
          text={'Protect yourself from intruders'}
        />
        <MoreComp
          image={<FontAwesome5 name="tags" size={20} color="green" />}
          title={'Referrals'}
          text={'Earn money when your friends jion Blockbank'}
        />
        <MoreComp
          image={
            <MaterialCommunityIcons
              name="car-speed-limiter"
              size={20}
              color="blue"
            />
          }
          title={'Account Limits '}
          text={'How much you can spend and receive'}
        />
        <MoreComp
          // onpress={Legal}
          image={<FontAwesome name="legal" size={20} color="black" />}
          title={'Legal'}
          text={'About our contract with you'}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default More;
