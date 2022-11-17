import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function CustomRoutine() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>가전 제품 선택</Text>
      <View style={styles.productContainer}>
        <View style={styles.iconBox}>
          <Ionicons
            name="ios-tv-sharp"
            size={35}
          />
        </View>
        <View style={styles.iconBox}>
          <Ionicons
            name="ios-water-sharp"
            size={35}
          />
        </View>
        <View style={styles.iconBox}>
          <Ionicons
            name="ios-shirt-sharp"
            size={35}
          />
        </View>
        <View style={styles.iconBox}></View>
        <View style={styles.iconBox}></View>
        <View style={styles.iconBox}></View>
        <View style={styles.iconBox}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center",
    padding: 30,
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 15,
  },
  iconBox: {
    borderRadius: "100%",
    height: 80,
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    marginBottom: 10,
    marginTop: 10,
  },
});
