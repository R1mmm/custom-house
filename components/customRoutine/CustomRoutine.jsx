import {
  View,
  Text,
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
import ProductData from "../data";
import ProductModal from "./ProductModal";
import { prodList } from "../atom";
import { useRecoilState } from "recoil";
import SelectDropdown from "react-native-select-dropdown";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
        .post("https://812d-218-235-241-52.jp.ngrok.io/new-routine", values)
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
      <SettingTitle>루틴 이름 설정</SettingTitle>
      <SettingInput
        onChangeText={(text) => setRoutineName(text)}
      ></SettingInput>
      <SettingTitle>명령 유형 선택</SettingTitle>
      <SelectDropdown
        data={["명령어", "시간"]}
        defaultButtonText="선택"
        buttonTextStyle={{
          color: "#30a874",
          fontWeight: "600",
        }}
        buttonStyle={{
          borderRadius: 10,
          fontSize: 18,
          alignSelf: "flex-start",
          marginTop: 15,
          backgroundColor: "#f3f3f3",
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
      {commandType == "명령어" ? (
        <>
          <SettingTitle>명령어 설정</SettingTitle>
          <SettingInput
            onChangeText={(text) => setCommand(text)}
          ></SettingInput>
        </>
      ) : (
        <>
          <SettingTitle>시간 설정</SettingTitle>
          <SettingInput onChangeText={(text) => setTimer(text)}></SettingInput>
        </>
      )}
      <SubmitBtn onPress={createCustomRtn}>
        <SubmitText>루틴 생성하기</SubmitText>
      </SubmitBtn>
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
    marginTop: 100,
    fontSize: 15,
    fontWeight: "700",
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
  margin-top: 15px;
`;

const SettingInput = styled.TextInput`
  font-size: 15px;
  font-weight: bold;
  margin-top: 15px;
  width: 200px;
  border: 2px solid #cecece;
  border-radius: 10px;
  padding: 10px;
`;

const SubmitBtn = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  background-color: #daeae2;
  margin-top: 50px;
  margin-bottom: 150px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
const SubmitText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #474747;
`;
