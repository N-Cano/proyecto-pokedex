import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBmxu1TEiT3aBJP_5XyMZxVHMBijuh71nk",
    authDomain: "proyecto-pokemon-nahuel-cano.firebaseapp.com",
    projectId: "proyecto-pokemon-nahuel-cano",
    storageBucket: "proyecto-pokemon-nahuel-cano.appspot.com",
    messagingSenderId: "159730963475",
    appId: "1:159730963475:web:bd47fc3bdffc196028dbe6",
    measurementId: "G-7BJJHR0KBD"
  };

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();