import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Text from "../utils/text";

export default function CustomRoutineStart({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.explainText}>
        나에게 꼭 맞는 루틴을 만들 수 있어요!
      </Text>
      <TouchableOpacity
        style={styles.routineBtn}
        onPress={() => navigation.navigate("RoutineCustomize")}
      >
        <Text style={styles.routineText}>루틴 만들러 가기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  explainText: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
  },
  routineBtn: {
    borderRadius: "30px",
    backgroundColor: "#66CC99",
    padding: 20,
  },
  routineText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
});
