import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEJyRMOI-3H8X4Botir5mC2Yba9FobRrc",
  authDomain: "msprqrcode-ed8bb.firebaseapp.com",
  databaseURL: "https://msprqrcode-ed8bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "msprqrcode-ed8bb",
  storageBucket: "msprqrcode-ed8bb.appspot.com",
  messagingSenderId: "320568986464",
  appId: "1:320568986464:web:cf8e9bd26345b298dfac05",
  measurementId: "G-1S5NY7G69W"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

export default { firebase, db };
