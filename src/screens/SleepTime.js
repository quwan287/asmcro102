import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SleepTime = () => {
  const [sleepStart, setSleepStart] = useState('');
  const [wakeUp, setWakeUp] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [result, setResult] = useState(null);
  const navigation = useNavigation();

  const handleDatePick = () => {
    setShowDatePicker(true);
  };

  const parseTime = (timeStr) => {
    if (!timeStr) return null;
    const [hours, minutes] = timeStr.split(':').map(Number);
    if (isNaN(hours) || isNaN(minutes)) return null;

    const now = new Date();
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(0);
    now.setMilliseconds(0);
    return now;
  };

  const handleSave = async () => {
    console.log('Save button pressed');

    const userId = auth().currentUser?.uid;
    if (!userId) {
      console.log('User not authenticated');
      alert('Người dùng chưa đăng nhập.');
      return;
    }

    if (sleepStart && wakeUp) {
      try {
        console.log('Parsing times');
        const sleepStartDate = parseTime(sleepStart);
        const wakeUpDate = parseTime(wakeUp);

        if (!sleepStartDate || !wakeUpDate) {
          console.log('Invalid time format');
          alert('Thời gian nhập không hợp lệ.');
          return;
        }

        if (wakeUpDate < sleepStartDate) {
          console.log('Wake up time is earlier than sleep start time');
          alert('Thời gian dậy không thể trước thời gian bắt đầu ngủ.');
          return;
        }

        const duration = Math.floor((wakeUpDate - sleepStartDate) / (1000 * 60)); // Thời gian ngủ tính bằng phút
        console.log('Duration:', duration);

        const data = {
          sleepStart: format(sleepStartDate, 'yyyy-MM-dd HH:mm:ss'),
          wakeUp: format(wakeUpDate, 'yyyy-MM-dd HH:mm:ss'),
          duration,
          selectedDate: format(selectedDate, 'yyyy-MM-dd'),
        };

        console.log('Saving data to Firestore:', data);

        await firestore()
          .collection('sleepRecords')
          .doc(userId)
          .collection('entries')
          .add(data)
          .then(() => {
            console.log('Data saved successfully to sleepRecords');
            setResult(`Thời gian ngủ: ${duration} phút vào ngày ${format(selectedDate, 'yyyy-MM-dd')}`);
            alert('Dữ liệu đã được lưu thành công!');
            setSleepStart('');
            setWakeUp('');
          })
          .catch((error) => {
            console.error('Error saving data to sleepRecords:', error);
            alert('Lưu dữ liệu vào sleepRecords thất bại. Vui lòng thử lại.');
          });
      } catch (error) {
        console.error('Lỗi khi lưu dữ liệu:', error);
        alert('Lưu dữ liệu thất bại. Vui lòng thử lại.');
      }
    } else {
      alert('Vui lòng nhập đầy đủ thời gian bắt đầu ngủ và thời gian dậy.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Quản lý Thời gian Ngủ</Text>
      </View>

      <TextInput
        placeholder="Thời gian bắt đầu ngủ (HH:mm)"
        value={sleepStart}
        onChangeText={setSleepStart}
        style={styles.input}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Thời gian dậy (HH:mm)"
        value={wakeUp}
        onChangeText={setWakeUp}
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleDatePick} style={styles.button}>
        <Icon name="calendar" size={20} color="white" />
        <Text style={styles.buttonText}>Chọn Ngày</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowDatePicker(false);
            setSelectedDate(date || selectedDate);
          }}
        />
      )}

      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Icon name="save" size={20} color="white" />
        <Text style={styles.saveButtonText}>Lưu Kết quả</Text>
      </TouchableOpacity>

      {result && <Text style={styles.resultText}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E3F2FD',
  },
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
  input: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#64B5F6',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  saveButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default SleepTime;
