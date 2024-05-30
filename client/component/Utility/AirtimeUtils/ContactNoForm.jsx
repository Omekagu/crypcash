import React from 'react';
import { Text, TextInput, View } from 'react-native';

const ContactNoForm = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}
      >
        <Text style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
          phone Number
        </Text>
        <Text
          style={{
            color: '#38e8cb',
            marginLeft: 'auto',
            textTransform: 'capitalize',
            fontWeight: 'bold',
          }}
        >
          choose Contact
        </Text>
      </View>
      <TextInput
        style={{
          flexDirection: 'row',
          backgroundColor: '#dee3de',
          margin: 10,
          padding: 10,
          alignItems: 'center',
          height: 50,
          borderRadius: 10,
        }}
        placeholder="0812 019 0530"
      />
    </View>
  );
};

export default ContactNoForm;
