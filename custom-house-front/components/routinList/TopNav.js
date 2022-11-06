import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RoutinList from "./RoutinList";
import "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function TopNav() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Age">
      <Tab.Screen
        name="Age"
        component={Age}
      />
      <Tab.Screen
        name="Gender"
        component={Gender}
      />
      <Tab.Screen
        name="Household"
        component={Household}
      />
    </Tab.Navigator>
  );
}
