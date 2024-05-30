import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import AmountForm from '../../../../component/Utility/AirtimeUtils/AmountForm';
import Beneficiary from '../../../../component/Beneficiary';
import NetworkForm from '../../../../component/Utility/AirtimeUtils/NetworkForm';
import CustomForm from '../../../../component/Utility/CustomForm';

const Eletricity = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        height: '100%',
        paddingHorizontal: 10,
      }}
    >
      <View></View>
      <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 26 }}>
        Most recent
      </Text>
      <View>
        <ScrollView horizontal style={{ height: 100, marginHorizontal: 10 }}>
          <Beneficiary name={'08120190530'} />
          <Beneficiary name={'09019280530'} />
          <Beneficiary name={'08060503724'} />
          <Beneficiary name={'08060503724'} />
          <Beneficiary name={'08060503724'} />
          <Beneficiary name={'08060503724'} />
          <Beneficiary name={'08060503724'} />
          <Beneficiary name={'08060503724'} />
          <Beneficiary name={'08060503724'} />
          <Beneficiary name={'08060503724'} />
          <Beneficiary name={'08060503724'} />
          <Beneficiary name={'08060503724'} />
          <Beneficiary name={'08060503724'} />
        </ScrollView>
      </View>

      <NetworkForm provider={'select provider'} />
      <NetworkForm provider={'Package'} />
      <CustomForm Label={'Meter Number'} placeholder={'Meter Number'} />
      <AmountForm />
    </SafeAreaView>
  );
};

export default Eletricity;
