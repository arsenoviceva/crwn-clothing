import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDicM7Vs9_HAsHDQzeGXIThbIgxkdQvLzU",
    authDomain: "crwn-db-3764c.firebaseapp.com",
    projectId: "crwn-db-3764c",
    storageBucket: "crwn-db-3764c.appspot.com",
    messagingSenderId: "323895832476",
    appId: "1:323895832476:web:7ecabb76fe4aedb60d2259",
    measurementId: "G-0VG6N2SP1R"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;