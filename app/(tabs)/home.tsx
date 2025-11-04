// app/(tabs)/home.tsx
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type CanteenKey = "none" | "presidency" | "upahara";

export default function HomeScreen() {
  const [selected, setSelected] = useState<CanteenKey>("none");

  const presidencyMenu = [
    { name: "Rice", price: 50, emoji: "🍛" },
    { name: "Noodles", price: 60, emoji: "🍜" },
    { name: "Pizza", price: 120, emoji: "🍕" },
    { name: "Burger", price: 70, emoji: "🍔" },
    { name: "Soft Drink", price: 40, emoji: "🥤" },
  ];

  const upaharaMenu = [
    { name: "Meals", price: 60, emoji: "🍽" },
    { name: "Sandwich", price: 40, emoji: "🥪" },
    { name: "Maggi", price: 30, emoji: "🍜" },
    { name: "Juice", price: 25, emoji: "🧃" },
  ];

  function renderSelection() {
    return (
      <View style={styles.selectionContainer}>
        <Text style={styles.title}>Choose a Canteen</Text>

        <TouchableOpacity
          style={styles.choiceCard}
          onPress={() => setSelected("presidency")}
        >
          <Text style={styles.choiceTitle}>Presidency University Canteen</Text>
          <Text style={styles.choiceSubtitle}>Affordable & tasty meals</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.choiceCard}
          onPress={() => setSelected("upahara")}
        >
          <Text style={styles.choiceTitle}>Hotel Upahara</Text>
          <Text style={styles.choiceSubtitle}>Quick snacks & drinks</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderMenu(canteen: CanteenKey) {
    const menu = canteen === "presidency" ? presidencyMenu : upaharaMenu;
    const title =
      canteen === "presidency" ? "Presidency Canteen Menu" : "Hotel Upahara Menu";

    return (
      <View style={styles.menuContainer}>
        <View style={styles.menuHeader}>
          <TouchableOpacity onPress={() => setSelected("none")}>
            <Text style={styles.backBtn}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.menuTitle}>{title}</Text>
        </View>

        <ScrollView contentContainerStyle={styles.card}>
          {menu.map((item, idx) => (
            <View key={idx} style={styles.menuItem}>
              <Text style={styles.itemText}>
                <Text style={styles.emoji}>{item.emoji} </Text>
                {item.name} - ₹{item.price}
              </Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.footer}>
          {canteen === "presidency"
            ? "Presidency University Canteen"
            : "Hotel Upahara"}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      {selected === "none" && renderSelection()}
      {selected !== "none" && renderMenu(selected)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f2fcfc" },
  selectionContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
    color: "#c43a3a",
  },
  choiceCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    marginVertical: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },
  choiceTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  choiceSubtitle: {
    marginTop: 6,
    color: "#666",
  },

  menuContainer: {
    flex: 1,
  },
  menuHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 6,
  },
  backBtn: {
    color: "#4a90e2",
    fontSize: 16,
    marginRight: 12,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },

  card: {
    margin: 16,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 18,
    elevation: 3,
  },
  menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#222",
  },
  emoji: {
    fontSize: 18,
  },
  footer: {
    textAlign: "center",
    color: "#999",
    fontStyle: "italic",
    marginTop: 20,
    marginBottom: 30,
  },
});