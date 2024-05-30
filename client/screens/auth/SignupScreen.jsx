import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import CustomButton from '../../component/CustomButton';
import MainCustomButton from '../../component/MainCustomButton';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  // const { navigate } = navigation;

  const handleSubmit = () => {
    const userData = {
      name,
      email,
      password,
      phone,
    };
    console.log(userData);

    axios
      .post('http://192.168.106.64:8000/register', userData)
      .then((res) => {
        setEmail('');
        setName('');
        setPhone('');
        setPassword('');
        if (res.data.status == 'ok') {
          alert('Registration Successful');
          navigation.navigate('login');
        } else {
          alert(JSON.stringify(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: 300 }}>
            Create An Account with{' '}
            <Text style={{ fontWeight: 'bold' }}>PLUTO-BANK </Text>
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Fullname..."
              style={styles.textinput}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              placeholder="Email Address"
              style={styles.textinput}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Phone  Number"
              style={styles.textinput}
              value={phone}
              onChangeText={setPhone}
            />
            <TextInput
              placeholder="Password .."
              style={styles.textinput}
              value={password}
              onChangeText={setPassword}
            />

            <Text
              style={{
                textTransform: 'capitalize',
                fontSize: 15,
                fontWeight: 300,
              }}
            >
              forgot password ?
            </Text>
          </View>

          <View>
            <MainCustomButton title="signup" onPress={handleSubmit} />
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};

export default SignupScreen;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  text: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontFamily: '',
  },
  textinput: {
    backgroundColor: 'white',
    marginVertical: 15,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    shadowColor: 'black',
    // elevation: 10,
    height: 70,
    borderColor: 'gray',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      // Elevation property for Android
      android: {
        elevation: 8,
      },
    }),
  },
});
