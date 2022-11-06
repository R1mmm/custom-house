import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import homeImg from "../../assets/home-chr.png";
import HighlightText from "react-native-highlight-underline-text";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Text style={styles.logoText}>Custom House</Text>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.headerBox}>
          <View style={styles.textBox}>
            <HighlightText
              isFixed
              underlineSize={10}
              underlineColor="#66CC99"
              textStyle={{ fontSize: 30, fontWeight: "900" }}
              text="나림님,"
            />
            <HighlightText
              isFixed
              underlineSize={10}
              underlineColor="#66CC99"
              textStyle={{ fontSize: 30, fontWeight: "900" }}
              text="안녕하세요"
            />
          </View>
          <Image
            source={homeImg}
            style={styles.image}
          />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.routinBox}>
          <Text style={styles.routinText}>
            <Text style={{ color: "#66CC99" }}>나림</Text>
            님이 적용중인 루틴이에요
          </Text>
          <View style={styles.routinListBox}>
            <Text style={styles.routinListText}>방청소하기</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#66CC99",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logoBox: {
    flexGrow: "1",
    width: "100%",
    height: "20%",
    justifyContent: "flex-end",
    padding: "3%",
  },
  logoText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: "10%",
    fontSize: "20",
  },
  mainBox: {
    flexGrow: "4",
    width: "100%",
    height: "80%",
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0px -5px 4px 0px rgba(143, 143, 143, 0.25)",
    borderTopRightRadius: "30px",
    borderTopLeftRadius: "30px",
    padding: "7%",
  },
  headerBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "10%",
  },
  textBox: {
    marginTop: "30%",
  },
  image: {
    width: 170,
    height: 170,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#F5F5F5",
    marginBottom: "3%",
  },
  routinBox: {
    height: "40%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "5%",
  },
  routinText: {
    fontSize: 15,
    fontWeight: "700",
  },
  routinListBox: {
    marginTop: "5%",
    height: "70%",
    width: "100%",
    backgroundColor: "#F8F8F8",
    boxShadow: "0px 4px 4px rgba(205, 205, 205, 0.25)",
    borderRadius: "10",
    padding: "10%",
  },
  routinListText: {
    color: "black",
    fontWeight: "700",
  },
});
