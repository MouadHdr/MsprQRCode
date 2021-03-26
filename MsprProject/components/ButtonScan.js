import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ButtonScan() {

  const navigation = useNavigation();
  const goToScanView = () => navigation.navigate("ScanView");

  return (
    <TouchableOpacity onPress={goToScanView}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Scannez le qr code</Text>
        <View style={styles.containerImg}>
          <Image
            style={styles.imgButton}
            source={require("../assets/icon_play_scan.png")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    borderRadius: 60,
    height: 85,
    width: 280,
    backgroundColor: "#591259",
    justifyContent: "center",
    position: "relative",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "left",
    left: 14,
  },

  containerImg: {
    backgroundColor: "white",
    color: "#fff",
    width: 77,
    height: 77,
    borderRadius: 60,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 5,
  },

  imgButton: {
    width: 58,
    height: 59,
    position: "absolute",
  },
});