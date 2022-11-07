import Home from "./home/Home";
import TopNav from "./routineList/TopNav";
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
          headerShown: false,
          //   animationEnabled: false,
          tabBarActiveTinitColor: "black",
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ color: focused ? "black" : "white" }}
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
          title: "ROUTINE RECOMMENDATION",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 15,
          },
          headerShadowVisible: false, // applied here
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              style={{ color: focused ? "black" : "white" }}
              name="ios-document-text-outline"
              size={25}
            />
          ),
        }}
        component={TopNav}
      />
    </Tab.Navigator>
  );
}
