import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const user = auth().currentUser;

  const handleSignOut = async () => {
    try {
      await auth().signOut();
      navigation.replace('SignInScreen');
    } catch (error) {
      console.error(error);
    }
  };

  const handleBoxPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, {user ? user.email : 'Guest'}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
          <Icon name="sign-out" size={20} color="white" />
        </TouchableOpacity>
      </View>
      
      <TextInput
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
      />
      
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('BietOn')}>
          <ImageBackground
            source={require('../../image/slide3.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.boxText}>Lòng biết ơn</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('AnUong')}>
          <ImageBackground
            source={require('../../image/slide4.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.boxText}>QL Ăn uống</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('VanDong')}>
          <ImageBackground
            source={require('../../image/slide5.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.boxText}>QL Vận động</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('Yoga')}>
          <ImageBackground
            source={require('../../image/slide7.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.boxText}>Luyện tập Yoga</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('SleepTime')}>
          <ImageBackground
            source={require('../../image/slide8.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.boxText}>Thời gian ngủ</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => handleBoxPress('TuVan')}>
          <ImageBackground
            source={require('../../image/slide10.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.boxText}>Tư vấn</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0D7FF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  signOutButton: {
    padding: 10,
    backgroundColor: '#4284D1',
    borderRadius: 5,
  },
  searchInput: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop:20
  },
  box: {
    width: '48%',
    height: 100,
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
});

export default HomeScreen;
