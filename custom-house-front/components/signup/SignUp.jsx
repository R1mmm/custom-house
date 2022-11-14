import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function SignUp() {
  return (
    <View style={styles.Container}>
      <Text style={styles.signupFont}>내멋대로ㅎLG 회원가입</Text>

      <ScrollView style={styles.mainContainer}>
        <Text style={styles.inputTitle}>이름</Text>
        <TextInput
          placeholder="이름"
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>아이디</Text>
        <View style={styles.idContainer}>
          <TextInput
            placeholder="ID"
            style={styles.textInput}
          />
          <TouchableOpacity
            style={styles.idButton}
            // onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.idButtonFont}>중복 확인</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.inputTitle}>비밀번호</Text>
        <TextInput
          placeholder="비밀번호 8자 이상"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>비밀번호 확인</Text>
        <TextInput
          placeholder="비밀번호 확인"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>전화번호</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="전화번호"
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>이메일</Text>
        <TextInput
          placeholder="E-mail"
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>성별</Text>
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.radioButton}
          >
            <View style={styles.radioButtonIcon} />
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>남자</Text>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.radioButton}
          >
            <View style={styles.radioButtonIcon} />
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>여자</Text>
        </View>
        <Text style={styles.inputTitle}>나이</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="나이"
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>가구 크기</Text>
        <RNPickerSelect
          style={styles.pickerStyle}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "1인", value: "1" },
            { label: "2인", value: "2" },
            { label: "3인", value: "3" },
            { label: "4인", value: "4" },
            { label: "5인 이상", value: "5" },
          ]}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.signupButton}
        // onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.signupFont2}>Sign Up</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "10%",
    paddingTop: 100,
    paddingBottom: 30,
  },
  signupFont: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: "3%",
  },
  mainContainer: {
    backgroundColor: "#fff",
    // justifyContent: "space-between",
    // alignItems: "flex-start",
    paddingLeft: "3%",
    // paddingTop: 20,
    marginBottom: "15%",
    marginTop: "10%",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  inputTitle: {
    fontWeight: "600",
  },
  textInput: {
    // borderRadius: 10,
    border: "1px solid",
    height: 50,
    width: 200,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    // backgroundColor: "#f3f3f3",
  },
  signupButton: {
    width: 180,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "17px",
    backgroundColor: "#66CC99",
  },
  signupFont2: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 9,
    marginLeft: 5,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 10,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: "#66CC99",
  },
  radioButtonText: {
    fontSize: 14,
    marginLeft: 8,
    marginRight: 20,
  },
  idContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  idButton: {
    marginLeft: 12,
    marginBottom: 5,
    height: 23,
    width: 62,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
  },
  idButtonFont: {
    fontSize: 13,
  },
  pickerStyle: {
    fontSize: 20,
    height: 20,
  },
});
