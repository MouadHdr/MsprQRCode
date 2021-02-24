import React from "react";
import { Image,StyleSheet,TouchableOpacity,Text,View, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ButtonGoBack() {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <View style={styles.wrapperGoBack} >
    <TouchableOpacity style={styles.containerButtonBack} onPress={goBack}>
      <View style={styles.buttonBack}>
          <Image
            style={styles.imgButtonGoBack}
            source={require("../assets/goBack.png")}
          />
      </View>
    </TouchableOpacity>
    </View>
  );
}
const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({

  wrapperGoBack:{

    position: 'absolute',
    width: width,
    height: height,
    
  },

  containerButtonBack: {
    position: 'absolute',
    zIndex: 999500,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: 65,
    backgroundColor: '#fff',
  },

  buttonBack: {
    position: 'absolute',
    zIndex: 5900,
    height: 28,
    width: 28,
    justifyContent: "center",
    alignItems: 'center',
  },
});