import Home from "./home/Home";
import TopNav from "./routineList/TopNav";
import CustomRoutineStart from "./customRoutine/CustomRoutineStart";
import MyPage from "./myPage/MyPage";
import React from "react";
import { Text } from "react-native";
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
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "홈",
          headerShown: false,
          //   animationEnabled: false,
          tabBarActiveTinitColor: "black",
          // tabBarLabelStyle: { color: "white" },
          // tabBarLabelStyle: { color: "black", fontWeight: "bold" },
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "#66CC99" : "#646464",
                fontWeight: "bold",
                fontSize: "10",
              }}
            >
              홈
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ color: focused ? "#66CC99" : "#646464" }}
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
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "#66CC99" : "#646464",
                fontWeight: "bold",
                fontSize: "10",
              }}
            >
              루틴추천
            </Text>
          ),

          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ color: focused ? "#66CC99" : "#646464" }}
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
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "#66CC99" : "#646464",
                fontWeight: "bold",
                fontSize: "10",
              }}
            >
              루틴 추가
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ color: focused ? "#66CC99" : "#646464" }}
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
          label: "#66CC99",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 15,
          },
          headerShadowVisible: false, // applied here
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "#66CC99" : "#646464",
                fontWeight: "bold",
                fontSize: "10",
              }}
            >
              마이페이지
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ color: focused ? "#66CC99" : "#646464" }}
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
