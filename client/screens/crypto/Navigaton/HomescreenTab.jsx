import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CryptoDashboard from '../user/CryptoDashboard';
import Markets from '../user/Markets';
import Trades from '../user/Trades';
import Futures from '../user/Futures';
import Wallets from '../user/Wallets';
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const HomescreenTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#808080',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={CryptoDashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="market"
        component={Markets}
        options={{
          tabBarLabel: 'Markets',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Trades"
        component={Trades}
        options={{
          tabBarLabel: 'trades',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="futures"
        component={Futures}
        options={{
          tabBarLabel: 'futures',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="linechart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="wallets"
        component={Wallets}
        options={{
          tabBarLabel: 'wallets',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="wallet" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomescreenTab;
