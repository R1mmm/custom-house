import React, { useState } from "react";
import {
  Alert,
  Modal,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { userRoutines } from "../utils/atom";
import { useRecoilState } from "recoil";
import SelectDropdown from "react-native-select-dropdown";
import axios from "axios";
import baseURL from "../../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";
import Text from "../utils/text";
import detailImg from "../../assets/detail-img.png";

export default function RoutineModal({
  setIsModalVisible,
  isModalVisible,
  modalContent,
}) {
  const [commandType, setCommandType] = useState("");
  const [command, setCommand] = useState(null);
  const [timer, setTimer] = useState(null);

  const addRoutine = () => {
    Alert.alert("루틴이 추가됐어요!");
    setIsModalVisible((prev) => !prev);
  };

  return (
    <Modal
      animationType={"slide"}
      //   transparent={true}
      presentationStyle="formSheet"
      visible={isModalVisible}
      style={{ height: 200 }}
      onBackdropPress={() => setIsModalVisible((prev) => !prev)}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}
    >
      <KeyboardAvoidingView
        style={styles.root}
        behavior={"padding"}
      >
        <View style={styles.modal}>
          <View style={styles.routineTitle}>
            <Text style={styles.routineTitleText}>월드컵 시청</Text>
          </View>
          {/* <Image
            source={modalContent?.profileImg}
            style={styles.image}
          ></Image> */}
          <Text style={styles.routineDesc}>
            월드컵, 더 편하게 즐기고 싶잖아요!
          </Text>
        </View>
        <View style={styles.line}></View>
        <ScrollView>
          <View style={styles.funcDescBox}>
            {/* <Text style={styles.descText}>이 자동화 기능은요</Text>
            <View style={styles.funcList}>
              <View
                style={styles.funcBox}
                key={index}
              > */}
            {/* <Image
                  source={}
                  style={styles.prodIcon}
                ></Image> */}
            {/* <Text style={styles.funcText}>냐냐</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => setRoutineAdding((prev) => !prev)}>
              <Text style={styles.descText}>
                이 루틴을 추가하고 싶으시다면?
              </Text>
            </TouchableOpacity> */}
            {/* {routineAdding && ( */}
            <Text style={styles.descText}>이 루틴을 추가하고 싶으시다면?</Text>
            <>
              <MainBox>
                <SettingTitle>명령 유형</SettingTitle>
                <SelectDropdown
                  data={["명령어", "시간"]}
                  defaultButtonText="선택"
                  buttonTextStyle={{
                    color: "#4a4a4a",
                    fontWeight: "600",
                    fontSize: "15",
                    fontFamily: "nanum",
                    color: "#545454",
                  }}
                  buttonStyle={{
                    width: 150,
                    borderRadius: 20,
                    fontSize: 18,
                    marginLeft: 50,
                    fontFamily: "nanum",
                    // alignSelf: "flex-start",
                    alignSelf: "center",
                    // marginBottom: 15,
                    backgroundColor: "#f8f8f8",
                    height: 40,
                  }}
                  onSelect={(selectedItem, idx) => {
                    setCommandType(selectedItem);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
              </MainBox>
              {commandType == "명령어" && (
                <MainBox>
                  <SettingTitle>명령어 설정</SettingTitle>
                  <SettingInput
                    onChangeText={(text) => setCommand(text)}
                  ></SettingInput>
                </MainBox>
              )}
              {commandType == "시간" && (
                <MainBox>
                  <SettingTitle>시간 설정</SettingTitle>
                  <SettingInput
                    onChangeText={(text) => setTimer(text)}
                  ></SettingInput>
                </MainBox>
              )}

              <TouchableOpacity
                style={styles.routineAddBtn}
                onPress={() => addRoutine()}
              >
                <Text style={styles.routineAddText}>루틴 추가하기</Text>
              </TouchableOpacity>
            </>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 30,
    width: "100%",
    height: "100%",
    minHeight: "100%",
    flex: 1,
    overflow: "scroll",
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
    width: 150,
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
    // height: 370,
    width: "100%",
    // marginTop: 30,
  },
  descText: {
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 30,
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
    marginBottom: 40,
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

const MainBox = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 15px;
  margin-left: 10px;
  /* border: 1px solid black; */
  /* padding: 15px; */
`;

const SettingTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #464646;
  font-family: "nanum";

  /* margin-top: 15px; */
  width: 100px;
  /* align-self: center; */
`;

const SettingInput = styled.TextInput`
  font-size: 15px;
  font-weight: bold;
  font-family: "nanum";
  color: #545454;
  /* margin-top: 15px; */
  border-radius: 10px;
  border: 1.6px solid #e5e5e5;
  width: 200px;
  height: 40px;
  padding: 8px;
`;

const Footer = styled.View`
  background-color: #ffffff;
  shadow-color: #d8d8d8;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.4;
  shadow-radius: 3px;
  elevation: 2;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
