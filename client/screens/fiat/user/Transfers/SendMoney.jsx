import React from 'react';
import TransferBoxFooter from '../../../../component/Transfer/TransferBoxFooter';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import TransferBoxHeader from '../../../../component/Transfer/TransferBoxHeader';
import CreditTransactionBox from '../../../../component/Transfer/CreditTransactionBox';
import DebitTransactionBox from '../../../../component/Transfer/DebitTransactionBox';

function SendMoney() {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <View>
        <TransferBoxHeader />
      </View>

      <ScrollView style={{ alignSelf: 'stretch', margin: 10 }}>
        <Text
          style={{
            alignSelf: 'center',
            marginBottom: 10,
            textTransform: 'capitalize',
          }}
        >
          mon 12/4/2024
        </Text>
        <CreditTransactionBox
          amount={'₦5,000.00'}
          description={'loud'}
          time={'12:00PM'}
        />
        <DebitTransactionBox
          amount={'₦2,000,000.00'}
          description={'bitcoin'}
          time={'10:21am'}
        />
        <CreditTransactionBox
          amount={'₦10,000,000.00'}
          description={'Benz C300'}
          time={'12:00PM'}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginBottom: 10,
            textTransform: 'capitalize',
          }}
        >
          fri 15/4/2024
        </Text>
        <DebitTransactionBox
          amount={'-₦500,000.00'}
          description={'Laptop'}
          time={'10:21am'}
        />
        <CreditTransactionBox
          amount={'₦5,000.00'}
          description={'loud'}
          time={'12:00PM'}
        />
        <DebitTransactionBox
          amount={'-₦1,500,000.00'}
          description={'Land'}
          time={'11:20am'}
        />
      </ScrollView>

      <View>
        <TransferBoxFooter />
      </View>
    </SafeAreaView>
  );
}

export default SendMoney;
