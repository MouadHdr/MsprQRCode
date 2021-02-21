import React from "react";
import { Image,StyleSheet,TouchableOpacity,Text,View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ButtonGoBack() {

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <TouchableOpacity style={styles.container} onPress={goBack}>
      <View style={styles.button}>
          <Image
            style={styles.imgButton}
            source={require("../assets/goBack.png")}
          />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left:"10%",
    top: "100%",
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10,
    borderWidth: 1.5,
    borderRadius: 65,
  },

  button: {
    height: 28,
    width: 28,
    justifyContent: "center",
    alignItems: 'center',
  },
});