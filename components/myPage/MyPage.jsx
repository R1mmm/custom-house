import { View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import Text from "../utils/text";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyPage({ navigation }) {
  const logout = () => {
    Alert.alert(
      "Logout", // 제목
      "정말 로그아웃하시겠어요?", // 설명
      [
        // 버튼 추가
        { text: "취소", style: "cancel" },
        {
          text: "예",
          style: "destructive", // 버튼 스타일 지정
          onPress: async () => {
            try {
              await AsyncStorage.clear();
              console.log("냐냐");
              navigation.navigate("Login");
            } catch (e) {
              // 오류 예외 처리
            }
          },
        },
      ],
      {
        // 옵션 추가
        cancelable: true, // 취소 버튼 활성화
      }
    );
  };

  return (
    <View>
      <View style={styles.myInfo}>
        <View>
          <Text style={styles.myInfoText}>내 정보</Text>
          <Text style={styles.myInfoContent}>이름: 냥경훈</Text>
          <Text style={styles.myInfoContent}>ID: kitty_gang</Text>
        </View>
        <View style={styles.profile}></View>
      </View>
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => navigation.navigate("MyRoutine")}
      >
        <Text style={styles.listText}>내 루틴 관리하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => logout()}
      >
        <Text style={styles.listText}>로그아웃</Text>
      </TouchableOpacity>
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
  myInfo: {
    height: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ebebeb",
  },
  myInfoText: {
    fontSize: 20,
    marginBottom: 10,
  },
  myInfoContent: {
    fontSize: 17,
    marginBottom: 10,
  },
  profile: {
    height: 100,
    width: 100,
    backgroundColor: "#ebebeb",
    borderRadius: 10,
  },
});
