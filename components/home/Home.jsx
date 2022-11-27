import { Text, View, StyleSheet, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import homeImg from "../../assets/home-chr.png";
import HighlightText from "react-native-highlight-underline-text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import styled from "styled-components";
import { LGlogo } from "../../assets";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userRoutine, setUserRoutine] = useState([]);

  AsyncStorage.getItem("nickname", (err, result) => {
    setUserName(result);
  });
  AsyncStorage.getItem("user_id", (err, result) => {
    setUserId(result);
  });

  useEffect(() => {
    console.log(userRoutine);
  }, [userRoutine]);

  useEffect(() => {
    if (userId !== "") {
      setTimeout(() => {
        axios
          .get(`https://15eb-116-44-106-196.jp.ngrok.io/routine/${userId}`)
          .then(function (response) {
            console.log(response);
            setUserRoutine(response.data);
          })
          .catch(function (error) {
            console.log(error);
            // Alert.alert("정보 가져오기 실패");
          });
      }, 100);
    }
  }, [userId]);

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        {/* <Text style={styles.logoText}>Custom House</Text> */}
        <Image
          style={styles.logoText}
          source={LGlogo}
        ></Image>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.headerBox}>
          <View style={styles.textBox}>
            <HighlightText
              isFixed
              underlineSize={10}
              underlineColor="#66CC99"
              textStyle={{ fontSize: 30, fontWeight: "900" }}
              text={`${userName}님,`}
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
        {/* <View style={styles.divider}></View> */}
        <View style={styles.routinBox}>
          <Text style={styles.routinText}>
            <Text style={{ color: "#66CC99" }}>{userName}</Text>
            님이 적용중인 루틴이에요
          </Text>

          <View style={styles.routinListBox}>
            {userRoutine.length === 0 ? (
              <RoutinListText style={{ color: "#b9b9b9" }}>
                적용중인 루틴이 없어요
              </RoutinListText>
            ) : (
              userRoutine.map((Item, idx) => (
                <RoutinListText>{Item}</RoutinListText>
              ))
            )}
          </View>
        </View>
        <View style={styles.routinBox}>
          <Text style={styles.routinText}>
            <Text style={{ color: "#66CC99" }}>{userName}</Text>
            님이 현재 실행중인 제품이에요
          </Text>
          <View style={styles.routinListBox}>
            <RoutinListText>LG 트롬 건조기</RoutinListText>
            <RoutinListText>대박 짱 큰 티비</RoutinListText>
            <RoutinListText>공기청정기</RoutinListText>
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
    width: "55%",
    height: "25%",
    width: 120,
    height: 20,
    marginLeft: "5%",
    // fontSize: "20",
  },
  mainBox: {
    flexGrow: "4",
    width: "100%",
    height: "80%",
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "space-around",
    // justifyContent: "space-around",
    boxShadow: "0px -5px 4px 0px rgba(143, 143, 143, 0.25)",
    borderTopRightRadius: "30px",
    borderTopLeftRadius: "30px",
    padding: "7%",
  },
  headerBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "5%",
  },
  textBox: {
    marginTop: "25%",
  },
  image: {
    width: 150,
    height: 150,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "#F5F5F5",
    marginBottom: "3%",
  },
  routinBox: {
    // height: "30%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingRight: "5%",
    paddingLeft: "5%",
    marginBottom: "5%",
  },
  routinText: {
    fontSize: 15,
    fontWeight: "700",
  },
  routinListBox: {
    marginTop: "5%",
    // height: "80%",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#F8F8F8",
    boxShadow: "0px 4px 4px rgba(205, 205, 205, 0.25)",
    borderRadius: "10",
    padding: "9%",
  },
  routinListText: {
    color: "black",
    fontWeight: "700",
    marginBottom: 20,
  },
});

const RoutinListText = styled.Text`
  color: black;
  font-weight: 700;
  /* margin-bottom: 20; */
  :not(:last-child) {
    margin-bottom: 20;
  }
`;
