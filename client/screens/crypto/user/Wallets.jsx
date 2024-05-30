import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BalanceComp from '../../../component/BalanceComp';

const Wallets = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>
      <View>
        <BalanceComp
          currency={'btc'}
          balance={'1000,000,000'}
          time={'10 secs ago'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Wallets;
