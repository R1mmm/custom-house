import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/login/Login.js";
import Home from "./components/home/Home.js";
import RoutinList from "./components/routinList/RoutinList.js";
import {
  createNativeStackNavigator,
  createStackNavigator,
} from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import TabNav from "./components/TabNav.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
// const new_Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
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
