import React from 'react';
import { Text, View } from 'react-native';

const MoreCompExt = ({ style, title, onpress, text, input, icon }) => {
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
      <Text
        onPress={onpress}
        style={{
          marginRight: 10,
          padding: 2,
          padding: 5,
        }}
      >
        {icon}
      </Text>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 900,
            color: '#007780',
            textTransform: 'capitalize',
          }}
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
      <Text
        style={[
          {
            backgroundColor: '#FFFF00',
            padding: 5,
            elevation: 3,
            borderRadius: 10,
          },
          style,
        ]}
      >
        {input}
      </Text>
    </View>
  );
};

export default MoreCompExt;
