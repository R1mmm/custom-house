import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import RoutineModal from "./RoutineModal";
import Text from "../utils/text";
import React, { useState } from "react";
import testImage from "../../assets/test_image.png";
import RecData from "../utils/recData";

export default function Age() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState();

  return (
    <>
      <RoutineModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        modalContent={modalContent}
      />
      <View style={styles.container}>
        <Text style={styles.titleText}>
          <Text style={{ color: "#66CC99" }}>김엘지</Text>
          님을 위한 추천 루틴
        </Text>
        <ScrollView style={styles.routines}>
          {RecData &&
            RecData.map((item, index) => (
              <TouchableOpacity
                style={styles.routineBox}
                onPress={() => {
                  setIsModalVisible(true);
                  setModalContent(item);
                }}
              >
                <View style={styles.routineIntro}>
                  <View style={styles.routineTitle}>
                    <Text style={styles.routineTitleText}>{item.name}</Text>
                  </View>
                  <Text style={styles.routineDesc}>{item.detail}</Text>
                </View>
                <Image
                  source={testImage}
                  style={styles.image}
                ></Image>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    paddingTop: "5%",
    padding: "10%",
  },
  titleText: {
    fontWeight: "700",
    fontSize: "15",
  },
  routines: {
    marginTop: "10%",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  routineBox: {
    width: "100%",
    height: 100,
    backgroundColor: "#EDEDED",
    borderRadius: "15px",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: "5%",
    marginBottom: "15%",
  },
  routineIntro: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
  routineTitle: {
    backgroundColor: "#66CC99",
    borderRadius: "20px",
    alignSelf: "flex-start",
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 2,
    paddingTop: 2,
    marginBottom: 10,
  },
  routineTitleText: {
    fontWeight: "700",
    fontSize: "17",
  },
  routineDesc: {
    fontWeight: "700",
    fontSize: "13",
    marginLeft: 3,
    color: "gray",
  },
  image: {
    width: 100,
    height: 100,
  },
});
