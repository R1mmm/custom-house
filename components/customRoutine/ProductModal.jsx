import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import styled, { css } from "styled-components/native";
import { prodList } from "../atom";
import { useRecoilState } from "recoil";

const power = ["ON", "OFF"];

export default function ProductModal({
  setIsModalVisible,
  isModalVisible,
  product,
  prod_obj,
  setProducts,
}) {
  const [prodObj, setProdObj] = useState(prod_obj);
  const [productsList, setProductsList] = useRecoilState(prodList);

  const handleChange = (selectedItem, idx) => {
    setProdObj((prev) => {
      let newTestList = { ...prev };
      newTestList[product.funcKey[idx]] = selectedItem;
      return newTestList;
    });
  };

  const setDetail = (text, idx) => {
    setProdObj((current) => {
      let newTestList = { ...current };
      newTestList[product.funcKey[idx]] = text;
      return newTestList;
    });
  };

  useEffect(() => {
    // console.log(prodObj);
  }, [handleChange, setDetail, productsList, prod_obj]);

  useEffect(() => {
    setProdObj(prod_obj);
  }, [prod_obj]);

  const settingComplete = () => {
    console.log(productsList);

    const new_obj = [...productsList, prodObj];
    setProductsList(new_obj);
    setIsModalVisible(false);
  };

  return (
    <Modal
      animationType={"slide"}
      presentationStyle="pageSheet"
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}
    >
      <Contianer>
        <ProdImage source={product.img}></ProdImage>
        <ProdTitleBox>
          <ProdTitle>{product.krName} 작동 설정</ProdTitle>
        </ProdTitleBox>
        {product.func?.map((funcs, index) => (
          <>
            <ProdFunc key={index}>{funcs}</ProdFunc>
            {funcs === "전원 ON/OFF" ||
            funcs === "브리핑" ||
            funcs === "화구 ON/OFF" ||
            funcs === "절약 건조" ||
            funcs === "구김방지여부" ||
            funcs === "보관 여부" ? (
              <SelectDropdown
                data={power}
                defaultButtonText="ON/OFF"
                buttonTextStyle={{
                  color: "#30a874",
                  fontWeight: "600",
                }}
                buttonStyle={{
                  borderRadius: 10,
                  fontSize: 18,
                  alignSelf: "flex-start",
                  marginBottom: 15,
                  backgroundColor: "#f3f3f3",
                  height: 40,
                }}
                onSelect={(selectedItem, idx) => {
                  handleChange(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            ) : (
              <InputBox
                placeholder="원하는 숫자를 입력하세요"
                keyboardType="numeric"
                onChangeText={(text) => setDetail(text, index)}
              />
            )}
          </>
        ))}
        <SubmitBtn onPress={settingComplete}>
          <SubmitText>설정 완료</SubmitText>
        </SubmitBtn>
      </Contianer>
    </Modal>
  );
}

const Contianer = styled.ScrollView`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* justify-content: center; */
  /* align-items: center; */
  align-content: center;
  /* overflow: scroll; */
  padding: 40px 40px 40px 40px;
`;

const ProdImage = styled.Image`
  width: 100px;
  height: 200px;
  align-self: center;
`;

const ProdTitleBox = styled.View`
  background-color: #daeae2;
  border-radius: 20px;
  width: 200px;
  height: 40px;
  align-self: center;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProdTitle = styled.Text`
  font-size: 20rem;
  font-weight: bold;
`;

const ProdFunc = styled.Text`
  font-size: 15rem;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 20px;
`;

const InputBox = styled.TextInput`
  font-size: 15rem;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #dedede;
  width: 200px;
  height: 40px;
  padding: 8px;
`;

const SubmitBtn = styled.TouchableOpacity`
  width: 200px;
  height: 40px;
  background-color: #daeae2;
  margin-top: 20px;
  margin-bottom: 150px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const SubmitText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  /* color: gray; */
`;
