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
          marginHorizontal: 10,
          padding: 10,
          borderRadius: 10,
          textTransform: 'capitalize',
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
      >
        <Text
          style={{
            marginRight: 10,
            padding: 2,
            elevation: 2,
            padding: 5,
            alignSelf: 'center',
          }}
        >
          {image}
        </Text>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              {
                fontSize: 13,
                fontWeight: 'bold',
                marginVertical: 5,
                textTransform: 'capitalize',
              },
              style,
            ]}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 13,
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
