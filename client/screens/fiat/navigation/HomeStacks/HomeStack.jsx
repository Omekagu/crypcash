import React from 'react';
import Dashboard from '../../user/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Pay from '../../user/Pay';
import Cards from '../../user/Cards';
import Invest from '../../user/Invest';
import More from '../../user/More';
import UtilityOption from '../../user/PayStack/UtilityOption';

const Tab = createBottomTabNavigator();
const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 30,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ebebeb',
          borderRadius: 29,
          paddingTop: 10,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={'black'} size={'30'} />
          ),
        }}
        name="dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="pay"
        component={UtilityOption}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="cards"
        component={Cards}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="invest"
        component={Invest}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="more"
        component={More}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
