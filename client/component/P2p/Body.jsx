import React from 'react';
import { ScrollView } from 'react-native';
import P2pSubHeader from './P2pSubHeader';
import P2pBox from './P2pBox';

const Body = () => {
  return (
    <ScrollView
      style={{
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -15,
        backgroundColor: '#fff',
        height: '100%',
        padding: 10,
      }}
    >
      <P2pSubHeader />
      <P2pBox
        username={'YzkXchange'}
        image={'yz'}
        amount={'1,233.0'}
        transactions={'2,034'}
        completion={'20'}
        likes={'98'}
        available={'5,6781'}
        uPlimit={'4,999'}
        downLimit={'7,009'}
        payment={'Bank Transfer'}
      />
      <P2pBox
        username={'lancexchange'}
        image={'lx'}
        amount={'1,253.0'}
        transactions={'1,034'}
        completion={'209'}
        likes={'18'}
        available={'5,81'}
        uPlimit={'1,999'}
        downLimit={'2,009'}
        payment={'Pluto'}
      />
    </ScrollView>
  );
};

export default Body;
