import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const AccountCopy = ({ title, onpress, text }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        textTransform: 'capitalize',
        backgroundColor: '#d4d6d5',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: '#808080',
            textTransform: 'capitalize',
            marginBottom: 5,
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            // color: '#007780',
            textTransform: 'capitalize',
          }}
        >
          {text}
        </Text>
      </View>

      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{
            // color: '#007780',
            fontSize: 17,
            fontWeight: 500,
            marginRight: 5,
          }}
        >
          copy
        </Text>
        <Text onPress={onpress}>
          <Ionicons name="copy" size={20} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountCopy;
