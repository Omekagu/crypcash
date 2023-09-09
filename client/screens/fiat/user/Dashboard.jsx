import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TransactionComp from '../../../component/TransactionComp';
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import ProfileContent from '../../../component/ProfileContent';
import BalanceComp from '../../../component/BalanceComp';
import CustomButton from '../../../component/CustomButton';

const Dashboard = () => {
  const TRANSACTION = [
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'Send money to pablo',
      amount: '200,000',
      timestamp: '12:11am',
    },
    {
      id: 2,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'Spend and save',
      amount: '10,000',
      timestamp: '10:11am',
    },
    {
      id: 3,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'credit from pablo',
      amount: '1,000',
      timestamp: '12:00am',
    },
    {
      id: 4,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'credit from alat africa',
      amount: '1,000,000',
      timestamp: '10:11am',
    },
    {
      id: 5,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'Send money to pablo',
      amount: '200,000',
      timestamp: '12:11am',
    },
    {
      id: 6,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'Spend and save',
      amount: '10,000',
      timestamp: '10:11am',
    },
    {
      id: 7,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'credit from pablo',
      amount: '1,000',
      timestamp: '12:00am',
    },
    {
      id: 8,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'credit from alat africa',
      amount: '1,000,000',
      timestamp: '10:11am',
    },
    {
      id: 9,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'Send money to pablo',
      amount: '200,000',
      timestamp: '12:11am',
    },
    {
      id: 10,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'Spend and save',
      amount: '10,000',
      timestamp: '10:11am',
    },
    {
      id: 12,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'credit from pablo',
      amount: '1,000',
      timestamp: '12:00am',
    },
    {
      id: 13,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png',
      title: 'credit from alat africa',
      amount: '1,000,000',
      timestamp: '10:11am',
    },
  ];
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 3,
        backgroundColor: '#fff',
      }}
    >
      <View style={{ backgroundColor: '#fff' }}>
        <View
          style={{
            position: 'absolute',
            zIndex: 2,
            width: '100%',
          }}
        >
          <ProfileContent
            image={<FontAwesome name="user-circle" size={40} color="black" />}
            title={'Hi, Joseph'}
            icon={<FontAwesome name="pie-chart" size={24} color="black" />}
          />
          <View style={{ flexDirection: 'row' }}>
            <CustomButton text={'spend'} />
            <CustomButton text={'save'} />
            <CustomButton text={'borrow'} />
          </View>
          <BalanceComp
            currency={' 🇳🇬 Nigerian Naira'}
            balance={'₦10,000,000,000.09'}
            time={'19min  37sec ago'}
            icon={<Feather name="more-horizontal" size={24} color="black" />}
          />

          <View style={{ flexDirection: 'row' }}>
            <CustomButton
              text={'Transfer'}
              icon={<FontAwesome name="send" size={18} color="black" />}
            />
            <CustomButton
              text={'Add Money'}
              icon={
                <Ionicons name="add-circle-sharp" size={18} color="black" />
              }
            />
          </View>

          <Text
            style={{
              textTransform: 'capitalize',
              padding: 5,
              fontWeight: 300,
              color: 'gray',
              fontSize: 15,
            }}
          >
            Quick access
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <CustomButton
              text={'Airtime'}
              icon={<Feather name="phone-call" size={24} color="#0000FF" />}
            />
            <CustomButton
              text={'Bills'}
              icon={
                <FontAwesome5 name="money-bill-alt" size={24} color="#008000" />
              }
            />
            <CustomButton
              text={'Cardless'}
              icon={
                <MaterialCommunityIcons
                  name="credit-card-off"
                  size={24}
                  color="#FFA500"
                />
              }
            />
          </View>
        </View>
        <View style={{ paddingTop: '95%' }}>
          <FlatList
            data={TRANSACTION}
            renderItem={({ item }) => (
              <TransactionComp
                image={
                  <FontAwesome name="address-book-o" size={24} color="green" />
                }
                title={item.title}
                time={item.timestamp}
                amount={item.amount}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
