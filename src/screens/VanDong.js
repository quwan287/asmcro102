import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Accelerometer } from 'react-native-sensors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const VanDong = () => {
  const navigation = useNavigation();
  const [isTracking, setIsTracking] = useState(false);
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    return () => {
      if (subscription && typeof subscription.unsubscribe === 'function') {
        subscription.unsubscribe();
      }
    };
  }, [subscription]);

  const startTracking = () => {
    const sub = new Accelerometer({
      updateInterval: 1000, // cập nhật mỗi giây
    }).subscribe(({ x, y, z }) => {
      // ước tính số bước chân dựa trên thay đổi gia tốc
      const step = Math.sqrt(x * x + y * y + z * z);
      if (step > 1.5) { // ngưỡng để xác định bước chân
        setCurrentStepCount(prevCount => prevCount + 1);
      }
    });

    setSubscription(sub);
    setIsTracking(true);
  };

  const stopTracking = () => {
    if (subscription && typeof subscription.unsubscribe === 'function') {
      subscription.unsubscribe();
    }
    setSubscription(null);
    setIsTracking(false);
  };

  const handleToggle = () => {
    if (isTracking) {
      stopTracking();
    } else {
      startTracking();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Quản lý vận động</Text>
      </View>
      <Text>Số bước chân: {currentStepCount}</Text>
      <TouchableOpacity onPress={handleToggle} style={styles.button}>
        <Text style={styles.buttonText}>{isTracking ? 'Dừng' : 'Bắt đầu'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#A0D7FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default VanDong;
