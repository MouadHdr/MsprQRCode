import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ButtonGoBack from '../Components/ButtonGoBack'
import firebaseConfig from '../config/FirebaseConfig';

export default function CodePromoView({ route }, props) {

    const [codePromos, setcodePromos] = useState([])

    const { dataQrCode } = route.params
    var FinalData = JSON.stringify(dataQrCode);
    const size = FinalData.length;
     
    const { codeId } = props;

    useEffect(() => {
      firebaseConfig.db.collection('CollectionCodePromo').onSnapshot(querySnapshot => {
  
          const codePromos = [];
  
          querySnapshot.docs.forEach((doc) => {
            const { codeN1 } = doc.data()
            codePromos.push({
                codeN1
            })
          });
  
          setcodePromos(codePromos)
      });
    }, []);

    
    
    return (
        <View style={styles.container} >
            {
              codePromos.map(codepromo => {
                return (
                   <View>
                      <Text> {codepromo.codeN1} </Text>
                   </View>
                )
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