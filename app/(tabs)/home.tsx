import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🍴 Menu</Text>

      <View style={styles.card}>
        <Text style={styles.item}>🍛 Rice - ₹50</Text>
        <Text style={styles.item}>🍜 Noodles - ₹60</Text>
        <Text style={styles.item}>🍕 Pizza - ₹120</Text>
        <Text style={styles.item}>🍔 Burger - ₹70</Text>
        <Text style={styles.item}>🥤 Soft Drink - ₹40</Text>
      </View>

      <Text style={styles.footer}>Presidency University Canteen 🍽</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#b30000",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    width: "100%",
  },
  item: {
    fontSize: 18,
    marginVertical: 8,
    color: "#333",
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    color: "#888",
  },
});