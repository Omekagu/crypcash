import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MoreComp = ({ image, title, onpress, text, style }) => {
  return (
    <TouchableOpacity onPress={onpress}>
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
        <Text
          style={{
            marginRight: 10,
            padding: 2,
            elevation: 2,
            backgroundColor: '#fff',
            padding: 5,
          }}
        >
          {image}
        </Text>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              {
                fontSize: 15,
                fontWeight: 700,
                color: '#399dbd',
                textTransform: 'capitalize',
              },
              style,
            ]}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: 500,
              color: '#808080',
              textTransform: 'capitalize',
            }}
          >
            {text}
          </Text>
        </View>
        <Text>
          <MaterialIcons name="navigate-next" size={29} color="#808080" />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MoreComp;
