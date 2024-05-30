import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ConfirmToBox from '../../../component/Utility/AirtimeUtils/ConfirmToBox';
import ConfirmFromBox from '../../../component/Utility/AirtimeUtils/ConfirmFromBox';
import DesConfirmBox from '../../../component/Utility/AirtimeUtils/DesConfirmBox';
import InsertPinComp from '../../../component/Utility/AirtimeUtils/InsertPinComp';

const ConfirmTransaction = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <ConfirmToBox />
      <ConfirmFromBox />
      <DesConfirmBox />
      <InsertPinComp />
    </SafeAreaView>
  );
};

export default ConfirmTransaction;
