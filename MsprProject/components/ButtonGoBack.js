import React from "react";
import { Image,StyleSheet,TouchableOpacity,Text,View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ButtonGoBack() {

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container} >
    <TouchableOpacity style={styles.containerButton} onPress={goBack}>
      <View style={styles.button}>
          <Image
            style={styles.imgButtonGoBack}
            source={require("../assets/goBack.png")}
          />
      </View>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    zIndex: 1560,
    position: 'absolute',
    backgroundColor: '#4d4',
  },

  containerButton: {
    position: 'absolute',
    zIndex: 1500,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: 65,
    right: 100,
  },

  button: {
    position: 'absolute',
    zIndex: 5100,
    height: 28,
    width: 28,
    justifyContent: "center",
    alignItems: 'center',

  },
});