import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/login/Login.jsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import TabNav from "./components/TabNav.jsx";
import CustomRoutine from "./components/customRoutine/CustomRoutine.jsx";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
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
          options={{ headerShown: false, animationEnabled: false }}
          name="Tab"
          component={TabNav}
        />
        <Stack.Screen
          options={{ headerShown: false, animationEnabled: false }}
          name="RoutineCustomize"
          component={CustomRoutine}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
