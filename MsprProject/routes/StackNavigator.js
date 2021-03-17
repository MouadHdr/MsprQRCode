import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeView from "../Pages/HomeView";
import ScanView from "../Pages/ScanView";
import CurrentPromoView from "../Pages/CurrentPromoView";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName="HomeView">

        <Stack.Screen name="HomeView" component={HomeView} />
        <Stack.Screen name="ScanView" component={ScanView} />
        <Stack.Screen name="CurrentPromoView" component={CurrentPromoView} />

      </Stack.Navigator>
  );
}
