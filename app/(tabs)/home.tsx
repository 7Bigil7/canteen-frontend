import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* ===== Presidency University Canteen ===== */}
      <Text style={styles.title}>🍴 Menu</Text>

      <View style={styles.card}>
        <Text style={styles.subTitle}>🏫 Presidency University Canteen</Text>
        <Text style={styles.item}>🍚 Rice - ₹50</Text>
        <Text style={styles.item}>🍜 Noodles - ₹60</Text>
        <Text style={styles.item}>🍕 Pizza - ₹120</Text>
        <Text style={styles.item}>🍔 Burger - ₹70</Text>
        <Text style={styles.item}>🥤 Soft Drink - ₹40</Text>
      </View>
      <Text style={styles.footer}>© Presidency University Canteen App</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8fdfd",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#c0392b",
    marginBottom: 15,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
    textAlign: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginVertical: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  item: {
    fontSize: 18,
    color: "#2f3640",
    marginVertical: 5,
  },
  footer: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
    textAlign: "center",
  },
});