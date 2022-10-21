import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import Light from "../../assets/house_light.png";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={Light}
          style={styles.image}
        />
      </View>
      <Text style={styles.customHouse}>Custom House</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="홈 화면으로 가기"
      ></Button>

      <View style={styles.idAndPw}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.idText}
            placeholder="ID"
          ></TextInput>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.idText}>PW</Text>
        </View>
      </View>

      <View style={styles.findBox}>
        <Text style={styles.findText}>회원가입</Text>

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
    marginBottom: 90,
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
});
