import React from 'react';
import { Text, View } from 'react-native';

const ConfirmToBox = () => {
  return (
    <View style={{ alignItems: 'center', gap: 5 }}>
      <Text>To:</Text>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'blue' }}>
        08120190530
      </Text>

      <Text>Amount:</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>₦3,000.00</Text>
    </View>
  );
};

export default ConfirmToBox;
