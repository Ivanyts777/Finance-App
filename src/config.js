import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMdx6hl9sx51ft02ymQImsDvMWpgKANM0",
  authDomain: "mybd-f1205.firebaseapp.com",
  databaseURL: "https://mybd-f1205.firebaseio.com",
  projectId: "mybd-f1205",
  storageBucket: "mybd-f1205.appspot.com",
  messagingSenderId: "58391125343",
  appId: "1:58391125343:web:8e3fb3a6bc853d5982aaea",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
