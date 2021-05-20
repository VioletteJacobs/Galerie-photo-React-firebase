import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCLOBjxDTrKiYuTb8xTRHeo_uhb8T9Cnos",
    authDomain: "galerie-photo-575f2.firebaseapp.com",
    projectId: "galerie-photo-575f2",
    storageBucket: "galerie-photo-575f2.appspot.com",
    messagingSenderId: "204241506422",
    appId: "1:204241506422:web:ae4879d9a5286398540f57"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};