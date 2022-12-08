import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Text from "../utils/text";
import styled from "styled-components";
import baseURL from "../../baseURL";
import axios from "axios";
import RoutineModal from "./RoutineModal";

export default function HotRoutine() {
  const [trendingRoutines, setTrendingRoutines] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState();

  const getRoutines = async () => {
    await axios
      .get(`${baseURL}/trending-routines`)
      .then((response) => {
        setTrendingRoutines(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getRoutines();
  }, []);
  return (
    <>
      <RoutineModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        modalContent={modalContent}
      />
      <Root>
        {trendingRoutines &&
          trendingRoutines.map((routine, index) => (
            <RoutineBox onPress={() => setIsModalVisible(true)}>
              <Text style={styles.number}>{index + 1}</Text>
              <RoutineTitle>
                <Text style={{ fontSize: "16" }}>{routine.routineName}</Text>
                <RoutinePodcs>
                  {routine.appliance.map((prod, index) => (
                    <View style={styles.routineProd}>
                      <Text style={{ color: "white", fontSize: "10" }}>
                        {prod.name}
                      </Text>
                    </View>
                  ))}
                </RoutinePodcs>
              </RoutineTitle>
              <RoutineUser>
                <Text style={{ fontSize: "12" }}>by {routine.userName}</Text>
                <Text style={{ fontSize: "12" }}>
                  {routine.numberOfDownload}
                </Text>
              </RoutineUser>
            </RoutineBox>
          ))}
      </Root>
    </>
  );
}

const Root = styled.View`
  height: 100%;
  background-color: white;
`;

const RoutineBox = styled.TouchableOpacity`
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
  width: 100px;
`;

const RoutinePodcs = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 7px;
`;

const RoutineUser = styled.View`
  display: flex;
  width: 80px;
  height: 60px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(210, 223, 217, 0.2);
  border: 2px solid #d2dfd9;
  border-radius: 20px;
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
