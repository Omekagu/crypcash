import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomButton = ({ icon, text }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        margin: 3,
        textTransform: 'uppercase',
        borderRadius: 2,
        elevation: 4,
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ textTransform: 'capitalize', marginRight: 5 }}>
        {icon}
      </Text>
      <Text
        style={{ textTransform: 'capitalize', fontSize: 13, fontWeight: 800 }}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomButton;
