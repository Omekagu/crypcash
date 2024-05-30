import React from 'react';
import { SafeAreaView } from 'react-native';
import P2pHeader from '../../../component/P2p/P2pHeader';
import Body from '../../../component/P2p/Body';

const P2pScreen = () => {
  return (
    <SafeAreaView>
      <P2pHeader />
      <Body />
    </SafeAreaView>
  );
};

export default P2pScreen;
