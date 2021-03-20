import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ButtonGoBack from '../Components/ButtonGoBack'
import firebaseConfig from '../config/FirebaseConfig'

export default function CodePromoView({ route }) {

  const { dataQrCode } = route.params

  var FinalData = JSON.stringify(dataQrCode);
  var CodePromoFinal;

  const [codePromos, setcodePromos] = useState([])

  useEffect(() => {
    firebaseConfig.db.collection('CollectionCodePromo').onSnapshot(querySnapshot => {
      
      const codePromos = [];

      querySnapshot.docs.forEach((doc) => {
        const { ChampCodePromo } = doc.data()
        codePromos.push({
          id: doc.id,
          ChampCodePromo
        })
      });
  
      setcodePromos(codePromos)
    });
    },[]
  );

  return (
    <View style={styles.container} >
      {
        codePromos.map(codepromo => {
          if(codepromo.id == FinalData.replace(/"/g, '')) {
            CodePromoFinal = codepromo.ChampCodePromo;
            return (
              <View>
                <Text> VALEUR CHAMP = {CodePromoFinal} </Text>
                <Text> DOCUMENT = {codepromo.id} </Text> {/* balise <Texte> inutile */}
              </View>
            )
          }
        })             
      }

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