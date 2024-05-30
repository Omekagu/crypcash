import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default class SearchBox extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 5,
            // padding: 10,
            borderRadius: 50,
            textTransform: 'capitalize',
            backgroundColor: '#fff',
            height: 50,
            paddingLeft: 50,
            ...Platform.select({
              ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 6,
              },
              // Elevation property for Android
              android: {
                elevation: 8,
              },
            }),
          }}
        />
        <EvilIcons
          style={{
            position: 'absolute',
            padding: 19,
          }}
          name="search"
          size={30}
          color="black"
        />
      </View>
    );
  }
}
