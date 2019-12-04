import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClNcRi9A0RnOkPrbNNSVbxM7I5TD8HrVc",
    authDomain: "e-commerce-db-56490.firebaseapp.com",
    databaseURL: "https://e-commerce-db-56490.firebaseio.com",
    projectId: "e-commerce-db-56490",
    storageBucket: "e-commerce-db-56490.appspot.com",
    messagingSenderId: "340384438765",
    appId: "1:340384438765:web:82ba3f43f48a23f9cc6fe4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;