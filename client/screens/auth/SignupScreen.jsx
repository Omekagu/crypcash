import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
// import CustomButton from '../../component/CustomButton';
import MainCustomButton from '../../component/MainCustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const { navigate } = navigation;

  const handleSubmit = () => {
    const userData = {
      name,
      email,
      password,
      phone,
    };
    console.log(userData);

    axios
      .post('http://192.168.162.64:8000/register', userData)
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
    <SafeAreaView>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, fontWeight: 500,textAlign:'center'  }}>
            Create account{' '}
            {/* <Text style={{ fontWeight: 'bold',fontSize: 15 }}>PLUTO-BANK </Text> */}
          </Text>

          <View style={styles.inputContainer}>
  <KeyboardAwareScrollView>
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
            <TextInput
              placeholder="Password .."
              style={styles.textinput}
              value={password}
              onChangeText={setPassword}
              />
            <TextInput
              placeholder="Password .."
              style={styles.textinput}
              value={password}
              onChangeText={setPassword}
              />
              </KeyboardAwareScrollView> 

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

          <View style={{marginBottom: 0}}>
            <MainCustomButton title="signup" onPress={handleSubmit} />
          </View>
        </View>
      </SafeAreaView>
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
