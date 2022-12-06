import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Text from "../utils/text";
import Light from "../../assets/house_light.png";
import axios from "axios";
import baseURL from "../../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [userId, setUserId] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  AsyncStorage.getItem("user_id", (err, result) => {
    setUserId(result);
  });

  console.log(userId);

  useEffect(() => {
    if (userId !== "" && userId !== null) {
      navigation.navigate("Tab");
    }
  }, [userId, setUserId]);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    // navigation.navigate("Tab");
    const values = {
      userId: id,
      password: password,
    };
    setTimeout(function () {
      axios
        .post(`${baseURL}/login`, values)
        .then(function (response) {
          console.log(response);
          console.log(values);
          Alert.alert(`안녕하세요 ${response.data[1]}님!`);
          //유저 닉네임 저장
          AsyncStorage.setItem("nickname", response.data[1], () => {
            console.log("유저 닉네임 저장 완료");
          });
          AsyncStorage.setItem("user_id", response.data[0], () => {
            console.log("유저 ID 저장 완료");
          });
          navigation.navigate("Tab");
        })
        .catch(function (error) {
          console.log(error);
          Alert.alert("로그인 실패");
        });
    }, 100);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={Light}
          style={styles.image}
        />
      </View>
      <Text style={styles.customHouse}>내멋대로ㅎLG</Text>

      <View style={styles.idAndPw}>
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={setId}
            style={styles.idText}
            placeholder="ID"
          ></TextInput>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={setPassword}
            style={styles.idText}
            secureTextEntry={true}
            placeholder="password"
          ></TextInput>
        </View>

        <TouchableOpacity
          style={styles.loginBox}
          // onPress={() => navigation.navigate("Tab")}
          onPress={signIn}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.kakaoLoginBox}
          // onPress={() => onPressSocial("kakao")}
        >
          <Text style={styles.kakaoLoginText}>카카오로 로그인하기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.findBox}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.findText}>회원가입</Text>
        </TouchableOpacity>

        <Text style={styles.findText}>ID/패스워드 찾기</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },
  imageView: {
    width: 250,
    height: 250,
  },
  image: {
    width: 250,
    height: 250,
  },
  customHouse: {
    color: "#66CC99",
    fontSize: 35,
    marginTop: 20,
    fontWeight: "bold",
  },
  idAndPw: {
    marginTop: 30,
    marginBottom: 30,
    display: "flex",
  },
  inputBox: {
    width: 250,
    height: 40,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(223, 223, 223, 0.25)",
    borderRadius: "5px",
    margin: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  idText: {
    color: "gray",
    marginLeft: 15,
    width: "100%",
  },
  findBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  findText: {
    marginBottom: 10,
  },
  loginBox: {
    width: 250,
    height: 40,
    backgroundColor: "#66CC99",
    boxShadow: "0px 4px 4px rgba(223, 223, 223, 0.25)",
    borderRadius: "5px",
    margin: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  kakaoLoginBox: {
    width: 250,
    height: 40,
    backgroundColor: "#FEE500",
    boxShadow: "0px 4px 4px rgba(223, 223, 223, 0.25)",
    borderRadius: "5px",
    margin: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  loginText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  kakaoLoginText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#191919",
  },
});
