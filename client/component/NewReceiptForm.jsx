import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function NewReceiptForm() {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#dee3de',
        margin: 10,
        padding: 10,
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
      }}
    >
      <Image
        source={{
          uri: 'data:image/png;base64,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',
        }}
        style={{ width: 30, height: 30, borderRadius: 30, marginRight: 10 }}
      />
      <Text style={{ marginRight: 'auto' }}>Pluto Bank</Text>
      <TouchableOpacity>
        <AntDesign name="down" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}
