import React from 'react';
import { Text, View, platform } from 'react-native';

function UtilityComp({ icon, name }) {
  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 30,
        margin: 5,
        flex: 1,
        // flexShrink: true,
        // borderWidth: 0,
        borderRadius: 10,
        backgroundColor: '#fff',

        // ...Platform.select({
        //   ios: {
        //     shadowColor: '#000',
        //     shadowOffset: { width: 0, height: 4 },
        //     shadowOpacity: 0.1,
        //     shadowRadius: 6,
        //   },
        //   // Elevation property for Android
        //   android: {
        //     elevation: 8,
        //   },
        // }),
      }}
    >
      <Text>{icon}</Text>

      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          marginTop: 10,
          textTransform: 'none',
        }}
      >
        {name}
      </Text>
    </View>
  );
}

export default UtilityComp;
