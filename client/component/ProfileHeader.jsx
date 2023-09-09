import React from 'react';
import { Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileHeader = ({ profileName, image }) => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 10,
      }}
    >
      <Image
        style={{ width: 150, height: 150, borderRadius: 100, marginBottom: 5 }}
        source={require('../assets/profile.jpg')}
      />
      <Text
        style={{ fontSize: 20, fontWeight: 500, textTransform: 'uppercase' }}
      >
        {profileName}
      </Text>
    </SafeAreaView>
  );
};

export default ProfileHeader;
