import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "../utils/text";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export default function MyRoutine({ navigation }) {
  return (
    <View style={styles.background}>
      <Ionicons
        onPress={() => navigation.goBack()}
        style={{ marginTop: 40, left: -10 }}
        name="ios-chevron-back-outline"
        size={24}
        color="black"
      />
      <DelBtn>
        <Text
          style={{ alignSelf: "flex-end", marginBottom: 20, marginRight: 15 }}
        >
          관리
        </Text>
      </DelBtn>
      <RoutineBox>
        <RoutineName>루틴 이름</RoutineName>
        <RoutineDetail>루틴 설명</RoutineDetail>
        <RoutineDetail>루틴 설명</RoutineDetail>
      </RoutineBox>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    fontFamily: "nanum",
    padding: 40,
  },
});

const RoutineBox = styled.View`
  background-color: #e6e6e6;
  height: 120px;
  width: 100%;
  padding: 30px;
  justify-content: "space-around";
  border-radius: 18;
`;

const RoutineName = styled.Text`
  font-family: "nanum";
  font-size: 17px;
  margin-bottom: 10px;
`;

const RoutineDetail = styled.Text`
  font-family: "nanum";
`;

const DelBtn = styled.View`
  /* background-color: gray; */
`;
