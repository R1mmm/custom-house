import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Light from "../../assets/house_light.png";
import axios from "axios";

export default function Login({ navigation }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // const [socialModalVisible, setSocialModalVisible] = useState(false);
  // const [source, setSource] = useState("");

  // const onPressSocial = async (social) => {
  //   setSocialModalVisible(!socialModalVisible);
  //   setSource(`http://localhost:8080/${social}`);
  // };

  // const closeSocialModal = async () => {
  //   setSocialModalVisible(socialModalVisible);
  // };

  const signIn = () => {
    navigation.navigate("Tab");
    // const values = {
    //   id: id,
    //   password: password,
    // };
    // setTimeout(function () {
    //   axios
    //     .post("https://fe50-58-142-81-222.jp.ngrok.io/auth", values)
    //     .then(function (response) {
    //       console.log(response);
    //       console.log(values);
    //       navigation.navigate("Tab");
    //       Alert.alert("안녕하세요 나랭님~");
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //       Alert.alert("로그인 실패");
    //     });
    // }, 100);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={Light}
          style={styles.image}
        />
      </View>
      <Text style={styles.customHouse}>Custom House</Text>

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
        {/* {source !== undefined ? (
          <SocialWebviewModal
            visible={socialModalVisible}
            source={source}
            closeSocialModal={closeSocialModal}
          />
        ) : null} */}
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
    fontSize: 40,
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
