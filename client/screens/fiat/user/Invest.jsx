import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../component/Header';

const Invest = () => {
  return (
    <SafeAreaView style={{ alignItems: 'center', textAlign: 'center' }}>
      <Header headerTitle={'invest'} />
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 900,
            marginTop: 100,
            marginBottom: 20,
          }}
        >
          Invest with PLUTO
        </Text>
        <Text
          style={{ textAlign: 'center', paddingHorizontal: 10, fontSize: 18 }}
        >
          Choose an option to grow your money. please remember that investments
          flunctuate and PLUTO doesn't give investment advice
        </Text>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Invest;
