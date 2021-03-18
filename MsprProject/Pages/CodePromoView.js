import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonGoBack from '../Components/ButtonGoBack'

export default function CodePromoView({ route }) {

    const { dataQrCode } = route.params
    var FinalData = JSON.stringify(dataQrCode);
    const size = FinalData.length;

    return (
        <View style={styles.container} >
            <Text> SALAM BERIZZZ {FinalData.replace(/"/g, '')} CAVATOI</Text>
            <ButtonGoBack/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
      justifyContent: "center"
    }
  })
