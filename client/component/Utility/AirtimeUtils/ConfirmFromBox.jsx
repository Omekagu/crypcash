import React from 'react';
import { Text, View } from 'react-native';

const ConfirmFromBox = () => {
  return (
    <View
      style={{
        borderWidth: 0.4,
        padding: 10,
        borderRadius: 10,
        gap: 25,
        marginVertical: 10,
        borderColor: 'blue',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginRight: 'auto' }}>From:</Text>
        <Text style={{ fontWeight: 'bold' }}>2006448310</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginRight: 'auto' }}>Transaction Fee:</Text>
        <Text>#0.00</Text>
      </View>
    </View>
  );
};

export default ConfirmFromBox;
