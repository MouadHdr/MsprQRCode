import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from "react-native";


export default function ScanView() {
  return (
    <View style={styles.wrapper} className="wrapper">
    <View className="container">
      <View
        style={styles.containerLogoGoStyle}
        className="container-logoGoStyle"
      >
        <Image
          style={styles.logoGoStyle}
          source={require("../assets/logo_gostyle.png")}
        />
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    bottom: 55,
  },
  containerLogoGoStyle: {
    alignItems: "center",
    top: 77,
  },

  logoGoStyle: {
    width: 287,
    height: 306,
  },
});