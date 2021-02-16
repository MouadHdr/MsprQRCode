import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TestHomeView from "./TestHomeView";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TestHomeView" component={TestHomeView} />
    </Stack.Navigator>
    
  );
}