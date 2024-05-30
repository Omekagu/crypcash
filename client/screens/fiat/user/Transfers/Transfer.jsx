import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewReceiptForm from '../../../../component/NewReceiptForm';
import { Text } from 'react-native';
import AccountNoForm from '../../../../component/AccountNoForm';

const Transfer = () => {
  return (
    <SafeAreaView>
      <Text style={{ marginHorizontal: 10, fontSize: 15 }}>Bank</Text>
      <NewReceiptForm />
      <Text style={{ marginHorizontal: 10, fontSize: 15 }}>Account number</Text>
      <AccountNoForm />

      <Text
        style={{
          marginHorizontal: 10,
          fontSize: 15,
          color: '#0e9e0e',
          textTransform: 'capitalize',
          fontWeight: 'bold',
        }}
      >
        Omekagu, Chukwuebuka Joseph
      </Text>
    </SafeAreaView>
  );
};

export default Transfer;
