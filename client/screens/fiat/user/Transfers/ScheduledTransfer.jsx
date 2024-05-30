import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../../component/Button';
import { axios } from 'axios';

const ScheduledTransfer = () => {
  const [bank, setBank] = useState();
  const [accountNumber, setAccountNumber] = useState();

  const submitForm = async () => {
    const { data } = await axios.post('/getaccountname', {
      bank,
      accountNumber,
    });
  };
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View style={{ marginBottom: '130%' }}>
        <Text>Bank</Text>
        <TextInput
          style={{
            color: '#fff',
            backgroundColor: '#b7b2b6',
            padding: 15,
            borderRadius: 10,
          }}
          value={bank}
          onChange={(text) => setBank(text)}
        />
        <Text>Account number</Text>
        <TextInput
          style={{
            color: '#fff',
            backgroundColor: '#b7b2b6',
            padding: 15,
            borderRadius: 10,
          }}
          value={accountNumber}
          onChange={(text) => setAccountNumber(text)}
        />
        <Text>{'valid .omekagu chukwuebuka'}</Text>
      </View>

      <Button title={'Next'} onPress={submitForm} />
    </SafeAreaView>
  );
};

export default ScheduledTransfer;
