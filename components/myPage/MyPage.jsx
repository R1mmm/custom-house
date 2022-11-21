import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function MyPage() {
  return (
    <View>
      <View style={styles.listContainer}>
        <Text style={styles.listText}>내 정보</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listText}>내 루틴 관리하기</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listText}>로그아웃</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#ffffff",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
    width: "100%",
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#ebebeb",
  },
  listText: {
    color: "#555555",
  },
});
