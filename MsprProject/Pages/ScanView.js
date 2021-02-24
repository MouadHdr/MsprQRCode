import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Dimensions } from "react-native";

import ButtonGoBack from '../Components/ButtonGoBack'

const { width, height } = Dimensions.get("window");

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

    <View style={styles.containerButtonGoBack} > 
        <View style={styles.ButtonGoBack}>
            <ButtonGoBack />
        </View>
    </View>

    <View style={styles.containerContouring}>
      <Image style={styles.contouring} source={require("../assets/contouring.png")} />
    </View>

    <BarCodeScanner onBarCodeScanned={ scanned ? undefined : handleBarCodeScanned } style={[ StyleSheet.absoluteFillObject, styles.container] }>
      <View style={styles.layerTop} />

      <View style={styles.layerCenter}>
        <View style={styles.layerLeft} />
        <View style={styles.focused} />
        <View style={styles.layerRight} />
        { scanned && (
          <View style={ styles.containerDescription }>
              <Text style={ styles.descriptionScanned }>Appuyez sur le bouton pour Scanner à nouveau</Text>
          </View>
          )
        }
      </View>  

      <View style={styles.layerBottom} />
    </BarCodeScanner>

      {/* When the Qr is scanned, Display of the buttonScan to try again a new Scan */}

      { scanned && (
        <View style={ styles.containerButton }>
          <TouchableOpacity onPress={ () => setScanned(false) }>
            <View style={ styles.button }>
              <View style={ styles.containerImgButton }>
                <Image style={ styles.imgButton } source={ require("../assets/icon_play_scan.png") }/>
              </View>
            </View>
          </TouchableOpacity>
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

  containerContouring: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },

  contouring: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    width: width,
    height: height,
    top: 20,
    position: 'absolute',
  },

  containerLogoGoStyle: {
    zIndex: 11,
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
    flex: 2,
    backgroundColor: "#fff"
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },

  containerButton: {
    zIndex: 10000,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    left:"40%",
    right: "40%",
    bottom: "-5%",

  },

  button: {
    zIndex: 10000,
    borderRadius: 60,
    height: 86,
    width: 87,
    bottom: "20%",
    marginBottom: 15,
    backgroundColor: "#591259",
    justifyContent: "center",
    position: "relative",
  },
  containerImgButton: {
    zIndex: 30,
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
    zIndex: 30,
    width: 58,
    height: 59,
    position: "absolute",
  },

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

  containerDescription: {
    flex: 1,
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
