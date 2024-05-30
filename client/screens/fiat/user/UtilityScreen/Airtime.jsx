import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import ContactNoForm from '../../../../component/Utility/AirtimeUtils/ContactNoForm';
import NetworkForm from '../../../../component/Utility/AirtimeUtils/NetworkForm';
import AmountForm from '../../../../component/Utility/AirtimeUtils/AmountForm';
import Beneficiary from '../../../../component/Beneficiary';
import SelectAmount from '../../../../component/Utility/AirtimeUtils/SelectAmount';
import CustomForm from '../../../../component/Utility/CustomForm';

const Airtime = () => {
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
      <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 26 }}>
        Choose an amount
      </Text>
      <View>
        <ScrollView horizontal style={{ marginHorizontal: 10 }}>
          <SelectAmount amount={'200'} />
          <SelectAmount amount={'500'} />
          <SelectAmount amount={'1000'} />
          <SelectAmount amount={'1,500'} />
          <SelectAmount amount={'2,000'} />
        </ScrollView>
      </View>

      <AmountForm />
      <NetworkForm provider={'network'} />
      <CustomForm
        Label={'phone number'}
        subLabel={'choose Number'}
        placeholder={'081 2019 0530'}
      />
    </SafeAreaView>
  );
};

export default Airtime;
