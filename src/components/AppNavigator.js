import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import auth from '@react-native-firebase/auth';
import BietOn from '../screens/BietOn';
import AnUong from '../screens/AnUong';
import VanDong from '../screens/VanDong';
import Yoga from '../screens/Yoga';
import SleepTime from '../screens/SleepTime';
import TuVan from '../screens/TuVan';
import ViewBietOn from '../screens/ViewBietOn';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLogin, setIsLogin] = useState(null); // Bắt đầu với trạng thái null

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setIsLogin(!!user); // Cập nhật trạng thái đăng nhập
    });
    return subscriber; // Hủy đăng ký khi component bị hủy
  }, []);

  if (isLogin === null) {
    // Hiển thị SplashScreen khi đang kiểm tra trạng thái đăng nhập
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogin ? (
        <>
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='BietOn' component={BietOn} />
          <Stack.Screen name='ViewBietOn' component={ViewBietOn} />
          <Stack.Screen name='AnUong' component={AnUong} />
          <Stack.Screen name='VanDong' component={VanDong} />
          <Stack.Screen name='Yoga' component={Yoga} />
          <Stack.Screen name='SleepTime' component={SleepTime} />
          <Stack.Screen name='TuVan' component={TuVan} />
        </>
      ) : (
        <>
          <Stack.Screen name='SignInScreen' component={SignInScreen} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
