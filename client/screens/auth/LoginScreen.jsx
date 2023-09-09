import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../component/Button';
const LoginScreeen = ({ navigation }) => {
  const { navigate } = navigation;

  const route = () => {
    navigate('signup');
  };
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 500,
              textTransform: 'uppercase',
            }}
          >
            welcome !!
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Email Address"
              style={styles.textinput}
            />
            <TextInput placeholder="Password .." style={styles.textinput} />

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
            <Button title="Login" />

            <Text style={{ fontSize: 15, fontWeight: 300, marginVertical: 20 }}>
              {' '}
              No account yet ?{' '}
              <Text onPress={route} style={{ fontSize: 15, fontWeight: 500 }}>
                SignUp
              </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
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
