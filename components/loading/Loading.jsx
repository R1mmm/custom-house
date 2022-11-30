import { View, Text, Image } from "react-native";
import { splash } from "../../assets/index";
import React from "react";
import styled from "styled-components";

export default function Loading() {
  return (
    <StyledRoot>
      <SplashImage source={splash}></SplashImage>
    </StyledRoot>
  );
}

const StyledRoot = styled.View`
  background-color: #66cc99;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const SplashImage = styled.Image`
  height: 100%;
  width: 100%;
  align-self: center;
`;
