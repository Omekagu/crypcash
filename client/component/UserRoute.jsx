import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const UserRoute = ({ image, title, onPress }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        elevation: 3,
        shadowColor: 'black',
        padding: 20,
        backgroundColor: 'fff',
        borderRadius: 3,
        textTransform: 'capitalize',
      }}
      onPress={onPress}
    >
      <Text
        style={{
          marginRight: 3,
          padding: 2,
          elevation: 1,
          width: 50,
          height: 50,
        }}
      >
        {image}
      </Text>
      <Text style={{ flex: 1, fontSize: 18, fontWeight: 500 }}>{title}</Text>
      <Text>
        <MaterialIcons name="navigate-next" size={29} color="black" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserRoute;
