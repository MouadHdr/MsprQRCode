import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDVu89COLaJGAW3DdLSje68Z4LxbhVIGXo",
  authDomain: "msprproject.firebaseapp.com",
  projectId: "msprproject",
  storageBucket: "msprproject.appspot.com",
  messagingSenderId: "890103265113",
  appId: "1:890103265113:web:b6588de6fd03bce9c77e48"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
  const db = firebase.firestore();

export default { firebase, db };