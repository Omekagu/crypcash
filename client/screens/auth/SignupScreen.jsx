import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../component/Button';

const SignupScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const route = () => {
    navigate('choosebank');
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
            <TextInput placeholder="Fullname..." style={styles.textinput} />
            <TextInput placeholder="Email Address" style={styles.textinput} />
            <TextInput placeholder="Phone  Number" style={styles.textinput} />
            <TextInput placeholder="Password .." style={styles.textinput} />

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
            <Button onPress={route} title="signup" />
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
    marginVertical: 10,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    shadowColor: 'black',
    backgroundColor: 'white',
    elevation: 10,
  },
});
