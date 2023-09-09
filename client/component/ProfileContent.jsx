import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileContent = ({ image, title, icon }) => {
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
        style={{
          marginRight: 5,
          padding: 2,
          padding: 5,
        }}
      >
        {image}
      </Text>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: '#000000',
            textTransform: 'capitalize',
          }}
        >
          {title}
        </Text>
      </View>
      <Text
        style={{
          fontWeight: 600,
        }}
      >
        {icon}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileContent;
