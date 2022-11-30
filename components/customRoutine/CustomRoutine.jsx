import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";
import ProductData from "../utils/data.js";
import ProductModal from "./ProductModal";
import { prodList } from "../utils/atom";
import { useRecoilState } from "recoil";
import SelectDropdown from "react-native-select-dropdown";
import axios from "axios";
import Text from "../utils/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../../baseURL.js";

export default function CustomRoutine({ navigation }) {
  const [productsList, setProductsList] = useRecoilState(prodList);
  const [products, setProducts] = useState(new Object());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProd, setSelectedProd] = useState("");
  const [commandType, setCommandType] = useState("");
  const [command, setCommand] = useState(null);
  const [timer, setTimer] = useState(null);
  const [routineName, setRoutineName] = useState(null);
  const [userId, setUserId] = useState("");
  //유저 닉네임 불러오기
  AsyncStorage.getItem("user_id", (err, result) => {
    console.log(result); // User1 출력
    setUserId(result);
  });

  useEffect(() => {
    console.log(productsList);
  }, [productsList]);

  const addProducts = (product) => {
    const nameList = productsList?.map((product) => product.name); //name 키값으로 배열 만들기
    let new_obj = { name: product.name };
    product.funcKey?.map((funcs, index) => {
      new_obj[funcs] = null;
    });
    console.log(new_obj);
    if (nameList?.includes(product.name)) {
      const new_productList = productsList.filter((data) => {
        return data.name !== product.name ? true : false;
      });
      setProductsList(new_productList);
    } else {
      setProducts(new_obj);
      setIsModalVisible(true);
      setSelectedProd(product);
    }
  };

  const createCustomRtn = () => {
    const values = {
      userId: userId,
      routineName: routineName,
      keyword: command,
      time_Set: timer,
      appliance: productsList,
    };

    setTimeout(function () {
      axios
        .post(`${baseURL}/new-routine`, values)
        .then(function (response) {
          console.log(response);
          console.log(values);
          // navigation.navigate("Tab");
          Alert.alert("저장 완료~");
        })
        .catch(function (error) {
          console.log(error);
          Alert.alert("저장 실패~");
        });
    }, 100);
    console.log(values);
  };

  return (
    <ScrollView style={styles.container}>
      <ProductModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        product={selectedProd}
        prod_obj={products}
        setProductsList={setProductsList}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        style={{ marginTop: 30, left: -10 }}
        name="ios-chevron-back-outline"
        size={24}
        color="black"
      />
      <PageTitle>커스텀 루틴 만들기</PageTitle>
      <Line></Line>
      <Text style={styles.selectProd}>가전 제품 선택</Text>
      <View style={styles.productContainer}>
        {ProductData.map((product, index) => (
          <IconBox
            onPress={() => addProducts(product)}
            name={product.name}
            selected={productsList?.map((product) => product.name)}
            key={index}
          >
            <Image
              key={index}
              source={product.img}
              style={styles.productImg}
            ></Image>
          </IconBox>
        ))}
      </View>
      <MainBox>
        <SettingTitle>루틴 이름</SettingTitle>
        <SettingInput
          onChangeText={(text) => setRoutineName(text)}
        ></SettingInput>
      </MainBox>
      <MainBox>
        <SettingTitle>명령 유형</SettingTitle>
        <SelectDropdown
          data={["명령어", "시간"]}
          defaultButtonText="선택"
          buttonTextStyle={{
            color: "#4a4a4a",
            fontWeight: "600",
            fontSize: "15",
          }}
          buttonStyle={{
            width: 150,
            borderRadius: 20,
            fontSize: 18,
            marginLeft: 50,
            // alignSelf: "flex-start",
            alignSelf: "center",
            // marginBottom: 15,
            backgroundColor: "#f8f8f8",
            height: 40,
          }}
          onSelect={(selectedItem, idx) => {
            setCommandType(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </MainBox>
      {commandType == "명령어" && (
        <MainBox>
          <SettingTitle>명령어 설정</SettingTitle>
          <SettingInput
            onChangeText={(text) => setCommand(text)}
          ></SettingInput>
        </MainBox>
      )}
      {commandType == "시간" && (
        <MainBox>
          <SettingTitle>시간 설정</SettingTitle>
          <SettingInput onChangeText={(text) => setTimer(text)}></SettingInput>
        </MainBox>
      )}
      <Footer>
        <Line />
        <SubmitBtn onPress={createCustomRtn}>
          <SubmitText>루틴 생성하기</SubmitText>
        </SubmitBtn>
      </Footer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // justifyContent: "center",
    padding: 30,
    width: "100%",
    height: "100%",
  },
  selectProd: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: "700",
    color: "#464646",
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 15,
  },
  productImg: {
    height: 60,
    width: 60,
    alignSelf: "center",
  },
});

const IconBox = styled.TouchableOpacity`
  border-radius: 70rem;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
  margin-bottom: 10px;
  margin-top: 10px;

  ${({ name, selected }) =>
    selected.includes(name) &&
    css`
      border: 3px solid #66cc99;
    `}
`;

const SettingTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #464646;
  font-family: "nanum";

  /* margin-top: 15px; */
  width: 100px;
  /* align-self: center; */
`;

const SettingInput = styled.TextInput`
  font-size: 15px;
  font-weight: bold;
  /* margin-top: 15px; */
  border-radius: 10px;
  border: 1.6px solid #e5e5e5;
  width: 200px;
  height: 40px;
  padding: 8px;
`;

const SubmitBtn = styled.TouchableOpacity`
  width: 300px;
  height: 45px;
  background-color: #66cc99;
  margin-top: 20px;
  /* margin-bottom: 150px; */
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;
const SubmitText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  font-family: "nanum";
`;

const MainBox = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  /* border: 1px solid black; */
  /* padding: 15px; */
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 10px;
`;

const PageTitle = styled.Text`
  font-size: 25px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #262626;
  font-family: "nanum";
`;

const Footer = styled.View`
  height: 120px;
  top: 620px;
  position: absolute;
  justify-content: flex-end;
  display: flex;
`;
