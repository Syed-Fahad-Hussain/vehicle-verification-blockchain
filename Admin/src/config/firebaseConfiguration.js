import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCDjE5b61lX6rcGDUogG2HB-EnvjGwW74Q",
    authDomain: "portfolio-e8d4b.firebaseapp.com",
    databaseURL: "https://portfolio-e8d4b.firebaseio.com",
    projectId: "portfolio-e8d4b",
    storageBucket: "portfolio-e8d4b.appspot.com",
    messagingSenderId: "667794642825"
  };
  firebase.initializeApp(config);

  export const db = firebase.database();
  export const auth = firebase.auth();