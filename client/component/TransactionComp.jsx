import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TransactionComp = ({ image, title, onPress, time, amount }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: 5,
        padding: 15,
        textTransform: 'capitalize',
        backgroundColor: 'fff',
        borderRadius: 3,
        elevation: 3,
        backgroundColor: '#fff',
      }}
      onPress={onPress}
    >
      <Text
        style={{
          marginRight: 10,
          padding: 2,
          elevation: 1,
          borderColor: 'black',
          padding: 5,
        }}
      >
        {image}
      </Text>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: '#555555',
            textTransform: 'capitalize',
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            marginTop: 5,
            fontWeight: 300,
            color: '#808080',
            textTransform: 'capitalize',
          }}
        >
          {time}
        </Text>
      </View>
      <Text
        style={{
          fontWeight: 600,
        }}
      >
        ₦{amount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TransactionComp;
