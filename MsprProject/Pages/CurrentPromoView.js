import React from "react";
import { Text, SafeAreaView } from "react-native";

import * as firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "../FireBase/FireBaseConfig";

export default function CurrentPromoView() {

  //firebase.initializeApp(firebaseConfig);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  else {
    firebase.app();
  }

  const DATA = ["OUI", "NON"]; //renvoit moi la valeur du champ numero1 du doc BABINKS

  //WRITE
  const database = firebase.firestore();
  database.collection("GoStyleMobileApp")
          .doc("BABINKS")
          .set({ clef: "ALI" });

  //READ
  const MonDocs = database.collection("GoStyleMobileApp").doc("BABINKS").get();

  const listItems = MonDocs.map((MonDoc) => MonDoc);

  return (
    <SafeAreaView>
      <Text>PAGE PROMO oui!! {MonDoc}</Text>

      
    </SafeAreaView>
  );
}