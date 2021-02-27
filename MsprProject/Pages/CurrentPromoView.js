import React from "react";
import { Text, SafeAreaView } from "react-native";

import * as firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "../FireBase/FireBaseConfig";

export default function CurrentPromoView() {

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  db.collection("GoStyleMobileApp")
    .doc("CodeReduction")
    .set({
      1: "MAMA"
    });

  return (
    <SafeAreaView>
      <Text>PAGE PROMO oui!! </Text>

      
    </SafeAreaView>
  );
}