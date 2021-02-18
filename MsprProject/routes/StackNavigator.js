import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "../Pages/HomeView";
import ScanView from "../Pages/ScanView";
import CurrentPromoView from "../Pages/CurrentPromoView";

import { SafeAreaView } from "react-native";

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}
        initialRouteName="Home"
      >

        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Scan" component={ScanView} />
        <Stack.Screen name="CurrentPromo" component={CurrentPromoView} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createStackNavigator();
