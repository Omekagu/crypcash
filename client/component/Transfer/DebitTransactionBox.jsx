import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function DebitTransactionBox({ amount, description, time }) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row-reverse',
          alignItems: 'center',
          marginBottom: 15,
        }}
      >
        <Ionicons name="checkmark-done-sharp" size={24} color="black" />
        <View style={{ alignItems: 'flex-start' }}>
          <View
            style={{
              backgroundColor: '#e83838',
              padding: 13,
              marginLeft: 10,
              //   flexWrap: 1,
              borderTopEndRadius: 40,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <Text
              style={{
                borderBottomWidth: 5,
                borderBottomColor: 'black',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              {amount}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}
            >
              {description}
            </Text>
          </View>
          <Text style={{ marginLeft: 10 }}>{time}</Text>
        </View>
      </View>
    </View>
  );
}

export default DebitTransactionBox;
