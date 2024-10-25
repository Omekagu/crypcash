import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Pressable, Text, Platform } from 'react-native';

const CustomButton = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        textTransform: 'uppercase',
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',

        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.12,
            shadowRadius: 6,
          },
          // Elevation property for Android
          android: {
            elevation: 8,
          },
        }),
      }}
    >
      <Text style={{ textTransform: 'capitalize', marginRight: 5 }}>
        {icon}
      </Text>
      <Text
        style={{ textTransform: 'capitalize', fontSize: 13, fontWeight: 800 }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
