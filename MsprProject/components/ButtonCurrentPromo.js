import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import {useNavigation} from '@react-navigation/native';


export default function ButtonInputScan() {
const navigation = useNavigation();
  return (
            <TouchableOpacity
              title="go Details"
              onPress={() => navigation.navigate("CurrentPromo")}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Bons plans</Text>
                <View style={styles.containerImg}>
                  <Image
                    style={styles.imgButton}
                    source={require("../assets/logoReduction.png")}
                  />
                </View>
              </View>
            </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 60,
      height: 85,
      width: 280,
      backgroundColor: "#591259",
      justifyContent: "center",
      position:"relative"
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: 16,
      left: '20%',
    },
    containerImg:{
      backgroundColor:"white",
      color:"#fff",
      width: 77,
      height: 77,
      borderRadius:60,
      position: "absolute",
      justifyContent:"center",
      alignItems: 'center',
      right:5,
    },
    imgButton: {
      width: 58,
      height: 59,
      position: "absolute",
    },
  });