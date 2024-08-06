import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const AnUong = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male'); // 'male' or 'female'
  const [bmiResult, setBmiResult] = useState(null);
  const navigation = useNavigation();

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height);
    const weightInKg = parseFloat(weight);

    if (isNaN(heightInMeters) || isNaN(weightInKg) || heightInMeters <= 0 || weightInKg <= 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập chiều cao và cân nặng hợp lệ.');
      return;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    let result = '';
    if (bmi < 18.5) {
      result = 'Thiếu cân. bạn cần bổ sung protein, đạm hoặc bạn có thể tham gia lớp dinh dưỡng của Herbalife ';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = 'Cân nặng khỏe mạnh nhưng vẫn phải vận động và ăn uống điều độ nhé';
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = 'Thừa cân. Bạn chỉ hơi dư 1 xíu cân thôi hãy chăm vận động lên nhé =>>';
    } else {
      result = 'Béo phì. Tôi nghĩ bạn nên tìm những nơi uy tín để cái thiện cân nặng và chế độ ăn uống chứ tôi thấy như này không ổn';
    }

    setBmiResult({
      value: bmi.toFixed(2),
      advice: result,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Quản lý BMI</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Icon name="arrows-v" size={20} color="#4CAF50" style={styles.icon} />
          <TextInput
            placeholder="Chiều cao (m)"
            value={height}
            onChangeText={setHeight}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Icon name="weight" size={20} color="#4CAF50" style={styles.icon} />
          <TextInput
            placeholder="Cân nặng (kg)"
            value={weight}
            onChangeText={setWeight}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.genderGroup}>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'male' && styles.selectedGender]}
            onPress={() => setGender('male')}
          >
            <Icon name="mars" size={20} color={gender === 'male' ? 'white' : '#4CAF50'} />
            <Text style={[styles.genderText, gender === 'male' && styles.selectedGenderText]}>Nam</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'female' && styles.selectedGender]}
            onPress={() => setGender('female')}
          >
            <Icon name="venus" size={20} color={gender === 'female' ? 'white' : '#4CAF50'} />
            <Text style={[styles.genderText, gender === 'female' && styles.selectedGenderText]}>Nữ</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={calculateBMI} style={styles.calculateButton}>
          <Icon name="check" size={20} color="white" />
          <Text style={styles.calculateButtonText}>Tính chỉ số BMI</Text>
        </TouchableOpacity>

        {bmiResult && (
          <View style={styles.result}>
            <Text style={styles.resultText}>
              Chỉ số BMI: {bmiResult.value}
            </Text>
            <Text style={styles.resultAdvice}>
              Lời khuyên: {bmiResult.advice}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
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
  form: {
    marginTop: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    marginRight: 10,
  },
  genderGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  genderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  selectedGender: {
    backgroundColor: '#388E3C',
  },
  genderText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  selectedGenderText: {
    color: 'white',
  },
  calculateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
  },
  calculateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  result: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  resultAdvice: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
});

export default AnUong;
