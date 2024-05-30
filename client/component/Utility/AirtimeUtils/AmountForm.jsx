import React from 'react';
import { Text, TextInput, View } from 'react-native';

const AmountForm = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}
      >
        <Text style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
          Amount
        </Text>
        <Text
          style={{
            marginLeft: 'auto',
            textTransform: 'capitalize',
            fontWeight: 'bold',
          }}
        >
          ₦10,000,000,000.09
        </Text>
      </View>
      <TextInput
        style={{
          flexDirection: 'row',
          backgroundColor: '#dee3de',
          margin: 10,
          padding: 10,
          alignItems: 'center',
          height: 50,
          borderRadius: 10,
        }}
        placeholder="₦0.00"
      />
    </View>
  );
};

export default AmountForm;
