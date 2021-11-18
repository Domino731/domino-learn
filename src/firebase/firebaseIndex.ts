// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBemjG_3wfhmAqQ2XMgBoUgt8S7M0vRudM",
    authDomain: "domino-learn-6d629.firebaseapp.com",
    projectId: "domino-learn-6d629",
    storageBucket: "domino-learn-6d629.appspot.com",
    messagingSenderId: "347774144608",
    appId: "1:347774144608:web:1e54eb53ca57fa01d67305",
    measurementId: "G-9TKWH06P2Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

/** firestore reference -> firebase.firestore() */
export const db = firebase.firestore();