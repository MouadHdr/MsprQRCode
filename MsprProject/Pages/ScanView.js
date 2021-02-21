import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Dimensions } from "react-native";

import ButtonGoBack from '../components/ButtonGoBack'

const { width } = Dimensions.get("window");
const qrSize = width * 0.7;

export default function ScanView() {
/////Code for the Permissions to enable the Camera !!
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
/////ScanView Display with the Camera and complete design of this view !!
    <View style={ { flex: 1, flexDirection: "column", justifyContent: "flex-end" } }>

        {/* LOGO GOSTYLE */}
      <View style={ styles.containerLogoGoStyle } className="container-logoGoStyle">
          <Image style={ styles.logoGoStyle } source={ require("../assets/logo_gostyle.png") }/>
      </View>

      <BarCodeScanner onBarCodeScanned={ scanned ? undefined : handleBarCodeScanned } style={[ StyleSheet.absoluteFillObject, styles.container] }>
        <Image style={ styles.imgRadius } source={ require("../assets/imgScanner2.png") }/>
        <View style={ styles.borderVector }></View>
        <View style={ styles.layerTop } />
        <View style={ styles.layerCenter }>
        <ButtonGoBack />

        { scanned && (
            <View style={ styles.containerDescription }>
                <Text style={ styles.descriptionScanned }>Appuyez sur le bouton pour Scanner à nouveau</Text>
            </View>
            )
         }
          <View style={ styles.layerLeft } />
          <View style={ styles.focused } />
          <View style={ styles.layerRight } />
        </View>
        <View style={ styles.layerBottom } />
      </BarCodeScanner>
      { scanned && (
        <View style={ styles.containerButton }>
          <TouchableOpacity onPress={ () => setScanned(false) }>
            <View style={ styles.button }>
              <View style={ styles.containerImg }>
                <Image style={ styles.imgButton } source={ require("../assets/icon_play_scan.png") }/>
              </View>
            </View>
          </TouchableOpacity>
          <ButtonGoBack />
        </View>
      )}
    </View>
  );
}

const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },

  containerLogoGoStyle: {
    zIndex: 2,
    position: 'absolute',
    alignItems: "center",
    marginHorizontal:"40%",
    bottom: "80%",
  },

  logoGoStyle: {
    width: 100,
    height: 150,
  },

  imgRadius: {
    position: "absolute",
    height: "75%",
    width: "91%",
  },
  layerTop: {
    flex: 0.5,
    backgroundColor: "#fff",
  },
  layerCenter: {
    flex: 3,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 1,
    backgroundColor: "#fff",
  },
  focused: {
    flex: 10,
  },
  layerRight: {
    flex: 1,
    backgroundColor: "#fff",
  },
  layerBottom: {
    flex: 0.5,
    backgroundColor: "#fff",
  },

  borderVector: {
    flex: 3,
    position: "absolute",
    width: "87%",
    height: "72%",
    borderWidth: 15,
    borderColor: "#fff",
    borderRadius: 25,
  },

  containerButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    borderRadius: 60,
    height: 86,
    width: 87,
    marginBottom: 15,
    backgroundColor: "#591259",
    justifyContent: "center",
    position: "relative",
  },
  containerImg: {
    justifyContent: "center",
    alignItems: "center",
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

  containerDescription: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#591259',
    width: "100%",
    borderRadius: 300,
    top:"40%",
    borderWidth:5,
    borderColor:"#fff",
    
  },

  descriptionScanned: {
      alignItems: 'center',
      justifyContent: 'center',
      color:'#fff',
      width: "70%",
      textAlign:"center",
      fontSize:26,
      fontWeight:"bold"
  }

});
