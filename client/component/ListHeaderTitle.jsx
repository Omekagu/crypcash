import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ListHeaderTitle = ({ title, style }) => {
  return <Text style={[styles.text, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontWeight: 800,
    textTransform: 'capitalize',
    marginLeft: 10,
  },
});

export default ListHeaderTitle;
