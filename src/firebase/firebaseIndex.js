import firebase from "firebase";
import "firebase/auth";
import "firebase/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APP_API_KEY,
    authDomain: process.env.FIREBASE_APP_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_APP_BASEURL,
    projectId: process.env.FIREBASE_APP_PROJECT_ID,
    storageBucket: process.env.FIREBASE_APP_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_APP_ID,
    measurementId: process.env.FIREBASE_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.analytics();

export default {
    firebaseConfig,
};
