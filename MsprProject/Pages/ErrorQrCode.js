// import React from 'react'
// import { Image } from 'react-native'
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// import ButtonScan from '../Components/ButtonScan';

// export default function ErrorQrCode() {
//     return (
//         <View style={{ flex: 1 ,justifyContent: 'center', alignItems: 'center',}}>
//             <Image source={require("../assets/logo_gostyle.png")} />
//             <View style={{ borderWidth: 5, padding: 20, borderRadius: 15, borderColor:"#591259", width: "75%", alignItems: 'center',}}>
//                 <View style={{width: "80%", justifyContent: 'center', alignItems: 'center',}}>   
//                     <Text style={{width: 200, textAlign: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10,}}>Aucun Code de Promotion disponible pour ce QR code</Text>
//                     <Text style={{ marginTop: 60, fontSize: 18, }}>Réesseyez</Text>
//                     <Text style={{fontSize: 20,}}>↓</Text>
//                 </View>
//             </View>
//             <View style={{marginTop: 25,}}>        
//                 <ButtonScan />
//             </View>
//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     containerButton: {
//         zIndex: 10000,
//         alignItems: "center",
//         justifyContent: "center",
//         position: 'absolute',
//         left:"40%",
//         right: "40%",
//         bottom: "10%",
//       },
    
//       button: {
//         zIndex: 10000,
//         borderRadius: 60,
//         height: 86,
//         width: 87,
//         bottom: "20%",
//         marginBottom: 15,
//         backgroundColor: "#591259",
//         justifyContent: "center",
//         position: "relative",
//       },
    
//       containerImgButton: {
//         zIndex: 30,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "white",
//         color: "#fff",
//         width: 77,
//         height: 77,
//         borderRadius: 60,
//         position: "absolute",
//         justifyContent: "center",
//         alignItems: "center",
//         right: 5,
//       },
    
//       imgButton: {
//         zIndex: 30,
//         width: 58,
//         height: 59,
//         position: "absolute",
//       },
//   })