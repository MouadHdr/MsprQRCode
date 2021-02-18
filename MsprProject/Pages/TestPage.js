import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ({ navigation }) {
  
  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Text>TESTPAGE screen</Text>
      <Button onPress={goBack} title={`Go back`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "center",
  },
});