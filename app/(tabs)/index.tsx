import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [regNo, setRegNo] = useState("");
  const [phone, setPhone] = useState("");
  
  // ✅ Hook must be inside the component (top-level)
  const router = useRouter();

  const handleLogin = () => {
    if (regNo && phone) {
      Alert.alert("Success",` Welcome ${regNo}`);
      router.push("/home");   // ✅ Navigate to Home page
    } else {
      Alert.alert("Error", "Please enter Register Number & Phone Number");
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
        keyboardType="numeric"
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
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",  // ← this fixes black screen
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#b30000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: "100%",
  },
  button: {
    backgroundColor: "#e50914",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});