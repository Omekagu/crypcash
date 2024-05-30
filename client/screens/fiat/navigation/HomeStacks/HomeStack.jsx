import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../../user/Dashboard';
import LoginScreeen from '../../../auth/LoginScreen';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="login"
        component={LoginScreeen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="dashboard"
        component={Dashboard}
      />
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="scheduledTransfer"
        component={ScheduledTransfer}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="transfer"
        component={Transfer}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
