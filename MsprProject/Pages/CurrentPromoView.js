import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import { Dimensions } from "react-native";
import { ListItem } from 'react-native-elements';

import ButtonGoBack from "../Components/ButtonGoBack";
import firebaseConfig from '../config/FirebaseConfig';

const { width, height } = Dimensions.get("window");

export default function CurrentPromoView() {

  const [inPromo, setInPromo] = useState([])

  useEffect(() => {
    firebaseConfig.db.collection('InPromotions').onSnapshot(querySnapshot => {

        const inPromo = [];

        querySnapshot.docs.forEach((doc) => {
          const {name, newPrice, oldPrice} = doc.data()
          inPromo.push({
              id: doc.id,
              name,
              newPrice,
              oldPrice
          })
        });

        setInPromo(inPromo)
    });
  }, []);

  return (
    <View >
      <Text style={{ position: 'absolute', width:"100%",textAlign:"center", marginTop: 50}}>PAGE PROMO !!</Text>
      <ScrollView style={{marginTop:80, marginBottom:90}}>
        {
            inPromo.map(inpromo => {
              return (
                  <ListItem style={{ maxWidth:"90%", marginLeft:15 ,borderWidth:0.8, borderColor:"#591259"}} key={inpromo.id}>
                      <ListItem.Content >
                        <ListItem.Title>{inpromo.name} </ListItem.Title>
                        <ListItem.Subtitle>{inpromo.newPrice + '€' + ' ' + '-' + ' ' + inpromo.oldPrice + '€'}</ListItem.Subtitle>
                      </ListItem.Content>
                  </ListItem>
              )
            })
        }
      </ScrollView>
      <View style={styles.containerButtonGoBack}>
        <View style={styles.ButtonGoBack}>
          <ButtonGoBack />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

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

});
