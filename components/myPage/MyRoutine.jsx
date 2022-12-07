import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import Text from "../utils/text";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export default function MyRoutine({ navigation }) {
  const deleteRoutine = () => {
    Alert.alert("정말 삭제하시겠어요?");
  };
  return (
    <View style={styles.background}>
      <Ionicons
        onPress={() => navigation.goBack()}
        style={{ marginTop: 40, left: -10 }}
        name="ios-chevron-back-outline"
        size={24}
        color="black"
      />
      <Title>적용중인 루틴</Title>
      <ExpBox>
        <ExpText>삭제를 하면 더 이상 루틴을 사용할 수 없어요!</ExpText>
      </ExpBox>
      <RoutineBox>
        <View>
          <RoutineName>루틴 이름</RoutineName>
          <RoutineDetail>루틴 설명</RoutineDetail>
          <RoutineDetail>루틴 설명</RoutineDetail>
        </View>
        <Ionicons
          onPress={() => deleteRoutine()}
          // style={{ marginTop: 40, left: -10 }}
          name="ios-trash-sharp"
          size={24}
          color="#3b3b3b"
        />
      </RoutineBox>
      <RoutineBox>
        <View>
          <RoutineName>루틴 이름</RoutineName>
          <RoutineDetail>루틴 설명</RoutineDetail>
          <RoutineDetail>루틴 설명</RoutineDetail>
        </View>
        <Ionicons
          onPress={() => deleteRoutine()}
          // style={{ marginTop: 40, left: -10 }}
          name="ios-trash-sharp"
          size={24}
          color="#3b3b3b"
        />
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
  flex-direction: row;
  background-color: #e6e6e6;
  height: 120px;
  width: 100%;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 20px; */
  margin-top: 20px;
  border-radius: 18px;
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

const Title = styled.Text`
  font-family: "nanum";
  font-size: 20px;
  align-self: center;
  top: -20px;
`;

const ExpBox = styled.View`
  background-color: #d1e8dc;
  border: 2px solid #4cca8b;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
`;

const ExpText = styled.Text`
  font-family: "nanum";
  color: #494949;
`;
// const Setting = styled.TouchableOpacity`
//   background-color: red;
// `;
