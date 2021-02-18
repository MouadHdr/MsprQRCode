import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TestHome from "../Pages/TestHome";
import TestPage from "../Pages/TestPage";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator initialRouteName="TestHome">
      <Stack.Screen name="TestHome" component={TestHome} />
      <Stack.Screen name="TestPage" component={TestPage} />
    </Stack.Navigator>
  );
}