import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpfKk7-VmFz5V4gfCyEz0oFoncA69UVEQ",
    authDomain: "eshop-3f4c0.firebaseapp.com",
    projectId: "eshop-3f4c0",
    storageBucket: "eshop-3f4c0.appspot.com",
    messagingSenderId: "872222185731",
    appId: "1:872222185731:web:248b1e1c299b5afb1bb136",
    measurementId: "G-RS6S5QN0D7"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
