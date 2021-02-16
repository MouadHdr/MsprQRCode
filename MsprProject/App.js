import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeView from "./src/pages/HomeView";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeView />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C1BCC3",
  },
});
