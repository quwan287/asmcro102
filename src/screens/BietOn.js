import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

const BietOn = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [entries, setEntries] = useState(Array(10).fill(''));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = async () => {
    const userId = auth().currentUser.uid;
    const data = {
      date: date.toISOString(),
      title,
      entries,
    };

    try {
      await firestore().collection('BietOn').doc(userId).collection('entries').add(data);
      alert('Data saved successfully!');
      // Clear the input fields after saving
      setDate(new Date());
      setTitle('');
      setEntries(Array(10).fill(''));
      navigation.navigate('ViewBietOn'); // Điều hướng đến màn hình ViewBietOn
    } catch (error) {
      console.error('Error saving data: ', error);
      alert('Failed to save data. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Lòng Biết Ơn</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date:</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
          <Text>{date.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              setDate(selectedDate || date);
            }}
          />
        )}
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        {entries.map((entry, index) => (
          <TextInput
            key={index}
            placeholder={`Entry ${index + 1}`}
            value={entry}
            onChangeText={(text) => {
              const newEntries = [...entries];
              newEntries[index] = text;
              setEntries(newEntries);
            }}
            style={styles.input}
          />
        ))}
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ViewBietOn')} style={styles.viewButton}>
          <Text style={styles.viewButtonText}>Xem</Text>
        </TouchableOpacity>
      </View>
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
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  datePickerButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  saveButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BietOn;
