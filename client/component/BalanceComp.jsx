import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BalanceComp = ({ currency, balance, time, icon }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
        padding: 5,
        textTransform: 'capitalize',
        backgroundColor: 'fff',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: '#000000',
            textTransform: 'capitalize',
          }}
        >
          {currency}
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 800,
            color: '#000000',
            textTransform: 'capitalize',
          }}
        >
          {balance}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 200,
            color: '#000000',
            textTransform: 'capitalize',
          }}
        >
          last updated: {time}
        </Text>
      </View>
      <Text
        style={{
          fontWeight: 600,
        }}
      >
        {icon}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BalanceComp;
