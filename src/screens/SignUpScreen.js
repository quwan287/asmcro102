import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    setErrorText('');
  }, [email, password, confirmPassword]);

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      setErrorText('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setErrorText('Passwords do not match');
      return;
    }

    setErrorText('');

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('SignIn');
    } catch (error) {
      setErrorText(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../image/logo1.png')}
        style={styles.img}
      />
      <Text style={styles.welcomeText}>Welcome to LIFETIME FUEL !!</Text>
      <Text style={styles.loginText}>Login to Continue</Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
      <Button mode="contained" onPress={handleSignUp} style={styles.button}>
        Sign Up
      </Button>
      <Button onPress={() => navigation.navigate('SignInScreen')} style={styles.button1}>
        Sign In
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#A0D7FF',
  },
  input: {
    marginBottom: 16,
    borderRadius: 15,
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#4284D1',
  },
  button1: {
    marginTop: 16,
    backgroundColor: '#4284D1',
    color: 'white',
  },
  img: {
    marginLeft: 90,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 50,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 155,
    marginBottom: 40,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default SignUpScreen;
