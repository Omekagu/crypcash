import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const InputComponent = ({ label }) => {
  const [input, setInput] = useState('');

  const inputContent = () => {
    setInput(() => e.target.value);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        flexGrow: 1,
        marginRight: 20,
        paddingBottom: 10,
        height: 60,
      }}
    >
      <Ionicons
        style={{
          position: 'absolute',
          zIndex: 100,
          marginVertical: 19,
          marginHorizontal: 19,
        }}
        name="search-sharp"
        size={24}
        color="black"
      />
      <TextInput
        style={{
          backgroundColor: 'orange',
          // borderColor: 'orange',
          margin: 10,
          borderRadius: 20,
          width: '100%',
          height: '100%',
          paddingLeft: 40,
        }}
        value={input}
        onChange={inputContent}
      />
    </View>
  );
};

export default InputComponent;
