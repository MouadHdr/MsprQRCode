import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
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
    <View style={{backgroundColor: '#fff',}} >
      <Image style={{position: 'absolute', width:70,height:120, left: "41%"}} source={require("../assets/logo_gostyle.png")} />
      <ScrollView style={{marginTop:90, marginBottom:90}}>
        {
            inPromo.map(inpromo => { 
              return (
                  <ListItem style={{ marginLeft: 17,display: 'flex', maxWidth:"90%",  borderColor:"#591259"}} key={inpromo.id}>
                    <TouchableOpacity style={{borderWidth:2, borderColor: "#591259", borderRadius:60, width: "100%", height: 90,}}>  
                        <ListItem.Content style={{ alignItems: 'center', textAlign: 'center',  }} >
                          <ListItem.Title style={{ textAlign: 'center', width: "95%"}}>{inpromo.name} </ListItem.Title>
                          <ListItem.Subtitle style={{fontWeight: "bold", color:"#591259"}}>{inpromo.newPrice + '€'  }</ListItem.Subtitle>
                          <ListItem.Subtitle style={{textDecorationLine:"line-through", textShadowColor:"#591259", fontSize:12}}>{ inpromo.oldPrice + '€'}</ListItem.Subtitle>
                        </ListItem.Content>
                    </TouchableOpacity>
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
      <Image source={require("../assets/bonsPlans.png")} style={{position: 'absolute', bottom:20, left: 130 , width:120,height: 80}} />
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
