import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const InsertPinComp = () => {
  return (
    <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: 10 }}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          flexDirection: 'row',
          alignSelf: 'center',
          //   textTransform: 'capitalize',
        }}
      >
        <FontAwesome name="lock" size={24} color="black" /> Tap here to insert
        pin
      </Text>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <MaterialCommunityIcons
          name="checkbox-blank-circle-outline"
          size={24}
          color="black"
        />
        <MaterialCommunityIcons
          name="checkbox-blank-circle-outline"
          size={24}
          color="black"
        />
        <MaterialCommunityIcons
          name="checkbox-blank-circle-outline"
          size={24}
          color="black"
        />
        <MaterialCommunityIcons
          name="checkbox-blank-circle-outline"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

export default InsertPinComp;
