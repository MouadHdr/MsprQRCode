import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, } from 'react-native'
import Clipboard from 'expo-clipboard';
// import { useNavigation } from '@react-navigation/native';

import ButtonGoBack from '../Components/ButtonGoBack'
import firebaseConfig from '../config/FirebaseConfig'

const { width, height } = Dimensions.get("window");

export default function CodePromoView({ route }) {

  // const navigation = useNavigation();
  // const goToErrorQrCode = () => navigation.navigate("ErrorQrCode");

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

  const copyToClipboard = () => {
    Clipboard.setString(CodePromoFinal);
  };
  
  return (
    <View style={styles.container} >
      <Image style={{position: 'absolute', width:200,height:250, left: width/4.5, top: 20,}} source={require("../assets/logo_gostyle.png")} />
      <View style={{ paddingTop: 50, paddingBottom: 80, }}>
        <View style={{width: width-20, backgroundColor: '#591259', borderRadius: 25, borderBottomRightRadius: 0, borderTopLeftRadius: 0, marginBottom: 90,}}>
            <Text style={{textTransform: "uppercase", marginBottom: 0, fontSize:20, textAlign: 'center', color:"#fff"}}>Votre code de réduction : </Text>
        </View>
        {
          codePromos.map(codepromo => {
            if(codepromo.id == FinalData.replace(/"/g, '')) {
              CodePromoFinal = codepromo.ChampCodePromo;
              return (
                <View style={{alignItems: 'center',}}>
                  <View style={{ alignItems: 'center', borderColor:"#591259", borderWidth: 3, height: 100, width: width-50, borderRadius: 65,}}>
                    <View style={{borderWidth: 2, borderColor: "#fff", width: width-80, backgroundColor: '#fff', padding:20, borderRadius:65}}>
                      <Text key={CodePromoFinal} style={{textAlign: 'center', color:"#591259", fontSize:16, marginRight: 20, marginTop: 10,}}> {CodePromoFinal} </Text>
                      
                      <View style={{ position: 'absolute', right: -8, top: 5,}}>
                        <TouchableOpacity onPress={ copyToClipboard } style={{ borderWidth:2, padding:9, borderRadius: 60,}}>
                          <Image style={{ alignItems: 'center', justifyContent: 'center',}} source={require("../assets/copy_paste_icon.png")} />
                          <Text style={{fontSize: 10, textAlign: 'center', fontWeight: "bold",}}>Copier</Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                  </View>
                </View>
              )
            }
            // else if(codepromo.id != FinalData.replace(/"/g, '')) {
            //     goToErrorQrCode();
            // }
          })             
        }
      </View>
      <View style={styles.containerButtonGoBack} > 
        <View style={styles.ButtonGoBack}>
          <ButtonGoBack />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
      justifyContent: "center"
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
  })