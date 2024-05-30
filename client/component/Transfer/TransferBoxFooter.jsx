import React from 'react';
import CustomInputIcon from '../CustomInputIcon';
import { Text, View } from 'react-native';

function TransferBoxFooter() {
  return (
    <View
      style={{
        alignItems: 'center',
        // backgroundColor: '#5ecfe6',
        borderRadius: 20,
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          backgroundColor: '#fff',
          padding: 5,
        }}
      >
        Balance: ₦10,000,000.000
      </Text>
      <CustomInputIcon placeholder={'0.000'} />
      <CustomInputIcon placeholder={'description'} icon={'send'} />
    </View>
  );
}

export default TransferBoxFooter;
