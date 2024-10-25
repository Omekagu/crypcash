import React from 'react';
import { Platform, Image, StyleSheet, Text, View } from 'react-native';

const TransactionComp = ({ image, title, onPress, time, amount }) => {
  return (
    <View
      style={{
        height: 70,
        borderWidth: 0.2,
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: 5,
        padding: 10,
        textTransform: 'capitalize',
        backgroundColor: 'fff',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff',

        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
          },
          // Elevation property for Android
          android: {
            elevation: 8,
          },
        }),
      }}
      onPress={onPress}
    >
      <Image
        style={{
          height: 40,
          width: 40,
          padding: 2,
          borderWidth: 1,
          marginRight: 10,
          borderRadius: 10,
          padding: 5,
        }}
        source={{ uri: { image } }}
      />
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
