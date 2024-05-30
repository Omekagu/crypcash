import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const P2pSubHeader = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#fff',
            width: 100,
            justifyContent: 'space-between',
            borderRadius: 32,
            padding: 10,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: 'gray',
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              backgroundColor: 'gray',
              padding: 10,
              borderRadius: 10,
            }}
          >
            Buy
          </Text>
          <Text style={{ fontWeight: 'bold' }}>sell</Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 32,
              padding: 10,
            }}
          >
            <Text style={{}}>NGN</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      {/* <View>
        <Text style={{ borderWidth: 0.5, borderRadius: 50 }}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
          USDT
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </Text>
      </View> */}
    </View>
  );
};

export default P2pSubHeader;
