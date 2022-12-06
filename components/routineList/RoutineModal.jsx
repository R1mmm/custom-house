import React, { useState } from "react";
import {
  Alert,
  Modal,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Text from "../utils/text";
import detailImg from "../../assets/detail-img.png";

export default function RoutineModal({
  setIsModalVisible,
  isModalVisible,
  modalContent,
}) {
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
      <ScrollView style={styles.root}>
        <View style={styles.modal}>
          <View style={styles.routineTitle}>
            <Text style={styles.routineTitleText}>{modalContent?.name}</Text>
          </View>
          <Image
            source={detailImg}
            style={styles.image}
          ></Image>
          <Text style={styles.routineDesc}>{modalContent?.detail}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.funcDescBox}>
          <Text style={styles.descText}>이 자동화 기능은요</Text>
          <View style={styles.funcList}>
            {modalContent?.func.map((data, index) => (
              <View style={styles.funcBox}>
                <Image
                  source={modalContent.img[index]}
                  style={styles.prodIcon}
                ></Image>
                <Text style={styles.funcText}>{data}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.routineAddBtn}>
            <Text style={styles.routineAddText}>루틴 추가하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 30,
  },
  modal: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
  },
  line: {
    width: "100%",
    height: 1,
    alignSelf: "center",
    backgroundColor: "#e5e5e5",
    marginTop: 20,
  },
  routineTitle: {
    alignSelf: "center",
    backgroundColor: "#E4E4E4",
    borderRadius: "20px",
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 15,
  },
  routineTitleText: {
    fontWeight: "700",
    fontSize: 20,
  },
  image: {
    height: 150,
    width: 180,
    alignSelf: "center",
  },
  routineDesc: {
    marginTop: 20,
    fontWeight: "700",
    fontSize: "16",
    color: "#CCCCCC",
    alignSelf: "center",
  },
  funcDescBox: {
    justifyContent: "flex-start",
    height: 370,
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
    // paddingLeft: 30,
    // height: "70%",
    justifyContent: "space-around",
  },
  funcBox: {
    width: 250,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    // justifyContent: "",
  },
  funcText: {
    color: "#555555",
    fontWeight: "700",
    fontSize: "17",
    marginLeft: 20,
  },
  routineAddBtn: {
    backgroundColor: "#66CC99",
    borderRadius: 30,
    width: 270,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
  },
  routineAddText: {
    fontSize: 20,
    color: "white",
    // fontWeight: "700",
  },
  prodIcon: {
    width: 60,
    height: 60,
  },
});
