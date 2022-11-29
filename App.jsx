import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/login/Login.jsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import TabNav from "./components/TabNav.jsx";
import CustomRoutine from "./components/customRoutine/CustomRoutine.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import { RecoilRoot } from "recoil";
import Loading from "./Loading.jsx";
import * as Font from "expo-font";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontLoad, setFontLoad] = useState(false);
  const [appIsReady, setAppIsReady] = useState(true);

  useEffect(() => {
    const Load = async () => {
      await Font.loadAsync({
        nanum: require("./assets/fonts/NanumSquareRoundR.ttf"),
        // test: require("./assets/fonts/UhBeeSehyun.ttf"),
      });
      setFontLoad(true);
    };
    Load();
    // 1,000가 1초
    setTimeout(() => {
      setAppIsReady(false);
    }, 3000);
  }, []);

  if (appIsReady) {
    return <Loading />;
  } else if (fontLoad && appIsReady == false) {
    return (
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              options={{ headerShown: false, animationEnabled: false }}
              name="Login"
              screenOptions={{
                gestureEnabled: false, //뒤로 가기 막기
              }}
              component={Login}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                animationEnabled: false,
                gestureEnabled: false,
              }}
              name="Tab"
              component={TabNav}
            />
            <Stack.Screen
              options={{ headerShown: false, animationEnabled: false }}
              name="RoutineCustomize"
              component={CustomRoutine}
            />
            <Stack.Screen
              options={{ headerShown: false, animationEnabled: false }}
              name="SignUp"
              component={SignUp}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    );
  }
}
