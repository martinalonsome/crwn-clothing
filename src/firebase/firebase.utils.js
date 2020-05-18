import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCwIsYU5ZQbw1oGU2oHsK_pT8VQle3qHts",
    authDomain: "unikist-db.firebaseapp.com",
    databaseURL: "https://unikist-db.firebaseio.com",
    projectId: "unikist-db",
    storageBucket: "unikist-db.appspot.com",
    messagingSenderId: "518929304785",
    appId: "1:518929304785:web:ef0875d4a1b99f4cf949f0",
    measurementId: "G-KKN9BXDNMX"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;