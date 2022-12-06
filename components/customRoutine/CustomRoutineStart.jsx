import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Text from "../utils/text";
import chImg from "../../assets/routineMake.png";
import HighlightText from "react-native-highlight-underline-text";
import customRoutinePic from "../../assets/customRoutine.png";

export default function CustomRoutineStart({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image
          source={chImg}
          style={styles.image}
        ></Image> */}
        <Text style={styles.explainText}>
          <Text style={{ color: "#66CC99" }}>김엘지</Text>
          님에게
          {"\n"}꼭 맞는 루틴을 만들어보세요.
        </Text>
        <Text style={styles.explainSubText}>간편한 명령어, 시간설정으로</Text>
        <Text style={styles.explainSubText}>원하는 모든 가전제품 동작!</Text>
        <Image
          source={customRoutinePic}
          style={styles.customImg}
        ></Image>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.routineBtn}
            onPress={() => navigation.navigate("RoutineCustomize")}
          >
            <Text style={styles.routineText}>루틴 만들러 가기</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.line}></View>
      <Text style={styles.routineTitle}>내가 만든 루틴</Text>
      <View style={styles.box}></View>
      <View style={styles.listBox}>
        <Text style={styles.testText}>루틴 이름</Text>
        <Text style={styles.testText}>루틴 가전제품</Text>
      </View>
      <View style={styles.line}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    paddingTop: 0,
    padding: 30,
  },
  header: {
    width: "100%",
    borderRadius: 35,
    marginTop: 40,
    justifyContent: "space-around",
    alignItems: "center",
  },
  explainText: {
    fontSize: 20,
    // color: "white",
    color: "#3a3a3a",
    alignSelf: "flex-start",
    fontWeight: "500",
    marginBottom: 40,
  },
  explainSubText: {
    fontSize: 16,
    color: "gray",
    alignSelf: "flex-start",
    marginBottom: 7,
  },
  routineBtn: {
    borderRadius: 30,
    backgroundColor: "#66CC99",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  routineText: {
    color: "white",
    // color: "#444444",
    fontSize: 15,
    fontWeight: "500",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  image: {
    width: 110,
    height: 70,
    marginLeft: 40,
    top: 20,
    opacity: 0.8,
    // left: 130,
  },
  customImg: {
    width: 300,
    height: 310,
    margin: 30,
  },
  box: {
    backgroundColor: "#f0f0f0",
    width: "100%",
    height: 100,
    borderRadius: 20,
  },
  listBox: {
    width: "100%",
    height: 60,
  },
  routineTitle: {
    fontSize: 17,
    marginLeft: 5,
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 20,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#e5e5e5",
    marginTop: 40,
    marginBottom: 10,
  },
  testText: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    fontSize: 15,
    marginLeft: 5,
  },
  button: {
    // position: "absolute",
    // left: 230,
    // top: 500,
  },
});
