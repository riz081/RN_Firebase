import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBr6os3HJ_pGEvLSQI-JbQ10x7Aw7NPPrw",
    authDomain: "practice-dc692.firebaseapp.com",
    projectId: "practice-dc692",
    storageBucket: "practice-dc692.appspot.com",
    messagingSenderId: "286254901486",
    appId: "1:286254901486:web:758d98eff451866027ebff",
});

const FIREBASE = firebase;

export default FIREBASE;