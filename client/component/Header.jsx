import React from 'react';
import { Text } from 'react-native';

const Header = ({ headerTitle, style }) => {
  return (
    <Text
      style={[
        {
          textAlign: 'center',
          justifyContent: 'center',
          textTransform: 'capitalize',
          fontSize: 20,
          fontWeight: 800,
        },
        style,
      ]}
    >
      {headerTitle}
    </Text>
  );
};

export default Header;
