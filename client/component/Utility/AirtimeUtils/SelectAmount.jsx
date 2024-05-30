import React from 'react';
import { Text, View } from 'react-native';

const SelectAmount = ({ amount }) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
        borderWidth: 0.1,
        padding: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,

        elevation: 8,
      }}
    >
      <Text
        style={{
          fontSize: 24,
        }}
      >
        {amount}
      </Text>
    </View>
  );
};

export default SelectAmount;
