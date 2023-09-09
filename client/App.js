// import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Loading from './screens/welcome/Loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/auth/LoginScreen';
import SignupScreen from './screens/auth/SignupScreen';
import ChooseBank from './screens/welcome/ChooseBank';
import HomeScreen from './screens/fiat/navigation/HomeScreen';
import HomescreenTab from './screens/crypto/Navigaton/HomescreenTab';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay time as needed
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Loading">
        {isLoading ? (
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="login"
            component={LoginScreen}
          />
        )}

        <Stack.Screen
          options={{ headerShown: false }}
          name="signup"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="choosebank"
          component={ChooseBank}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="fiat"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="crypto"
          component={HomescreenTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
