import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../component/Button';

const ChooseBank = ({ navigation }) => {
  const { navigate } = navigation;

  const fiat = () => {
    navigate('fiat');
  };
  const crypto = () => {
    navigate('crypto');
  };
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <Button title={'fiat'} onPress={fiat} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Button title={'crypto'} onPress={crypto} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </>
  );
};

export default ChooseBank;

const styles = StyleSheet.create({
  button: {
    marginVertical: 150,
    marginHorizontal: 10,
  },
});
