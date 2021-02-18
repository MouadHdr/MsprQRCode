import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import StackNavigator from "./routes/StackNavigator";

export default function App() {
  return (
      <StackNavigator />
  );
}