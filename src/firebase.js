import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAxg5N_CXr36mjABXZbG5OrKVkoO7W6LU4",
    authDomain: "linkedin-clone-b1341.firebaseapp.com",
    projectId: "linkedin-clone-b1341",
    storageBucket: "linkedin-clone-b1341.appspot.com",
    messagingSenderId: "468373009520",
    appId: "1:468373009520:web:24330244e07aa480ee30b5",
    measurementId: "G-CS8E0PGM0J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };  