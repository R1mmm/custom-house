import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import detailImg from "../../assets/detail-img.png";

export default function RoutineModal({ setIsModalVisible, isModalVisible }) {
  return (
    <Modal
      animationType={"slide"}
      //   transparent={true}
      presentationStyle="pageSheet"
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}
    >
      <View style={styles.modal}>
        <View style={styles.routineTitle}>
          <Text style={styles.routineTitleText}>방해되는 요소 차단</Text>
        </View>
        <Image
          source={detailImg}
          style={styles.image}
        ></Image>
        <Text style={styles.routineDesc}>가끔 그럴 때 있잖아요,</Text>
        <Text style={styles.routineDesc}>아무 방해 없이 푹 쉬고만 싶을때!</Text>
      </View>
      <View style={styles.funcDescBox}>
        <Text style={styles.descText}>이 자동화 기능은요</Text>
        <View style={styles.funcList}>
          <Text style={styles.funcText}>TV 전원을 꺼줘요</Text>
          <Text style={styles.funcText}>모든 스피커를 무소음으로 바꿔요</Text>
          <Text style={styles.funcText}>
            세탁기 및 건조기 동작을 일시정지해요
          </Text>
        </View>
        <TouchableOpacity style={styles.routineAddBtn}>
          <Text style={styles.routineAddText}>루틴 추가하기</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "40%",
  },
  routineTitle: {
    backgroundColor: "#E4E4E4",
    borderRadius: "20px",
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 5,
    marginBottom: 10,
  },
  routineTitleText: {
    fontWeight: "700",
    fontSize: "20",
  },
  image: {
    height: 150,
    width: 180,
  },
  routineDesc: {
    fontWeight: "700",
    fontSize: "16",
    color: "#CCCCCC",
  },
  funcDescBox: {
    justifyContent: "flex-start",
    height: "40%",
    width: "100%",
    marginTop: 30,
  },
  descText: {
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "700",
    fontSize: "17",
  },
  funcList: {
    flexDirection: "column",
    paddingLeft: 50,
    height: "70%",
    justifyContent: "space-around",
  },
  funcBox: {
    borderColor: "#DEDEDE",
    // borderWidth: 1,
    height: 70,
    width: "100%",
  },
  funcText: {
    color: "#555555",
    fontWeight: "700",
    fontSize: "17",
  },
  routineAddBtn: {
    backgroundColor: "#66CC99",
    borderRadius: 30,
    width: 200,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
  },
  routineAddText: {
    fontSize: 22,
    color: "white",
    fontWeight: "700",
  },
});
