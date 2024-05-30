import React from 'react';
import { Text, View } from 'react-native';

const CryptoPrice = ({ name, price, pChange, percentage, bgColor }) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Text
        style={{ fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase' }}
      >
        {name}
      </Text>
      <View
        style={{
          marginLeft: 'auto',
          alignItems: 'center',
          paddingRight: 13,
        }}
      >
        <Text style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 5 }}>
          {price}
        </Text>
        <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{pChange}</Text>
      </View>
      <View
        style={[
          {
            padding: 10,
            borderRadius: 5,
            width: 90,
          },
          bgColor,
        ]}
      >
        <Text style={{ textAlign: 'center' }}>{percentage}</Text>
      </View>
    </View>
  );
};

export default CryptoPrice;
