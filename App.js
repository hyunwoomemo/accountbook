import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import InNav from "./navigator/InNav";
import OutNav from "./navigator/OutNav";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [login, setLogin] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>{login ? <Stack.Screen name="InNav" component={InNav} /> : <Stack.Screen name="OutNav" component={OutNav} />}</Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
