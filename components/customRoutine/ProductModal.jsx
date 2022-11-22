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

  const pickDatas = (func) => {
    switch (func) {
      case "세탁 모드":
        return ["표준", "울코스"];
      case "바람 세기":
        return ["강", "중", "약"];
      case "화력 설정":
        return ["강", "중", "약"];
      case "작동 시간":
        return ["10분", "20분", "30분", "1시간"];
      case "건조 모드":
        return ["이불", "신발"];
      case "헹굼 횟수":
        return [1, 2, 3, 4, 5];
      case "탈수 강도":
        return [1, 2, 3, 4, 5];
      case "물 온도":
        return [10, 20, 30];
      case "희망 온도": //에어컨
        return [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
      case "온도 설정": //광파오븐
        return [120, 140, 160, 180, 200];
      case "타이머 설정":
        return [10, 20, 30];
      default:
        return ["ON", "OFF"];
    }
  };

  const pickDefault = (func) => {
    switch (func) {
      case "작동 시간":
        return "시간 설정";
      case "바람 세기":
        return "세기 설정";
      case "화력 설정":
        return "설정";
      case "세탁 모드":
        return "모드 설정";
      case "건조 모드":
        return "모드 설정";
      case "헹굼 횟수":
        return "횟수 설정";
      case "탈수 강도":
        return "강도 설정";
      case "물 온도":
        return "온도 설정";
      case "희망 온도":
        return "온도 설정";
      case "온도 설정": //광파오븐
        return "온도 설정";
      case "타이머 설정":
        return "설정";
      default:
        return "ON/OFF";
    }
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
            funcs === "보관 여부" ||
            funcs === "세탁 모드" ||
            funcs === "헹굼 횟수" ||
            funcs === "탈수 강도" ||
            funcs === "물 온도" ||
            funcs === "건조 모드" ||
            funcs === "작동 시간" ||
            funcs === "바람 세기" ||
            funcs === "희망 온도" ||
            funcs === "온도 설정" ||
            funcs === "화력 설정" ||
            funcs === "타이머 설정" ? (
              <SelectDropdown
                data={pickDatas(funcs)}
                defaultButtonText={pickDefault(funcs)}
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
  align-content: center;
  padding: 40px 40px 40px 40px;
`;

const ProdImage = styled.Image`
  width: 200px;
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
