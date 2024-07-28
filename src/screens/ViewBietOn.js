import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ViewBietOn = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userId = auth().currentUser.uid;
      try {
        const snapshot = await firestore().collection('BietOn').doc(userId).collection('entries').get();
        if (!snapshot.empty) {
          const entries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setData(entries);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const userId = auth().currentUser.uid;
    try {
      await firestore().collection('BietOn').doc(userId).collection('entries').doc(id).delete();
      setData(prevData => prevData.filter(item => item.id !== id));
      Alert.alert('Success', 'Entry deleted successfully!');
    } catch (error) {
      console.error('Error deleting data: ', error);
      Alert.alert('Error', 'Failed to delete entry. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Dữ liệu Lòng Biết Ơn</Text>
      </View>
      {data.length > 0 ? (
        data.map((item, index) => (
          <View key={item.id} style={styles.entryContainer}>
            <View style={styles.entryHeader}>
              <Text style={styles.dateText}>{new Date(item.date).toLocaleDateString()}</Text>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                <Icon name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
            <Text style={styles.titleText}>{item.title}</Text>
            {item.entries.map((entry, entryIndex) => (
              <Text key={entryIndex} style={styles.entryText}>{entry}</Text>
            ))}
          </View>
        ))
      ) : (
        <Text style={styles.noDataText}>Không có dữ liệu</Text>
      )}
    </ScrollView>
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  entryContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    padding: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  entryText: {
    fontSize: 14,
    marginBottom: 5,
  },
  noDataText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ViewBietOn;
