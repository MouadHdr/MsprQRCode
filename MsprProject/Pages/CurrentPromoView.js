import React from "react";
import { Text, SafeAreaView } from "react-native";

import { firebase, firestore, storage } from "../FireBase/FireBase"

export default function CurrentPromoView() {

  const getPromo = async () => 
  { 
    codePromoDoc = await firestore().collection("Promo").doc("CodePromo").get()
  }

  return (
    <SafeAreaView>
      <Text>PAGE PROMOo oui {codePromoDoc} !! </Text>

      
    </SafeAreaView>
  );
}