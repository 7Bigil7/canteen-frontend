import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const [regNo, setRegNo] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (regNo && phone) {
      Alert.alert('Success', `Welcome ${regNo}!`);
      router.push('/home');
    } else {
      Alert.alert('Error', 'Please enter Register Number & Phone Number');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Presidency University Canteen</Text>
      <Text style={styles.subtitle}>Pre-order your food & save time 🍔🍕</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Register Number"
        value={regNo}
        onChangeText={setRegNo}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#b30000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#d00000',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});