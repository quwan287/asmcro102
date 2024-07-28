import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleSignInEmail = async () => {
    if (!email || !password) {
      setErrorText('Please enter email and password');
      return;
    }

    setErrorText('');
    setLoading(true);

    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorText(error.message);
    } finally {
      setLoading(false);
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
      <Picker
        selectedValue={role}
        onValueChange={(itemValue) => setRole(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="User" value="user" />
        <Picker.Item label="Expert" value="expert" />
        <Picker.Item label="Admin" value="admin" />
      </Picker>
      {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
      <Button mode="contained" onPress={handleSignInEmail} style={styles.button} loading={loading}>
        Sign In
      </Button>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don’t have an account? Click</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
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
  img: {
    marginLeft: 90,
    marginBottom: 20,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  registerText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    margin: 5,
  },
  registerLink: {
    fontSize: 15,
    color: '#4284D1',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 18,
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
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default SignInScreen;
