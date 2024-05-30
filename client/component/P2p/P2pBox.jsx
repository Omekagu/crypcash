import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const P2pBox = ({
  time,
  amount,
  transactions,
  completion,
  likes,
  available,
  uPlimit,
  downLimit,
  username,
  image,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
        borderBottomWidth: 0.2,
        paddingBottom: 5,
      }}
    >
      <View style={{ gap: 5 }}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              //   marginRight: 'auto',
            }}
          >
            <View
              style={{
                // fontSize: 7,
                backgroundColor: 'red',
                padding: 5,
                borderRadius: 100,
                marginRight: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  backgroundColor: 'red',
                }}
              >
                {image}
              </Text>
            </View>

            {/* <Text style={{}}>online</Text> */}
            <Text style={{ fontWeight: 'bold' }}>{username}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 10 }}>{transactions}transactions . </Text>
          <Text style={{ fontSize: 10 }}>{completion}% completion . </Text>
          <Text style={{ fontSize: 10 }}>{likes}%</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>N{amount} </Text>
        </View>
        <View style={{ gap: 5 }}>
          <Text style={{ fontSize: 10 }}>Available {available} USDT </Text>
          <Text style={{ fontSize: 10 }}>
            Order limit {uPlimit} - {downLimit} NGN{' '}
          </Text>
          {/* <Text>{payment} </Text> */}
        </View>
      </View>
      <Text style={{ marginBottom: 'auto', marginLeft: 'auto' }}>{time}</Text>
      <TouchableOpacity>
        <View
          style={{
            marginLeft: 'auto',
            backgroundColor: '#1ed424',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 30,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Buy</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default P2pBox;
