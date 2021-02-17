import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TestHome from "./src/Pages/TestHome";
import TestPage from "./src/Pages/TestPage";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TestHome" component={TestHome} />
      <Stack.Screen name="TestPage" component={TestPage} />
    </Stack.Navigator>
  );
}