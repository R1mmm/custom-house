import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../utils/text";
import styled from "styled-components";

export default function HotRoutine() {
  return (
    <Root>
      <RoutineBox>
        <Text style={styles.number}>1</Text>
        <RoutineTitle>
          <Text style={{ fontSize: "16" }}>방해되는 요소 차단</Text>
          <RoutinePodcs>
            <View style={styles.routineProd}>
              <Text style={{ color: "white", fontSize: "10" }}>티비</Text>
            </View>
            <View style={styles.routineProd}>
              <Text style={{ color: "white", fontSize: "10" }}>에어컨</Text>
            </View>
            <View style={styles.routineProd}>
              <Text style={{ color: "white", fontSize: "10" }}>라디오</Text>
            </View>
          </RoutinePodcs>
        </RoutineTitle>
        <RoutineUser>
          <Text style={{ fontSize: "12" }}>by 조소연</Text>
          <Text style={{ fontSize: "12" }}>1021</Text>
        </RoutineUser>
      </RoutineBox>
      <RoutineBox>
        <Text style={styles.number}>2</Text>
        <RoutineTitle>
          <Text style={{ fontSize: "16" }}>방해되는 요소 차단</Text>
          <RoutinePodcs>
            <View style={styles.routineProd}>
              <Text style={{ color: "white", fontSize: "10" }}>티비</Text>
            </View>
            <View style={styles.routineProd}>
              <Text style={{ color: "white", fontSize: "10" }}>에어컨</Text>
            </View>
            <View style={styles.routineProd}>
              <Text style={{ color: "white", fontSize: "10" }}>라디오</Text>
            </View>
          </RoutinePodcs>
        </RoutineTitle>
        <RoutineUser>
          <Text style={{ fontSize: "12" }}>by 조소연</Text>
          <Text style={{ fontSize: "12" }}>1021</Text>
        </RoutineUser>
      </RoutineBox>
      <RoutineBox>
        <Text style={styles.number}>3</Text>
        <RoutineTitle>
          <Text style={{ fontSize: "16" }}>방해되는 요소 차단</Text>
          <RoutinePodcs>
            <View style={styles.routineProd}>
              <Text style={{ color: "white", fontSize: "10" }}>티비</Text>
            </View>
            <View style={styles.routineProd}>
              <Text style={{ color: "white", fontSize: "10" }}>에어컨</Text>
            </View>
            <View style={styles.routineProd}>
              <Text style={{ color: "white", fontSize: "10" }}>라디오</Text>
            </View>
          </RoutinePodcs>
        </RoutineTitle>
        <RoutineUser>
          <Text style={{ fontSize: "12" }}>by 조소연</Text>
          <Text style={{ fontSize: "12" }}>1021</Text>
        </RoutineUser>
      </RoutineBox>
    </Root>
  );
}

const Root = styled.View`
  height: 100%;
  background-color: white;
`;

const RoutineBox = styled.View`
  height: 15%;
  margin-left: 20px;
  margin-right: 20px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* border-bottom: 1px solid gray; */
  border-bottom-color: #ebebeb;
  border-bottom-width: 1px;
`;

const RoutineTitle = styled.View`
  /* background-color: #4c9b62; */
  display: flex;
  flex-direction: column;
`;

const RoutinePodcs = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 7px;
`;

const RoutineUser = styled.View`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(210, 223, 217, 0.2);
  border: 2px solid #d2dfd9;
  border-radius: 13px;
`;

const styles = StyleSheet.create({
  number: {
    color: "#66CC99",
    // fontFamily: "arial",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
    top: 16,
  },
  routineProd: {
    padding: 7,
    backgroundColor: "#66CC99",
    borderRadius: 15,
    marginRight: 10,
  },
});
