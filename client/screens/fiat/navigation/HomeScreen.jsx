import React, { useEffect } from 'react';
import Pay from '../user/Pay';
import Invest from '../user/Invest';
import Cards from '../user/Cards';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Dashboard from '../user/Dashboard';
import MoreStack from './MoreStack/MoreStack';
import HomeStack from './HomeStacks/HomeStack';

const Tab = createBottomTabNavigator();
const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ tabBarVisible: false });
  }, [navigation]);

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
        component={HomeStack}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          tabBarLabel: 'Pay',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="send-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={Invest}
        options={{
          tabBarLabel: 'Invest',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="building-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarLabel: 'Cards',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="credit-card" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreStack}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="more" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
