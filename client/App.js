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
// import More from './screens/fiat/user/More';
// import ProfileDetails from './screens/fiat/user/MoreScreen/ProfileDetails';
// import CryptoDashboard from './screens/crypto/user/CryptoDashboard';
// import P2pScreen from './screens/crypto/user/P2pScreen';
import Dashboard from './screens/fiat/user/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreeen from './screens/auth/LoginScreen';
import HomeStack from './screens/fiat/navigation/HomeStacks/HomeStack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogggedIn, setIsLogggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    const data = await AsyncStorage.getItem('isLogggedIn');
    console.log(data, 'at app.jsx');
    setIsLogggedIn(data);
  }
  useEffect(() => {
    getData();
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay time as needed
  }, []);

  // const LoginNav = () => {
  //   const Stack = createNativeStackNavigator();
  //   <Stack.Navigator>

  //     <Stack.Screen
  //       options={{ headerShown: false }}
  //       name="dashboard"
  //       component={Dashboard}
  //     />
  //   </Stack.Navigator>;
  // };
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Loading">
        {!isLogggedIn ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="signup"
              component={SignupScreen}
            />
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
          </>
        ) : (
          <>
            {/* <Stack.Screen
              options={{ headerShown: false }}
              name="login"
              component={LoginScreeen}
            /> */}
            <Stack.Screen
              options={{ headerShown: false }}
              name="home"
              component={HomeStack}
            />
            {/* <Stack.Screen
              options={{ headerShown: false }}
              name="choosebank"
              component={ChooseBank}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="fiat"
              component={HomeScreen}
            /> */}
            <Stack.Screen
              options={{ headerShown: false }}
              name="crypto"
              component={HomescreenTab}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
