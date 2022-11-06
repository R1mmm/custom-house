import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RoutinList from "./RoutinList";
import Age from "./Age";
import Gender from "./Gender";
import Household from "./Household";
// import "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function TopNav() {
  const New_Tab = createMaterialTopTabNavigator();
  return (
    // <></>
    <New_Tab.Navigator initialRouteName="Age">
      <New_Tab.Screen
        name="Age"
        component={Age}
      />
      <New_Tab.Screen
        name="Gender"
        component={Gender}
      />
      <New_Tab.Screen
        name="Household"
        component={Household}
      />
    </New_Tab.Navigator>
  );
}
