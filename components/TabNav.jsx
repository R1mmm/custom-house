import Home from "./home/Home";
import TopNav from "./routineList/TopNav";
import CustomRoutineStart from "./customRoutine/CustomRoutineStart";
import MyPage from "./myPage/MyPage";
import React from "react";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function TabNav() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        style: { borderTopWidth: 0 },
        tabBarStyle: {
          backgroundColor: "#66CC99",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "홈",
          headerShown: false,
          //   animationEnabled: false,
          tabBarActiveTinitColor: "black",
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ color: focused ? "#085E33" : "white" }}
              name="ios-home"
              size={25}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Routine"
        options={{
          tabBarLabel: "루틴 추천",
          title: "ROUTINE RECOMMENDATION",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 15,
          },
          headerShadowVisible: false, // applied here
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ color: focused ? "#085E33" : "white" }}
              name="ios-document-text-outline"
              size={25}
            />
          ),
        }}
        component={TopNav}
      />
      <Tab.Screen
        name="CustomRoutine"
        options={{
          tabBarLabel: "루틴 추가",
          title: "CUSTOMIZE ROUTINE",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 15,
          },
          headerShadowVisible: false, // applied here
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ color: focused ? "#085E33" : "white" }}
              name="ios-add-circle-sharp"
              size={25}
            />
          ),
        }}
        component={CustomRoutineStart}
      />
      <Tab.Screen
        name="MyPage"
        options={{
          tabBarLabel: "마이페이지",
          title: "MY PAGE",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 15,
          },
          headerShadowVisible: false, // applied here
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ color: focused ? "#085E33" : "white" }}
              name="ios-person-sharp"
              size={25}
            />
          ),
        }}
        component={MyPage}
      />
    </Tab.Navigator>
  );
}
