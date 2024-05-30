import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../component/Header';
import MoreComp from '../../../component/MoreComp';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Cards = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>
      <Header headerTitle={'Cards'} />
      <View>
        <View>
          <MoreComp
            image={
              <MaterialCommunityIcons
                name="credit-card"
                size={24}
                color="#FFA500"
              />
            }
            title={'request credt card'}
            text={"we'll send it to you wherever you are."}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cards;
