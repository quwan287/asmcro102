import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Yoga = () => {
  const navigation = useNavigation();

  const handleOpenVideo = (url) => {
    Linking.openURL(url).catch(err => console.error('Error opening URL: ', err));
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#A0D7FF' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Yoga và Thiền</Text>
      </View>
      
      <Text style={styles.sectionTitle}>Video Yoga cho người mới</Text>
      <ScrollView horizontal style={styles.videoScrollView}>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/JUZ_6Yh9eUw?si=IRUMUrpdMHfr3aG8')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Cơ Bản 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/I-rHQbkL33A?si=EVhQOIHTxMoz2zZs')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Cơ Bản 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/JUZ_6Yh9eUw?si=IRUMUrpdMHfr3aG8')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Cơ Bản 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/I-rHQbkL33A?si=EVhQOIHTxMoz2zZs')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Cơ Bản 4</Text>
        </TouchableOpacity><TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/JUZ_6Yh9eUw?si=IRUMUrpdMHfr3aG8')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Cơ Bản 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/I-rHQbkL33A?si=EVhQOIHTxMoz2zZs')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Cơ Bản 6</Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.sectionTitle}>Video Yoga cơ bản</Text>
      <ScrollView horizontal style={styles.videoScrollView}>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao </Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.sectionTitle}>Video Yoga nâng cao</Text>
      <ScrollView horizontal style={styles.videoScrollView}>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao </Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.sectionTitle}>Video Yoga dưỡng sinh</Text>
      <ScrollView horizontal style={styles.videoScrollView}>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao </Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.sectionTitle}>Video các típ tránh trấn thương</Text>
      <ScrollView horizontal style={styles.videoScrollView}>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao </Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.sectionTitle}>Video Yoga hồi phục chấn thương</Text>
      <ScrollView horizontal style={styles.videoScrollView}>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/0JVC8XwG5bA?si=wJu4gNFu7PoyYbYV')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenVideo('https://youtu.be/Bc4pjc7oKBs?si=mBX6GUXPmUICPLq9')} style={styles.videoButton}>
          <Icon name="play-circle" size={30} color="white" />
          <Text style={styles.videoText}>Video Yoga Nâng Cao </Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  videoScrollView: {
    marginBottom: 20,
  },
  videoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  videoText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Yoga;
