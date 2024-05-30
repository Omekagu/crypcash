import React from 'react';
import { Text, TextInput, View } from 'react-native';

const CustomForm = ({ Label, subLabel, placeholder }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}
      >
        <Text style={{ textTransform: 'none', fontWeight: 'bold' }}>
          {Label}
        </Text>
        <Text
          style={{
            color: '#38e8cb',
            marginLeft: 'auto',
            textTransform: 'capitalize',
            fontWeight: 'bold',
          }}
        >
          {subLabel}
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
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomForm;
