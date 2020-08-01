import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAUAoV_Um4CsoBuN04PEsFSG2ccyBJbbPs",
    authDomain: "react-app-db-e23ce.firebaseapp.com",
    databaseURL: "https://react-app-db-e23ce.firebaseio.com",
    projectId: "react-app-db-e23ce",
    storageBucket: "react-app-db-e23ce.appspot.com",
    messagingSenderId: "672159073511",
    appId: "1:672159073511:web:636b73e1a738eddc870e42",
    measurementId: "G-2KM0JZR7GY"
  };

  export const createUserProfileDocument =  async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        }catch(error){
            console.log('error creating user ', error.message);
        }
    }
    
    return userRef;
    
  }

  firebase.initializeApp(config);

  export const auth  = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

