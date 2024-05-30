import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

const P2pHeader = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://media.istockphoto.com/id/1330479341/photo/p2p-and-fintech-technology-innovation-of-financial-investment-concept-for-peer-to-peer-online.jpg?b=1&s=612x612&w=0&k=20&c=rHD0RI0dPeZLBUV9NfjIlxqgNOvl_J9q-94F3o22xv4=',
      }}
      style={{ width: '100%', height: 200 }}
    >
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            // padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="#fff" />
          <View
            style={{
              //   color: '#fff',

              fontWeight: 'bold',
              marginRight: 10,
              marginLeft: 'auto',
              backgroundColor: '#fff',
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 20, padding: 10 }}>P2P</Text>
          </View>

          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              //   fontWeight: 'bold',
              marginRight: 10,
            }}
          >
            Express
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              marginRight: 10,
            }}
          >
            Block Trade
          </Text>
        </View>

        <View style={{ marginTop: 50, marginLeft: 50 }}>
          <Text style={{ color: '#fff' }}>
            How to protect myself from scammers, How to protect myself from
            scammers, How to protect myself from scammers, How to protect myself
            from scammers.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default P2pHeader;
