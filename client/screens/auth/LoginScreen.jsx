import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import MainCustomButton from '../../component/MainCustomButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreeen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = navigation;

  const handleSubmit = () => {
    console.log(email, password);
    const userData = {
      email,
      password,
    };
    axios.post('http://192.168.59.64:8000/login', userData).then((res) => {
      console.log(res.data);
      if (res.data.status == 'ok') {
        alert('logged in successful');
        // setEmail('');
        // setPassword('');
        AsyncStorage.setItem('token', res.data.data);
        AsyncStorage.setItem('isLogggedIn', JSON.stringify(true));
        navigation.navigate('dashboard');
      }
    });
  };
  const route = () => {
    navigate('signup');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 500,
            textTransform: 'capitalize',
          }}
        >
          welcome Back joseph!!
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Email Address"
            style={styles.textinput}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password .."
            value={password}
            onChangeText={setPassword}
            style={styles.textinput}
          />

          <Text
            style={{
              textTransform: 'capitalize',
              fontSize: 15,
              fontWeight: 300,
              marginVertical: 15,
            }}
          >
            forgot password ?
          </Text>
        </View>

        <View>
          <MainCustomButton title="Login" onPress={handleSubmit} />

          <Text style={{ fontSize: 15, fontWeight: 300, marginVertical: 20 }}>
            {' '}
            No account yet ?{' '}
            <Text onPress={route} style={{ fontSize: 15, fontWeight: 500 }}>
              SignUp
            </Text>
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default LoginScreeen;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
    backgroundColor: 'white',
  },
  textinput: {
    backgroundColor: 'white',
    marginVertical: 15,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 10,
    height: 70,
    // borderWidth: 1,
    borderColor: 'gray',
    // ...Platform.select({
    //   ios: {
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 4 },
    //     shadowOpacity: 0.2,
    //     shadowRadius: 6,
    //   },
    //   // Elevation property for Android
    //   android: {
    //     elevation: 8,
    //   },
    // }),
  },
});
