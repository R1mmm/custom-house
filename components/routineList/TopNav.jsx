import React, { useState } from "react";
import Age from "./Age";
import Gender from "./Gender";
import Household from "./Household";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function TopNav() {
  const New_Tab = createMaterialTopTabNavigator();
  return (
    <New_Tab.Navigator
      initialRouteName="Age"
      screenOptions={{
        headerHideShadow: true,
        headerShadowVisible: false, // applied here
        shadowOffset: 0,
        tabBarIndicatorStyle: { backgroundColor: "black" },
        tabBarStyle: { borderTopWidth: 0 },
        tabBarActiveTintColor: "#000000",
      }}
      tabBarStyle={{
        elevation: 0, // for Android
        shadowOffset: {
          width: 0,
          height: 0, // for iOS
        },
        backgroundColor: "#66CC99",
      }}
    >
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
