import { StatusBar } from "expo-status-bar";
import { useState, useRef, useEffect } from "react";
import SelectDropdown from "react-native-select-dropdown";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import axios from "axios";
import baseURL from "../../baseURL";

export default function SignUp({ navigation }) {
  const genders = ["남성", "여성"];
  const households = ["1인", "2인", "3인", "4인", "5인 이상"];

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [pw, setPw] = useState(false);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [household, setHousehold] = useState("");

  const checkPassword = (text) => {
    setPasswordCheck(text);
    if (text === password) {
      setPw(true);
    } else {
      setPw(false);
    }
  };

  useEffect(() => {}, [passwordCheck, setPasswordCheck]);

  const signUp = () => {
    if (
      name == "" ||
      id == "" ||
      password == "" ||
      gender == "" ||
      age == "" ||
      household == ""
    ) {
      Alert.alert("입력되지 않은 정보가 있습니다");
      return;
    }
    const values = {
      username: name,
      userId: id,
      password: password,
      gender: gender,
      age: age,
      household: household,
    };
    setTimeout(function () {
      axios
        .post(`${baseURL}/new-member`, values)
        .then(function (response) {
          console.log(response);
          console.log(values);
          navigation.navigate("Login");
          Alert.alert("성공적으로 가입되었습니다!");
        })
        .catch(function (error) {
          console.log(error);
          Alert.alert("회원가입 실패");
        });
    }, 100);
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.signupFont}>내멋대로ㅎLG 회원가입</Text>

      <ScrollView style={styles.mainContainer}>
        <Text style={styles.inputTitle}>이름</Text>
        <TextInput
          placeholder="이름"
          onChangeText={setName}
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>아이디</Text>
        <View style={styles.idContainer}>
          <TextInput
            placeholder="ID"
            onChangeText={setId}
            style={styles.textInput}
          />
          {/* <TouchableOpacity
            style={styles.idButton}
            // onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.idButtonFont}>중복 확인</Text>
          </TouchableOpacity> */}
        </View>
        <Text style={styles.inputTitle}>비밀번호</Text>
        <TextInput
          placeholder="비밀번호 8자 이상"
          secureTextEntry={true}
          onChangeText={setPassword}
          style={styles.textInput}
        />
        {password.length >= 8 ? null : (
          <Text style={{ color: "red", marginBottom: 15 }}>
            비밀번호는 8자 이상이어야 합니다
          </Text>
        )}
        <Text style={styles.inputTitle}>비밀번호 확인</Text>
        <TextInput
          placeholder="비밀번호 확인"
          secureTextEntry={true}
          onChangeText={(text) => checkPassword(text)}
          style={styles.textInput}
        />
        {pw ? (
          <Text style={{ color: "green", marginBottom: 15 }}>
            비밀번호가 일치합니다.
          </Text>
        ) : (
          <Text style={{ color: "red", marginBottom: 15 }}>
            비밀번호가 일치하지 않습니다.
          </Text>
        )}
        <Text style={styles.inputTitle}>전화번호</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="전화번호"
          style={styles.textInput}
        />
        {/* <Text style={styles.inputTitle}>이메일</Text>
        <TextInput
          placeholder="E-mail"
          onChangeText={set}

          style={styles.textInput}
        /> */}
        <Text style={styles.inputTitle}>성별</Text>
        <View style={styles.radioButtonContainer}>
          <SelectDropdown
            data={genders}
            defaultButtonText="성별"
            buttonTextStyle={{
              color: "#30a874",
              fontWeight: "600",
            }}
            buttonStyle={{
              borderRadius: 10,
              fontSize: 18,
              backgroundColor: "#f3f3f3",
            }}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setGender(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <Text style={styles.inputTitle}>나이</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="나이"
          onChangeText={setAge}
          style={styles.textInput}
        />
        <Text style={styles.inputTitle}>가구 크기</Text>
        <SelectDropdown
          data={households}
          defaultButtonText="가구 크기"
          buttonTextStyle={{
            color: "#30a874",
            fontWeight: "600",
          }}
          buttonStyle={{
            borderRadius: 10,
            fontSize: 18,
            marginTop: 10,
            backgroundColor: "#f3f3f3",
          }}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setHousehold(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={signUp}
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
    borderRadius: 10,
    border: "1px solid",
    height: 50,
    width: 270,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f3f3f3",
  },
  passwordConfirm: {
    marginBottom: 10,
    fontWeight: "500",
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
