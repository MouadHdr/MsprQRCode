import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import ButtonScan from "../Components/ButtonScan";
import ButtonCurrentPromo from "../Components/ButtonCurrentPromo";

export default function HomeView() {
  return (
    <View style={styles.wrapper} className="wrapper">
      <View className="container">
        <View style={styles.containerLogoGoStyle} className="container-logoGoStyle">
          <Image
            style={styles.logoGoStyle}
            source={require("../assets/logo_gostyle.png")}
          />
        </View>

        <View style={styles.ButtonsInput} className="container-buttons">
          <View style={styles.buttonItem1} className="item-button">
            <ButtonScan />
          </View>
          <View style={styles.buttonItem2} className="item-button">
            <ButtonCurrentPromo />
          </View>
        </View>
      </View>
      
      <Text style={styles.footer}>
        Copyright 2020-2021 EPSI, Hammouti, Hadirasso. 
      </Text>
      <Text style={styles.footer}>Tous droits réservés.</Text>
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

  ButtonsInput: {
    display: "flex",
    alignItems: "center",
    top: 30,
  },

  buttonItem2: {
    top: 25,
  },

  footer: {
    display: "flex",
    alignItems: "flex-end",
    top: "40%",
    textAlign: "center",
    fontSize: 10,
  },
});
