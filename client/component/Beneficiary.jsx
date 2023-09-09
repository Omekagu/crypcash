import React from 'react';
import { Text, View } from 'react-native';

function Beneficiary({ icon, name }) {
  return (
    <View
      style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}
    >
      <Text style={{ borderRadius: 100 }}>{icon}</Text>
      <Text
        style={{
          fontSize: 13,
          fontWeight: 800,
          width: 60,
          textAlign: 'center',
          fontWeight: 700,
          textTransform: 'capitalize',
        }}
      >
        {name}
      </Text>
    </View>
  );
}

export default Beneficiary;
