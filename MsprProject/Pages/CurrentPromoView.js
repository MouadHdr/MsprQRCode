import React from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";

import ButtonGoBack from "../Components/ButtonGoBack";

const { width, height } = Dimensions.get("window");

export default function CurrentPromoView() {
  
  return (
    <SafeAreaView>
      <Text>PAGE PROMO !</Text>
      <View style={styles.containerButtonGoBack}>
        <View style={styles.ButtonGoBack}>
          <ButtonGoBack />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  containerButtonGoBack: {
    position: 'absolute',
    zIndex: 10000,
    width: width/6,
    height: height/10,
    top: height-355,
    right:width-80,
    marginTop: 290,
    left:35,
  },

  ButtonGoBack: {
    zIndex: 10000,
    width: width,
    height: height,
  },

});
