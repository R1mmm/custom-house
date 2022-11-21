import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";
import ProductData from "../data";
import ProductModal from "./ProductModal";
import { prodList } from "../atom";
import { useRecoilState } from "recoil";
import SelectDropdown from "react-native-select-dropdown";

export default function CustomRoutine({ navigation }) {
  const [productsList, setProductsList] = useRecoilState(prodList);
  const [products, setProducts] = useState(new Object());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProd, setSelectedProd] = useState("");
  const [commandType, setCommandType] = useState("");

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

  return (
    <View style={styles.container}>
      <ProductModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        product={selectedProd}
        prod_obj={products}
        setProductsList={setProductsList}
      />
      <Text style={styles.title}>가전 제품 선택</Text>
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
      <Text style={styles.title}>명령 유형 선택</Text>
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
        <Text>명령어 설정</Text>
      ) : (
        <Text>시간 설정</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    padding: 30,
    width: "100%",
    height: "100%",
  },
  title: {
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
