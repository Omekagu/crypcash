import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const MainCustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
  },
});

export default MainCustomButton;
