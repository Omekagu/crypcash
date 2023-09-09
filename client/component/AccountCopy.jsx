import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const AccountCopy = ({ style, title, onpress, text, input }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        textTransform: 'capitalize',
        backgroundColor: '#dcdbda',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 10,
            fontWeight: 500,
            color: '#808080',
            textTransform: 'capitalize',
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 900,
            color: '#399dbd',
            textTransform: 'capitalize',
          }}
        >
          {text}
        </Text>
      </View>
      <Text
        style={{
          color: '#008000',
          fontSize: 17,
          fontWeight: 500,
          marginRight: 5,
        }}
      >
        copy
      </Text>
      <Text onPress={onpress}>
        <Ionicons name="copy" size={24} color="#008000" />
      </Text>
    </View>
  );
};

export default AccountCopy;
