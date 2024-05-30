import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const SelectPackage = () => {
  return (
    <View>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <Text style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
          Package
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
          position: 'relative',
        }}
        placeholder="Choose one"
      />
      <TouchableOpacity
        style={{
          //   color: '#38e8cb',
          position: 'absolute',
          zIndex: 1000,
          paddingLeft: 370,
          paddingTop: 40,
        }}
      >
        <AntDesign name="down" size={24} color="#b1bab9" />
      </TouchableOpacity>
    </View>
  );
};

export default SelectPackage;
