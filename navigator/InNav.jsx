import React, { useRef } from "react";
import { Animated, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components";
import Layout from "../components/Layout";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import Setting from "../screens/setting";
import Calendar from "../screens/Calendar";
import List from "../screens/List";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();

const InNav = () => {
  return (
    // <Layout>
    <Tab.Navigator shifting={true} barStyle={{ backgroundColor: "#414a52" }} activeColor="#f0edf6">
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <MaterialCommunityIcons name="view-dashboard-outline" size={24} color="black" /> }} />
      <Tab.Screen name="캘린더" component={Calendar} options={{ tabBarIcon: () => <MaterialCommunityIcons name="calendar-check" size={24} color="black" /> }} />
      <Tab.Screen name="리스트" component={List} options={{ tabBarIcon: () => <MaterialCommunityIcons name="format-list-bulleted" size={24} color="black" /> }} />
      <Tab.Screen name="Setting" component={Setting} options={{ tabBarIcon: () => <Octicons name="gear" size={24} color="black" /> }} />
    </Tab.Navigator>
    // </Layout>
  );
};

export default InNav;
