import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDAnqe-enF86bd9UMVw3q04AAGDdcMEZX0",
    authDomain: "my-ecommerce-chofi.firebaseapp.com",
    projectId: "my-ecommerce-chofi",
    storageBucket: "my-ecommerce-chofi.appspot.com",
    messagingSenderId: "749494653707",
    appId: "1:749494653707:web:d43a588e3a9cbebd0dc80e"
  };


  // Initialize Firebase

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const itemsCollection = firebase.firestore(app);
  