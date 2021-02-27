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

  const DATA = "BABINKS"; //renvoit moi la valeur du champ numero1 du doc BABINKS

  const database = firebase.firestore();
  database.collection("GoStyleMobileApp")
    .doc("BABINKS")
    .set({ clef: "ALI", clef: "LOU", clef: "BABINKS", });

  return (
    <SafeAreaView>
      <Text>PAGE PROM oui!! </Text>

      
    </SafeAreaView>
  );
}