import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

function CustomInputIcon({ placeholder, icon }) {
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#dee3de',
        margin: 5,
        padding: 10,
        alignItems: 'center',
        height: 70,
        borderRadius: 10,
      }}
    >
      <View style={{ position: 'relative' }}>
        <TextInput
          placeholder={placeholder}
          style={{
            width: 300,
            height: 40,
          }}
        />
      </View>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center' }}
        // disabled
      >
        <Text
          style={{ marginLeft: 'auto', paddingRight: 10, fontWeight: 'bold' }}
        >
          <MaterialIcons name={icon} size={30} color="#5ecfe6" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomInputIcon;
