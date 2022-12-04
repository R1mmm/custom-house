import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Text from "../utils/text";
import chImg from "../../assets/routineMake.png";

export default function CustomRoutineStart({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Image
          source={chImg}
          style={styles.image}
        ></Image>
        <TouchableOpacity
          style={styles.routineBtn}
          onPress={() => navigation.navigate("RoutineCustomize")}
        >
          <Text style={styles.routineText}>루틴 만들러 가기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.explainText}>
          나에게 꼭 맞는 루틴을 만들 수 있어요!
        </Text>
      </View>
      <View style={styles.line}></View>
      <Text style={styles.routineTitle}>내가 만든 루틴</Text>
      {/* <View style={styles.box}></View> */}
      <View style={styles.listBox}>
        <Text style={styles.testText}>루틴 이름</Text>
        <Text style={styles.testText}>루틴 가전제품</Text>
      </View>
      {/* <View style={styles.line}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    padding: 30,
  },
  header: {
    width: "100%",
    height: 200,
    borderRadius: 25,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f6f2",
    // backgroundColor: "#66CC99",

    // shadowColor: "#afafaf",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  explainText: {
    fontSize: 17,
    // color: "white",
    color: "black",
    fontWeight: "500",
    marginBottom: 20,
  },
  routineBtn: {
    borderRadius: "30px",
    backgroundColor: "#66CC99",
    padding: 15,
  },
  routineText: {
    color: "white",
    // color: "#444444",
    fontSize: 13,
    fontWeight: "500",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  image: {
    width: 110,
    height: 70,
    opacity: 0.8,
    // left: 130,
  },
  box: {
    backgroundColor: "#f0f0f0",
    width: "100%",
    height: 100,
    borderRadius: 20,

    // shadowColor: "#c3c3c3",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 3.84,

    // elevation: 5,
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
    position: "absolute",
    left: 230,
    top: 500,
  },
});
