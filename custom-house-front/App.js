import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/login/Login.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import TabNav from "./components/TabNav.js";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false, animationEnabled: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false, animationEnabled: false }}
          name="Tab"
          component={TabNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
