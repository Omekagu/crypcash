import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

function AccountNoForm() {
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#dee3de',
        margin: 10,
        padding: 10,
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
      }}
    >
      <View style={{ position: 'relative' }}>
        <TextInput
          placeholder="2006448312"
          style={{
            width: 300,
            height: 40,
            // backgroundColor: 'black',
          }}
        />
      </View>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{ marginLeft: 'auto', paddingRight: 10, fontWeight: 'bold' }}
        >
          Paste
        </Text>
        <FontAwesome5 name="paste" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default AccountNoForm;
