import React from 'react';
import { Image, Text, View } from 'react-native';

const DesConfirmBox = () => {
  return (
    <View
      style={{
        // borderWidth: 0.4,
        padding: 10,
        borderRadius: 10,
        gap: 25,
        marginVertical: 10,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginRight: 'auto' }}>Description:</Text>
        <Text style={{ fontWeight: 'bold' }}>Airtime</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginRight: 'auto' }}>Network:</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{
              uri: 'data:image/png;base64,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',
            }}
            style={{
              width: 25,
              height: 25,
              borderRadius: 100,
              alignSelf: 'center',
              marginRight: 5,
            }}
          />
          <Text>Airtel-NG</Text>
        </View>
      </View>
    </View>
  );
};

export default DesConfirmBox;
