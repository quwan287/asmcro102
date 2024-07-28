import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      auth().onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('HomeScreen');
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 3000); // Show SplashScreen for 3 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../image/logo1.png')} />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A0D7FF',
  },
});

export default SplashScreen;
