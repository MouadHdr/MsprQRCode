import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function HomeView() {
  return (
    <View className="wrapper">
      <View className="container">

        <View style={styles.containerLogoGoStyle} className="container-logoGoStyle">
          <Image style={styles.logoGoStyle} source={require("../assets/logo_gostyle.png")} />
        </View>

        <View className="container-buttons">
            {/* <Button1> */}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogoGoStyle: {
    alignItems: "center",
    top: 77,
  },

  logoGoStyle: {
    width: 287,
    height: 306,
  },
});
