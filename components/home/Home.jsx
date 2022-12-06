import { View, StyleSheet, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import homeImg from "../../assets/home-chr.png";
import homeTest from "../../assets/testIcon.png";
import HighlightText from "react-native-highlight-underline-text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import styled from "styled-components";
import Text from "../utils/text";
import { LGlogo } from "../../assets";
import baseURL from "../../baseURL";
import { LinearGradient } from "expo-linear-gradient";

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
    if (userId !== "") {
      setTimeout(() => {
        axios
          .get(`${baseURL}/routine/${userId}`)
          .then(function (response) {
            setUserRoutine(response.data[0]);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            // Alert.alert("정보 가져오기 실패");
          });
      }, 100);
    }
  }, [userId]);

  return (
    <LinearGradient
      start={{ x: 0.3, y: 0.1 }}
      end={{ x: 3.0, y: 1.0 }}
      locations={[0, 0.1]}
      colors={["#66d894", "#57bd70"]}
      style={styles.container}
    >
      <View style={styles.logoBox}>
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
              textStyle={{
                fontSize: 30,
                fontWeight: "800",
                color: "#202020",
                fontFamily: "nanum",
              }}
              text={`${userName}님,`}
            />
            <HighlightText
              isFixed
              underlineSize={10}
              underlineColor="#66CC99"
              textStyle={{
                fontSize: 30,
                fontWeight: "800",
                color: "#202020",
                fontFamily: "nanum",
              }}
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
            <Text style={{ color: "#66CC99", fontFamily: "nanum" }}>
              {userName}
            </Text>
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
    </LinearGradient>
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
    boxShadow: "5px 10px 10px rgba(223, 223, 223, 0.25)",
  },
  routinText: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "nanum",
  },
  routinListBox: {
    marginTop: "5%",
    // height: "80%",
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#F8F8F8",
    boxShadow: "0px 4px 4px rgba(205, 205, 205, 0.25)",
    borderRadius: "10",
    padding: "7% 9% 7% 9%",
  },
});

const RoutinListText = styled.Text`
  color: black;
  font-weight: 600;
  margin: 5px 0px 5px 0px;
  :not(:last-child) {
    margin-bottom: 20;
  }
  font-family: "nanum";
`;
