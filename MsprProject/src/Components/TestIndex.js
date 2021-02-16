import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

export default function TestIndex() {
    return (
        <View style={styles.container}>
        <Text>PAGE INDEX TEST </Text>
        <StatusBar style="auto" />
        
        {/* <Button onPress={goTo} title={`Go to HomeView`} /> */}
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  
